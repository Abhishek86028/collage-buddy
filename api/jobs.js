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
        // GET PARAMETERS
        // ================================
        const location = String(req.query.location || "").trim();
        const course = String(req.query.course || "").trim();

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

       // ================================
// COURSE KEYWORDS
// ================================
let courseKeywords = [];
let courseLower = course.toLowerCase();

if (
    courseLower.includes("b.tech") ||
    courseLower.includes("btech") ||
    courseLower.includes("cse")
) {
    courseKeywords = [
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
        "technical",
        "technology",
        "information technology",
        "IT",
        "data",
        "database",
        "SQL",
        "QA",
        "testing",
        "tester",
        "app developer",
        "mobile developer",
        "cyber security",
        "network",
        "system administrator",
        "data entry"
    ];
} else if (courseLower.includes("bca")) {
    courseKeywords = [
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
        "technical",
        "technology",
        "information technology",
        "IT",
        "data",
        "database",
        "SQL",
        "QA",
        "testing",
        "tester",
        "app developer",
        "mobile developer",
        "computer operator",
        "data entry",
        "technical support",
        "IT support",
        "customer support"
    ];
} else if (courseLower.includes("bba")) {
    courseKeywords = [
        "sales",
        "marketing",
        "business",
        "business development",
        "customer",
        "customer support",
        "HR",
        "human resources",
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
} else {
    courseKeywords = [
        "student",
        "computer",
        "office",
        "data",
        "customer support"
    ];
}

        // ================================
        // INDIA-WIDE SEARCH
        // ================================
        const indiaWide =
            location.toLowerCase() === "india" ||
            location.toLowerCase() === "all india";

        // ================================
        // GEOCODING
        // ================================
        let userLat = null;
        let userLon = null;

        let locationCandidates = [];

        if (!indiaWide) {
            const geoQueries = [
                `${location}, India`,
                location
            ];

            for (const geoQuery of geoQueries) {
                try {
                    const geoUrl =
                        `https://nominatim.openstreetmap.org/search` +
                        `?format=json` +
                        `&q=${encodeURIComponent(geoQuery)}` +
                        `&countrycodes=in` +
                        `&limit=5` +
                        `&addressdetails=1`;

                    const geoResponse = await fetch(geoUrl, {
                        headers: {
                            "User-Agent": "CollegeBuddy/1.0"
                        }
                    });

                    if (!geoResponse.ok) {
                        continue;
                    }

                    const geoData = await geoResponse.json();

                    if (Array.isArray(geoData)) {
                        locationCandidates.push(...geoData);
                    }
                } catch (error) {
                    console.log("Geocoding error:", error.message);
                }
            }

            // Remove duplicate coordinates
            const seenCoordinates = new Set();

            locationCandidates = locationCandidates.filter((item) => {
                const key = `${item.lat},${item.lon}`;

                if (seenCoordinates.has(key)) {
                    return false;
                }

                seenCoordinates.add(key);
                return true;
            });

            if (locationCandidates.length === 0) {
                return res.status(200).json({
                    success: true,
                    searchedLocation: location,
                    course,
                    radiusKm: 10,
                    count: 0,
                    jobs: [],
                    message: `Location "${location}" could not be found in India.`
                });
            }

            // Best matching location
            const bestLocation = locationCandidates[0];

            userLat = Number(bestLocation.lat);
            userLon = Number(bestLocation.lon);
        }

        // ================================
        // LOCATION SEARCH TERMS
        // ================================
        let locationSearches = [];

        if (indiaWide) {
            locationSearches = [
                "India"
            ];
        } else {
            const best = locationCandidates[0];
            const address = best.address || {};

            const values = [
                location,
                address.city,
                address.town,
                address.village,
                address.municipality,
                address.suburb,
                address.county,
                address.district,
                address.state_district,
                address.state
            ];

            for (const value of values) {
                if (value && typeof value === "string") {
                    const cleanValue = value.trim();

                    if (
                        cleanValue &&
                        !locationSearches.some(
                            x => x.toLowerCase() === cleanValue.toLowerCase()
                        )
                    ) {
                        locationSearches.push(cleanValue);
                    }
                }
            }

            // Maximum 4 location variants
            locationSearches = locationSearches.slice(0, 4);
        }

        // ================================
        // HAVERSINE DISTANCE
        // ================================
        function calculateDistance(lat1, lon1, lat2, lon2) {
            const earthRadiusKm = 6371;

            const dLat =
                (lat2 - lat1) * Math.PI / 180;

            const dLon =
                (lon2 - lon1) * Math.PI / 180;

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

            return earthRadiusKm * c;
        }

        // ================================
        // ADZUNA SEARCH TERMS
        // ================================
        const searchTerms = [
            "part time",
            "part-time",
            "freelance",
            "temporary",
            "student job",
            "part time student"
        ];

        const jobsMap = new Map();

        // ================================
        // SEARCH ADZUNA
        // ================================
        for (const searchTerm of searchTerms) {
            for (const searchLocation of locationSearches) {
                try {
                    const apiUrl =
                        `https://api.adzuna.com/v1/api/jobs/in/search/1` +
                        `?app_id=${encodeURIComponent(appId)}` +
                        `&app_key=${encodeURIComponent(appKey)}` +
                        `&results_per_page=50` +
                        `&what=${encodeURIComponent(searchTerm)}` +
                        `&where=${encodeURIComponent(searchLocation)}` +
                        `&content-type=application/json`;

                    const response = await fetch(apiUrl);

                    if (!response.ok) {
                        console.log(
                            "Adzuna response:",
                            response.status
                        );
                        continue;
                    }

                    const data = await response.json();

                    if (!data || !Array.isArray(data.results)) {
                        continue;
                    }

                    for (const job of data.results) {
                        if (!job || !job.id) {
                            continue;
                        }

                        if (!jobsMap.has(String(job.id))) {
                            jobsMap.set(String(job.id), job);
                        }
                    }
                } catch (error) {
                    console.log(
                        "Adzuna search error:",
                        error.message
                    );
                }
            }
        }

        let jobs = Array.from(jobsMap.values());

        // ================================
// STRICT COURSE RELEVANCE
// ================================
function matchesCourse(job) {
    const title = String(job.title || "").toLowerCase();
    const description = String(job.description || "").toLowerCase();
    const category = String(job.category?.label || "").toLowerCase();

    const text = `${title} ${description} ${category}`;

    // ================================
    // B.TECH CSE / BCA
    // ================================
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
            "technical",
            "technology",
            "information technology",
            "it support",
            "technical support",
            "data entry",
            "data analyst",
            "data",
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
            "cyber security",
            "customer support"
        ];

        return technicalTerms.some(term =>
            text.includes(term)
        );
    }

    // ================================
    // BBA
    // ================================
    if (courseLower.includes("bba")) {
        const businessTerms = [
            "sales",
            "marketing",
            "business",
            "business development",
            "customer",
            "customer support",
            "hr",
            "human resources",
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

        // ================================
        // PART-TIME RELEVANCE
        // ================================
        function isPartTime(job) {
            const text = [
                job.title || "",
                job.description || "",
                job.contract_type || "",
                job.contract_time || ""
            ]
                .join(" ")
                .toLowerCase();

            const positiveTerms = [
                "part time",
                "part-time",
                "parttime",
                "freelance",
                "temporary",
                "student job",
                "flexible hours",
                "flexible working"
            ];

            return positiveTerms.some(term =>
                text.includes(term)
            );
        }

        // ================================
        // REMOVE INTERNSHIPS
        // ================================
        jobs = jobs.filter(job => {
            const text = [
                job.title || "",
                job.description || "",
                job.category?.label || ""
            ]
                .join(" ")
                .toLowerCase();

            return !text.includes("internship");
        });

        // ================================
        // REMOVE CLEAR FULL-TIME JOBS
        // ================================
        jobs = jobs.filter(job => {
            const contractTime =
                String(job.contract_time || "").toLowerCase();

            if (contractTime === "full_time") {
                return false;
            }

            return true;
        });

        // ================================
        // PART-TIME + COURSE FILTER
        // ================================
        jobs = jobs.filter(job => {
            return isPartTime(job) && matchesCourse(job);
        });

        // ================================
        // DISTANCE FILTER
        // ================================
        const filteredJobs = [];

        for (const job of jobs) {
            const jobLat = Number(
                job.latitude
            );

            const jobLon = Number(
                job.longitude
            );

            // India-wide = no 10 km filter
            if (indiaWide) {
                filteredJobs.push({
                    job,
                    distance: null
                });

                continue;
            }

            // Job must have coordinates
            if (
                !Number.isFinite(jobLat) ||
                !Number.isFinite(jobLon) ||
                !Number.isFinite(userLat) ||
                !Number.isFinite(userLon)
            ) {
                continue;
            }

            const distance = calculateDistance(
                userLat,
                userLon,
                jobLat,
                jobLon
            );

            // STRICT 10 KM
            if (distance <= 10) {
                filteredJobs.push({
                    job,
                    distance
                });
            }
        }

        // ================================
        // SORT NEAREST FIRST
        // ================================
        filteredJobs.sort((a, b) => {
            if (
                a.distance === null ||
                b.distance === null
            ) {
                return 0;
            }

            return a.distance - b.distance;
        });

        // ================================
        // EXTRACT CONTACT DETAILS
        // ================================
        function extractPhone(text) {
            if (!text) {
                return null;
            }

            const matches = text.match(
                /(?:\+91[\s-]?)?[6-9]\d{9}/g
            );

            return matches && matches.length
                ? matches[0]
                : null;
        }

        function extractEmail(text) {
            if (!text) {
                return null;
            }

            const matches = text.match(
                /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
            );

            return matches && matches.length
                ? matches[0]
                : null;
        }

        // ================================
        // FINAL RESPONSE
        // ================================
        const finalJobs = filteredJobs.map(item => {
            const job = item.job;

            const description =
                job.description || "";

            const phone =
                extractPhone(description);

            const email =
                extractEmail(description);

            return {
                id: String(job.id),

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
                    job.salary_min || job.salary_max
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

                phone,

                email,

                applyUrl:
                    job.redirect_url ||
                    null
            };
        });

        // ================================
        // RESPONSE
        // ================================
        return res.status(200).json({
            success: true,

            searchedLocation: location,

            course,

            radiusKm:
                indiaWide ? null : 10,

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
            message: "Something went wrong while searching jobs.",
            error:
                error.message || "Unknown error"
        });
    }
}