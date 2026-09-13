export default async function handler(req, res) {

    // ================================
    // CORS
    // ================================
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    try {

        // ================================
        // INPUT
        // ================================
        const location = String(
            req.query.location || ""
        ).trim();

        const course = String(
            req.query.course || ""
        ).trim();

        if (!location) {
            return res.status(400).json({
                success: false,
                message: "Please enter a location."
            });
        }

        if (!course) {
            return res.status(400).json({
                success: false,
                message: "Please select a course."
            });
        }

        // ================================
        // ADZUNA KEYS
        // ================================
        const appId = process.env.ADZUNA_APP_ID;
        const appKey = process.env.ADZUNA_APP_KEY;

        if (!appId || !appKey) {
            return res.status(500).json({
                success: false,
                message: "Adzuna API keys are missing."
            });
        }

        const courseLower = course.toLowerCase();

        // ================================
        // INDIA WIDE
        // ================================
        const indiaWide =
            location.toLowerCase() === "india" ||
            location.toLowerCase() === "all india";

        // ================================
        // USER LOCATION COORDINATES
        // ================================
        let userLat = null;
        let userLon = null;
        let bestLocation = null;

        if (!indiaWide) {

            const geoQueries = [
                `${location}, India`,
                location
            ];

            const candidates = [];

            for (const geoQuery of geoQueries) {

                try {

                    const geoUrl =
                        `https://nominatim.openstreetmap.org/search` +
                        `?format=json` +
                        `&q=${encodeURIComponent(geoQuery)}` +
                        `&countrycodes=in` +
                        `&limit=10` +
                        `&addressdetails=1`;

                    const geoResponse =
                        await fetch(geoUrl, {
                            headers: {
                                "User-Agent":
                                    "CollegeBuddy/1.0"
                            }
                        });

                    if (!geoResponse.ok) {
                        continue;
                    }

                    const geoData =
                        await geoResponse.json();

                    if (Array.isArray(geoData)) {
                        candidates.push(...geoData);
                    }

                } catch (error) {

                    console.log(
                        "Geocoding error:",
                        error.message
                    );
                }
            }

            // Remove duplicate coordinates
            const seen = new Set();

            const uniqueCandidates =
                candidates.filter(item => {

                    const key =
                        `${item.lat},${item.lon}`;

                    if (seen.has(key)) {
                        return false;
                    }

                    seen.add(key);
                    return true;
                });

            if (
                uniqueCandidates.length === 0
            ) {

                return res.status(200).json({
                    success: true,
                    searchedLocation: location,
                    course,
                    radiusKm: 10,
                    count: 0,
                    jobs: [],
                    message:
                        `Location "${location}" could not be found in India.`
                });
            }

            bestLocation =
                uniqueCandidates[0];

            userLat =
                Number(bestLocation.lat);

            userLon =
                Number(bestLocation.lon);

            if (
                !Number.isFinite(userLat) ||
                !Number.isFinite(userLon)
            ) {

                return res.status(200).json({
                    success: true,
                    searchedLocation: location,
                    course,
                    radiusKm: 10,
                    count: 0,
                    jobs: []
                });
            }
        }

        // ================================
        // SEARCH LOCATION
        // ================================
        let searchLocation = location;

        if (!indiaWide && bestLocation) {

            const address =
                bestLocation.address || {};

            searchLocation =
                address.city ||
                address.town ||
                address.village ||
                address.municipality ||
                address.suburb ||
                location;
        }

        // ================================
        // COURSE SEARCH TERMS
        // ================================
        let searchTerms = [];

        if (
            courseLower.includes("b.tech") ||
            courseLower.includes("btech") ||
            courseLower.includes("cse")
        ) {

            searchTerms = [
                "part time developer",
                "part time software",
                "part time web developer",
                "part time computer",
                "part time data entry",
                "freelance developer",
                "freelance software",
                "freelance web developer"
            ];

        } else if (
            courseLower.includes("bca")
        ) {

            searchTerms = [
                "part time developer",
                "part time software",
                "part time web developer",
                "part time computer",
                "part time data entry",
                "freelance developer",
                "freelance software",
                "freelance web developer"
            ];

        } else if (
            courseLower.includes("bba")
        ) {

            searchTerms = [
                "part time sales",
                "part time marketing",
                "part time business",
                "part time customer support",
                "part time office",
                "freelance sales",
                "freelance marketing",
                "freelance business"
            ];

        } else {

            searchTerms = [
                "part time"
            ];
        }

        // ================================
        // ADZUNA SEARCH
        // ================================
        const jobsMap = new Map();

        for (
            const searchTerm
            of searchTerms
        ) {

            try {

                const apiUrl =
                    `https://api.adzuna.com/v1/api/jobs/in/search/1` +
                    `?app_id=${encodeURIComponent(appId)}` +
                    `&app_key=${encodeURIComponent(appKey)}` +
                    `&results_per_page=50` +
                    `&what=${encodeURIComponent(searchTerm)}` +
                    `&where=${encodeURIComponent(searchLocation)}` +
                    `&sort_by=relevance` +
                    `&content-type=application/json`;

                const response =
                    await fetch(apiUrl);

                if (!response.ok) {

                    console.log(
                        "Adzuna response:",
                        response.status
                    );

                    continue;
                }

                const data =
                    await response.json();

                if (
                    !data ||
                    !Array.isArray(data.results)
                ) {
                    continue;
                }

                for (
                    const job
                    of data.results
                ) {

                    if (
                        !job ||
                        !job.id
                    ) {
                        continue;
                    }

                    const id =
                        String(job.id);

                    if (!jobsMap.has(id)) {

                        jobsMap.set(
                            id,
                            job
                        );
                    }
                }

            } catch (error) {

                console.log(
                    "Adzuna search error:",
                    error.message
                );
            }
        }

        let jobs =
            Array.from(
                jobsMap.values()
            );

        // ================================
        // COURSE MATCH
        // ================================
        function matchesCourse(job) {

            const title =
                String(
                    job.title || ""
                ).toLowerCase();

            const description =
                String(
                    job.description || ""
                ).toLowerCase();

            const category =
                String(
                    job.category?.label || ""
                ).toLowerCase();

            const text =
                `${title} ${description} ${category}`;

            if (
                courseLower.includes("b.tech") ||
                courseLower.includes("btech") ||
                courseLower.includes("cse") ||
                courseLower.includes("bca")
            ) {

                const technicalTerms = [
                    "developer",
                    "software",
                    "web developer",
                    "frontend",
                    "front-end",
                    "backend",
                    "back-end",
                    "full stack",
                    "full-stack",
                    "programmer",
                    "programming",
                    "coding",
                    "computer",
                    "technical",
                    "technology",
                    "information technology",
                    "it support",
                    "technical support",
                    "data entry",
                    "data analyst",
                    "database",
                    "sql",
                    "quality assurance",
                    "qa",
                    "testing",
                    "tester",
                    "app developer",
                    "mobile developer",
                    "computer operator",
                    "system administrator",
                    "network",
                    "cyber security"
                ];

                return technicalTerms.some(
                    term =>
                        text.includes(term)
                );
            }

            if (
                courseLower.includes("bba")
            ) {

                const businessTerms = [
                    "sales",
                    "marketing",
                    "business",
                    "business development",
                    "customer support",
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

                return businessTerms.some(
                    term =>
                        text.includes(term)
                );
            }

            return false;
        }

        // ================================
        // PART TIME / FLEXIBLE CHECK
        // ================================
        function isPartTime(job) {

            const contractTime =
                String(
                    job.contract_time || ""
                ).toLowerCase();

            const contractType =
                String(
                    job.contract_type || ""
                ).toLowerCase();

            const text = [
                job.title || "",
                job.description || "",
                contractTime,
                contractType
            ]
                .join(" ")
                .toLowerCase();

            // Never show explicit full-time jobs
            if (
                contractTime === "full_time"
            ) {
                return false;
            }

            if (
                contractType === "full_time"
            ) {
                return false;
            }

            return (
                contractTime === "part_time" ||
                text.includes("part time") ||
                text.includes("part-time") ||
                text.includes("parttime") ||
                text.includes("freelance") ||
                text.includes("temporary") ||
                text.includes("flexible hours") ||
                text.includes("flexible working") ||
                text.includes("student job")
            );
        }

        // ================================
        // REMOVE INTERNSHIPS
        // ================================
        jobs =
            jobs.filter(job => {

                const text = [
                    job.title || "",
                    job.description || "",
                    job.category?.label || ""
                ]
                    .join(" ")
                    .toLowerCase();

                return (
                    !text.includes("internship") &&
                    !text.includes("intern ")
                );
            });

        // ================================
        // COURSE + PART TIME
        // ================================
        jobs =
            jobs.filter(job =>
                matchesCourse(job) &&
                isPartTime(job)
            );

        // ================================
        // HAVERSINE
        // ================================
        function calculateDistance(
            lat1,
            lon1,
            lat2,
            lon2
        ) {

            const earthRadiusKm = 6371;

            const dLat =
                (lat2 - lat1) *
                Math.PI / 180;

            const dLon =
                (lon2 - lon1) *
                Math.PI / 180;

            const a =
                Math.sin(dLat / 2) *
                Math.sin(dLat / 2) +

                Math.cos(
                    lat1 * Math.PI / 180
                ) *

                Math.cos(
                    lat2 * Math.PI / 180
                ) *

                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);

            const c =
                2 *
                Math.atan2(
                    Math.sqrt(a),
                    Math.sqrt(1 - a)
                );

            return earthRadiusKm * c;
        }

        // ================================
        // STRICT LOCATION FILTER
        // ================================
        const filteredJobs = [];

        for (
            const job
            of jobs
        ) {

            // India-wide means no 10 km restriction
            if (indiaWide) {

                filteredJobs.push({
                    job,
                    distance: null
                });

                continue;
            }

            const jobLat =
                Number(job.latitude);

            const jobLon =
                Number(job.longitude);

            // Never guess missing coordinates
            if (
                !Number.isFinite(jobLat) ||
                !Number.isFinite(jobLon)
            ) {
                continue;
            }

            const distance =
                calculateDistance(
                    userLat,
                    userLon,
                    jobLat,
                    jobLon
                );

            // ONLY jobs within 10 KM
            if (distance <= 10) {

                filteredJobs.push({
                    job,
                    distance
                });
            }
        }

        // ================================
        // NEAREST FIRST
        // ================================
        filteredJobs.sort(
            (a, b) => {

                if (
                    a.distance === null
                ) {
                    return 1;
                }

                if (
                    b.distance === null
                ) {
                    return -1;
                }

                return (
                    a.distance -
                    b.distance
                );
            }
        );

        // ================================
        // CONTACT EXTRACTION
        // ================================
        function extractPhone(text) {

            if (!text) {
                return null;
            }

            const matches =
                text.match(
                    /(?:\+91[\s-]?)?[6-9]\d{9}/g
                );

            return (
                matches &&
                matches.length
            )
                ? matches[0]
                : null;
        }

        function extractEmail(text) {

            if (!text) {
                return null;
            }

            const matches =
                text.match(
                    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
                );

            return (
                matches &&
                matches.length
            )
                ? matches[0]
                : null;
        }

        // ================================
        // FINAL JOB OBJECT
        // ================================
        const finalJobs =
            filteredJobs.map(
                item => {

                    const job =
                        item.job;

                    const description =
                        job.description ||
                        "";

                    return {

                        id:
                            String(
                                job.id
                            ),

                        title:
                            job.title ||
                            "Job title not provided",

                        company:
                            job.company?.display_name ||
                            "Company not provided",

                        location:
                            job.location?.display_name ||
                            "Location not provided",

                        description,

                        salary:
                            job.salary_min ||
                            job.salary_max
                                ? `${job.salary_min || ""} - ${job.salary_max || ""}`
                                : "Salary not provided",

                        contractTime:
                            job.contract_time ||
                            "Not specified",

                        distanceKm:
                            item.distance === null
                                ? null
                                : Number(
                                    item.distance.toFixed(2)
                                ),

                        phone:
                            extractPhone(
                                description
                            ),

                        email:
                            extractEmail(
                                description
                            ),

                        applyUrl:
                            job.redirect_url ||
                            null
                    };
                }
            );

        // ================================
        // RESPONSE
        // ================================
        return res.status(200).json({

            success: true,

            searchedLocation:
                location,

            course,

            radiusKm:
                indiaWide
                    ? null
                    : 10,

            count:
                finalJobs.length,

            jobs:
                finalJobs
        });

    } catch (error) {

        console.error(
            "Jobs API Error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Something went wrong while searching jobs.",

            error:
                error.message ||
                "Unknown error"
        });
    }
}