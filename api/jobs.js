export default async function handler(req, res) {
    // =========================
    // CORS
    // =========================
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "GET") {
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }

    try {
        // =========================
        // INPUT
        // =========================
        const location = String(req.query.location || "").trim();
        const course = String(req.query.course || "").trim();

        if (!location || !course) {
            return res.status(400).json({
                success: false,
                error: "Location and course are required"
            });
        }

        const appId = process.env.ADZUNA_APP_ID;
        const appKey = process.env.ADZUNA_APP_KEY;

        if (!appId || !appKey) {
            return res.status(500).json({
                success: false,
                error: "Adzuna API keys are missing"
            });
        }

        // =========================
        // INDIA WIDE
        // =========================
        const indiaWide =
            location.toLowerCase() === "india" ||
            location.toLowerCase() === "all india";

        // =========================
        // GEOCODE LOCATION
        // =========================
        let userLat = null;
        let userLon = null;
        let searchedLocation = location;

        if (!indiaWide) {
            const geoQueries = [
                `${location}, India`,
                location
            ];

            let geoResults = [];

            for (const query of geoQueries) {
                try {
                    const geoUrl =
                        `https://nominatim.openstreetmap.org/search` +
                        `?format=json` +
                        `&q=${encodeURIComponent(query)}` +
                        `&countrycodes=in` +
                        `&limit=5` +
                        `&addressdetails=1`;

                    const geoResponse = await fetch(geoUrl, {
                        headers: {
                            "User-Agent": "CollegeBuddy/1.0"
                        }
                    });

                    if (geoResponse.ok) {
                        const data = await geoResponse.json();

                        if (Array.isArray(data)) {
                            geoResults.push(...data);
                        }
                    }
                } catch (error) {
                    console.log("Geocoding error:", error.message);
                }
            }

            // Remove duplicate coordinates
            const uniqueGeo = [];
            const seenGeo = new Set();

            for (const item of geoResults) {
                const key = `${item.lat},${item.lon}`;

                if (!seenGeo.has(key)) {
                    seenGeo.add(key);
                    uniqueGeo.push(item);
                }
            }

            if (!uniqueGeo.length) {
                return res.status(200).json({
                    success: true,
                    searchedLocation: location,
                    course,
                    radiusKm: 10,
                    count: 0,
                    jobs: []
                });
            }

            // Prefer result whose address contains the entered location
            const locationLower = location.toLowerCase();

            let bestLocation = uniqueGeo.find(item => {
                const addressText = JSON.stringify(
                    item.address || {}
                ).toLowerCase();

                const displayName =
                    String(item.display_name || "").toLowerCase();

                return (
                    addressText.includes(locationLower) ||
                    displayName.includes(locationLower)
                );
            });

            if (!bestLocation) {
                bestLocation = uniqueGeo[0];
            }

            userLat = Number(bestLocation.lat);
            userLon = Number(bestLocation.lon);

            const address = bestLocation.address || {};

            searchedLocation =
                address.city ||
                address.town ||
                address.village ||
                address.municipality ||
                address.suburb ||
                location;
        }

        // =========================
        // COURSE SEARCH TERMS
        // =========================
        const courseLower = course.toLowerCase();

        let courseTerms = [];

        if (
            courseLower.includes("b.tech") ||
            courseLower.includes("btech") ||
            courseLower.includes("cse") ||
            courseLower.includes("bca")
        ) {
            courseTerms = [
                "developer",
                "software",
                "web developer",
                "data entry",
                "IT",
                "technical support",
                "computer operator"
            ];
        } else if (courseLower.includes("bba")) {
            courseTerms = [
                "sales",
                "marketing",
                "business development",
                "customer support",
                "office",
                "HR",
                "accounts"
            ];
        } else {
            courseTerms = [course];
        }

        // =========================
        // SEARCH TERMS
        // Maximum controlled requests
        // =========================
        const searchTerms = [
            ...courseTerms.slice(0, 4),
            "part time",
            "freelance"
        ];

        // =========================
        // ADZUNA SEARCH
        // =========================
        const allJobs = new Map();
        const partTimeSearchIds = new Set();

        for (const searchTerm of searchTerms) {
            const url =
                `https://api.adzuna.com/v1/api/jobs/in/search/1` +
                `?app_id=${encodeURIComponent(appId)}` +
                `&app_key=${encodeURIComponent(appKey)}` +
                `&results_per_page=50` +
                `&what=${encodeURIComponent(searchTerm)}` +
                `&where=${encodeURIComponent(searchedLocation)}` +
                `&sort_by=relevance` +
                `&content-type=application/json`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    console.log(
                        "Adzuna error:",
                        response.status,
                        searchTerm
                    );
                    continue;
                }

                const data = await response.json();

                if (!Array.isArray(data.results)) {
                    continue;
                }

                for (const job of data.results) {
                    if (!job || !job.id) {
                        continue;
                    }

                    const id = String(job.id);

                    if (
                        searchTerm === "part time" ||
                        searchTerm === "freelance"
                    ) {
                        partTimeSearchIds.add(id);
                    }

                    if (!allJobs.has(id)) {
                        allJobs.set(id, job);
                    }
                }
            } catch (error) {
                console.log(
                    "Adzuna request failed:",
                    searchTerm,
                    error.message
                );
            }
        }

        // =========================
        // HELPERS
        // =========================
        function jobText(job) {
            return (
                `${job.title || ""} ` +
                `${job.description || ""} ` +
                `${job.category?.label || ""} ` +
                `${job.contract_type || ""} ` +
                `${job.contract_time || ""}`
            ).toLowerCase();
        }

        function matchesCourse(job) {
            const text = jobText(job);

            if (
                courseLower.includes("b.tech") ||
                courseLower.includes("btech") ||
                courseLower.includes("cse") ||
                courseLower.includes("bca")
            ) {
                const technicalTerms = [
                    "software",
                    "developer",
                    "web developer",
                    "frontend",
                    "backend",
                    "full stack",
                    "programmer",
                    "programming",
                    "coding",
                    "computer",
                    "information technology",
                    "it support",
                    "technical support",
                    "data entry",
                    "data analyst",
                    "database",
                    "sql",
                    "qa",
                    "quality assurance",
                    "testing",
                    "tester",
                    "app developer",
                    "mobile developer",
                    "computer operator",
                    "system administrator",
                    "network",
                    "cyber security"
                ];

                return technicalTerms.some(term =>
                    text.includes(term)
                );
            }

            if (courseLower.includes("bba")) {
                const businessTerms = [
                    "sales",
                    "marketing",
                    "business",
                    "business development",
                    "customer support",
                    "customer service",
                    "human resources",
                    "hr",
                    "management",
                    "operations",
                    "telecaller",
                    "administration",
                    "admin",
                    "relationship",
                    "finance",
                    "account",
                    "accounting",
                    "office",
                    "receptionist",
                    "recruitment",
                    "digital marketing",
                    "social media",
                    "retail"
                ];

                return businessTerms.some(term =>
                    text.includes(term)
                );
            }

            return false;
        }

        function isPartTime(job) {
            const id = String(job.id || "");
            const text = jobText(job);

            const contractTime =
                String(job.contract_time || "").toLowerCase();

            const contractType =
                String(job.contract_type || "").toLowerCase();

            // Never accept explicitly full-time jobs
            if (
                contractTime === "full_time" ||
                contractType === "full_time"
            ) {
                return false;
            }

            // Explicit Adzuna metadata
            if (contractTime === "part_time") {
                return true;
            }

            // Explicit wording
            const partTimeWords = [
                "part time",
                "part-time",
                "parttime",
                "freelance",
                "temporary",
                "flexible hours",
                "flexible working",
                "student job"
            ];

            if (
                partTimeWords.some(word =>
                    text.includes(word)
                )
            ) {
                return true;
            }

            // Job was returned specifically from
            // Adzuna's part-time/freelance search.
            if (partTimeSearchIds.has(id)) {
                return true;
            }

            return false;
        }

        function isInternship(job) {
            const text = jobText(job);

            return (
                text.includes("internship") ||
                text.includes("intern intern") ||
                text.includes("internship program")
            );
        }

        function distanceKm(lat1, lon1, lat2, lon2) {
            const R = 6371;

            const dLat =
                (lat2 - lat1) *
                Math.PI /
                180;

            const dLon =
                (lon2 - lon1) *
                Math.PI /
                180;

            const a =
                Math.sin(dLat / 2) *
                Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) *
                Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);

            const c =
                2 *
                Math.atan2(
                    Math.sqrt(a),
                    Math.sqrt(1 - a)
                );

            return R * c;
        }

        function extractPhone(text) {
            const matches = String(text || "").match(
                /(?:\+91[\s-]?)?[6-9]\d{9}/g
            );

            return matches
                ? matches[0]
                : null;
        }

        function extractEmail(text) {
            const matches = String(text || "").match(
                /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
            );

            return matches
                ? matches[0]
                : null;
        }

        // =========================
        // FINAL FILTER
        // =========================
        const finalJobs = [];

        for (const job of allJobs.values()) {
            // Course relevance
            if (!matchesCourse(job)) {
                continue;
            }

            // Part time / freelance only
            if (!isPartTime(job)) {
                continue;
            }

            // No internships
            if (isInternship(job)) {
                continue;
            }

            let distance = null;

            // =========================
            // STRICT 10 KM FILTER
            // =========================
            if (!indiaWide) {
                const jobLat = Number(job.latitude);
                const jobLon = Number(job.longitude);

                if (
                    !Number.isFinite(jobLat) ||
                    !Number.isFinite(jobLon) ||
                    !Number.isFinite(userLat) ||
                    !Number.isFinite(userLon)
                ) {
                    continue;
                }

                distance = distanceKm(
                    userLat,
                    userLon,
                    jobLat,
                    jobLon
                );

                // THIS IS THE FINAL LOCATION AUTHORITY
                if (distance > 10) {
                    continue;
                }
            }

            const description =
                String(job.description || "");

            const company =
                job.company?.display_name ||
                "Company not provided";

            finalJobs.push({
                id: String(job.id),
                title: job.title || "Job title not provided",
                company,
                location:
                    job.location?.display_name ||
                    "Location not provided",
                description,
                salary:
                    job.salary_min || job.salary_max
                        ? {
                              min: job.salary_min || null,
                              max: job.salary_max || null,
                              currency:
                                  job.salary_is_predicted
                                      ? "Predicted"
                                      : "INR"
                          }
                        : null,
                contractTime:
                    job.contract_time || null,
                distanceKm:
                    distance === null
                        ? null
                        : Number(distance.toFixed(2)),
                phone:
                    extractPhone(description),
                email:
                    extractEmail(description),
                applyUrl:
                    job.redirect_url || null
            });
        }

        // =========================
        // SORT
        // =========================
        finalJobs.sort((a, b) => {
            if (
                a.distanceKm !== null &&
                b.distanceKm !== null
            ) {
                return a.distanceKm - b.distanceKm;
            }

            return a.title.localeCompare(b.title);
        });

        // =========================
        // RESPONSE
        // =========================
        return res.status(200).json({
            success: true,
            searchedLocation,
            course,
            radiusKm: indiaWide ? null : 10,
            count: finalJobs.length,
            jobs: finalJobs
        });

    } catch (error) {
        console.error("Jobs API error:", error);

        return res.status(500).json({
            success: false,
            error: "Unable to search jobs",
            message: error.message
        });
    }
}