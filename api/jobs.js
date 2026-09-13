export default async function handler(req, res) {

    // ==========================================
    // CORS
    // ==========================================

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    try {

        // ==========================================
        // USER INPUT
        // ==========================================

        const location =
            String(req.query.location || "").trim();

        const course =
            String(req.query.course || "all").trim();

        if (!location) {
            return res.status(400).json({
                success: false,
                error: "Location is required"
            });
        }


        // ==========================================
        // ADZUNA KEYS
        // ==========================================

        const appId =
            process.env.ADZUNA_APP_ID;

        const appKey =
            process.env.ADZUNA_APP_KEY;

        if (!appId || !appKey) {
            return res.status(500).json({
                success: false,
                error:
                    "Adzuna API credentials are not configured on Vercel."
            });
        }


        // ==========================================
        // INDIA WIDE
        // ==========================================

        const indiaWide =
            location.toLowerCase() === "india";


        // ==========================================
        // SEARCH KEYWORDS
        // ==========================================

        let searches = [
            "part time",
            "part-time",
            "freelance",
            "temporary"
        ];


        // ==========================================
        // B.TECH CSE
        // ==========================================

        if (course === "B.Tech CSE") {

            searches = [
                "part time software",
                "part time developer",
                "part time web developer",
                "part time IT",
                "part time computer",
                "part time technical",
                "part time data entry",
                "part time customer support",
                "freelance developer",
                "freelance programmer",
                "freelance web developer",
                "temporary computer"
            ];

        }


        // ==========================================
        // BCA
        // ==========================================

        else if (course === "BCA") {

            searches = [
                "part time computer",
                "part time IT",
                "part time software",
                "part time developer",
                "part time web developer",
                "part time technical support",
                "part time data entry",
                "part time customer support",
                "part time computer operator",
                "freelance developer",
                "freelance web developer",
                "freelance computer",
                "temporary computer",
                "temporary IT"
            ];

        }


        // ==========================================
        // BBA
        // ==========================================

        else if (course === "BBA") {

            searches = [
                "part time sales",
                "part time marketing",
                "part time customer service",
                "part time business development",
                "part time office",
                "part time operations",
                "part time HR",
                "part time telecaller",
                "part time customer support",
                "freelance sales",
                "freelance marketing",
                "freelance business",
                "temporary office",
                "temporary sales"
            ];

        }


        // ==========================================
        // GEOCODE USER LOCATION
        // ==========================================

        let userLatitude = null;
        let userLongitude = null;

        let searchArea = location;


        if (!indiaWide) {

            const geoUrl =
                "https://nominatim.openstreetmap.org/search?" +
                new URLSearchParams({
                    q: location + ", India",
                    format: "json",
                    addressdetails: "1",
                    limit: "1"
                });


            const geoResponse =
                await fetch(
                    geoUrl,
                    {
                        headers: {
                            "User-Agent":
                                "CollegeBuddy Jobs/1.0"
                        }
                    }
                );


            if (!geoResponse.ok) {

                return res.status(500).json({
                    success: false,
                    error:
                        "Unable to find the entered location."
                });

            }


            const geoData =
                await geoResponse.json();


            if (
                !geoData ||
                geoData.length === 0
            ) {

                return res.status(200).json({

                    success: true,

                    searchedLocation:
                        location,

                    searchedArea:
                        location,

                    radiusKm:
                        10,

                    searchMode:
                        "Nearby",

                    course:
                        course,

                    count:
                        0,

                    jobs:
                        [],

                    message:
                        "Location could not be found. Please enter a valid Indian city, area, address or PIN code."

                });

            }


            userLatitude =
                parseFloat(geoData[0].lat);

            userLongitude =
                parseFloat(geoData[0].lon);


            const address =
                geoData[0].address || {};


            searchArea =
                address.city ||
                address.town ||
                address.village ||
                address.municipality ||
                address.county ||
                location;

        }


        // ==========================================
        // DISTANCE CALCULATOR
        // ==========================================

        function calculateDistance(
            lat1,
            lon1,
            lat2,
            lon2
        ) {

            const earthRadius = 6371;

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


            return earthRadius * c;

        }


        // ==========================================
        // ADZUNA SEARCH
        // ==========================================

        const allJobs = [];


        for (const searchTerm of searches) {

            for (let page = 1; page <= 2; page++) {

                /*
                 * Local search:
                 * First search using the actual city/area
                 *
                 * India wide:
                 * Search all India
                 */

                const params =
                    new URLSearchParams({

                        app_id:
                            appId,

                        app_key:
                            appKey,

                        results_per_page:
                            "20",

                        what:
                            searchTerm,

                        where:
                            indiaWide
                                ? "India"
                                : searchArea,

                        sort_by:
                            "relevance",

                        "content-type":
                            "application/json"

                    });


                const apiUrl =
                    `https://api.adzuna.com/v1/api/jobs/in/search/${page}?${params.toString()}`;


                try {

                    const response =
                        await fetch(apiUrl);


                    if (!response.ok) {

                        console.error(
                            "Adzuna failed:",
                            searchTerm,
                            page,
                            response.status
                        );

                        continue;

                    }


                    const data =
                        await response.json();


                    if (
                        data.results &&
                        Array.isArray(data.results)
                    ) {

                        allJobs.push(
                            ...data.results
                        );

                    }

                }

                catch (error) {

                    console.error(
                        "Adzuna request error:",
                        error
                    );

                }

            }

        }


        // ==========================================
        // REMOVE DUPLICATES
        // ==========================================

        const uniqueJobs = [];

        const seenIds = new Set();


        for (const job of allJobs) {

            if (!job.id) {
                continue;
            }


            const id =
                String(job.id);


            if (seenIds.has(id)) {
                continue;
            }


            seenIds.add(id);

            uniqueJobs.push(job);

        }


        // ==========================================
        // FILTER JOBS
        // ==========================================

        const filteredJobs =
            uniqueJobs.filter(job => {

                const title =
                    String(job.title || "")
                    .toLowerCase();

                const description =
                    String(job.description || "")
                    .toLowerCase();

                const contractTime =
                    String(job.contract_time || "")
                    .toLowerCase();


                // ==================================
                // REMOVE INTERNSHIPS
                // ==================================

                if (
                    title.includes("internship") ||
                    title.includes("intern ")
                ) {

                    return false;

                }


                // ==================================
                // REMOVE FULL TIME
                // ==================================

                if (
                    contractTime === "full_time"
                ) {

                    return false;

                }


                // ==================================
                // PART TIME / FREELANCE
                // ==================================

                /*
                 * IMPORTANT:
                 *
                 * If Adzuna itself says contract_time
                 * is part_time, accept the job even if
                 * the words "part time" are missing
                 * from title/description.
                 */

                const isPartTime =
                    contractTime === "part_time" ||

                    title.includes("part time") ||
                    title.includes("part-time") ||
                    title.includes("freelance") ||
                    title.includes("temporary") ||

                    description.includes("part time") ||
                    description.includes("part-time") ||
                    description.includes("freelance") ||
                    description.includes("temporary");


                if (!isPartTime) {

                    return false;

                }


                // ==================================
                // ALL COURSES
                // ==================================

                if (course === "all") {

                    return true;

                }


                // ==================================
                // B.TECH CSE
                // ==================================

                if (course === "B.Tech CSE") {

                    return (

                        title.includes("software") ||
                        title.includes("developer") ||
                        title.includes("web") ||
                        title.includes("programmer") ||
                        title.includes("coding") ||
                        title.includes("computer") ||
                        title.includes("technical") ||
                        title.includes("data") ||
                        title.includes("it ") ||
                        title.startsWith("it") ||

                        description.includes("software") ||
                        description.includes("developer") ||
                        description.includes("programming") ||
                        description.includes("web development") ||
                        description.includes("computer") ||
                        description.includes("information technology") ||
                        description.includes("technical") ||
                        description.includes("data entry") ||
                        description.includes("coding")

                    );

                }


                // ==================================
                // BCA
                // ==================================

                if (course === "BCA") {

                    return (

                        title.includes("software") ||
                        title.includes("developer") ||
                        title.includes("web") ||
                        title.includes("programmer") ||
                        title.includes("coding") ||
                        title.includes("computer") ||
                        title.includes("technical") ||
                        title.includes("data") ||
                        title.includes("it ") ||
                        title.startsWith("it") ||
                        title.includes("customer support") ||

                        description.includes("software") ||
                        description.includes("developer") ||
                        description.includes("programming") ||
                        description.includes("web development") ||
                        description.includes("computer") ||
                        description.includes("information technology") ||
                        description.includes("technical") ||
                        description.includes("data entry") ||
                        description.includes("coding") ||
                        description.includes("computer operator") ||
                        description.includes("customer support")

                    );

                }


                // ==================================
                // BBA
                // ==================================

                if (course === "BBA") {

                    return (

                        title.includes("sales") ||
                        title.includes("marketing") ||
                        title.includes("business") ||
                        title.includes("customer") ||
                        title.includes("office") ||
                        title.includes("hr") ||
                        title.includes("human resource") ||
                        title.includes("management") ||
                        title.includes("operations") ||
                        title.includes("telecaller") ||

                        description.includes("sales") ||
                        description.includes("marketing") ||
                        description.includes("business development") ||
                        description.includes("customer service") ||
                        description.includes("customer support") ||
                        description.includes("management") ||
                        description.includes("human resources") ||
                        description.includes("operations") ||
                        description.includes("office")

                    );

                }


                return false;

            });


        // ==========================================
        // STRICT LOCATION FILTER
        // ==========================================

        const nearbyJobs =
            indiaWide

                ? filteredJobs

                : filteredJobs.filter(job => {

                    /*
                     * Job MUST have valid coordinates.
                     */

                    if (
                        job.latitude === undefined ||
                        job.longitude === undefined ||
                        job.latitude === null ||
                        job.longitude === null
                    ) {

                        return false;

                    }


                    const jobLatitude =
                        parseFloat(job.latitude);

                    const jobLongitude =
                        parseFloat(job.longitude);


                    if (
                        Number.isNaN(jobLatitude) ||
                        Number.isNaN(jobLongitude)
                    ) {

                        return false;

                    }


                    /*
                     * Calculate REAL distance between
                     * user's searched location and job.
                     */

                    const distance =
                        calculateDistance(
                            userLatitude,
                            userLongitude,
                            jobLatitude,
                            jobLongitude
                        );


                    /*
                     * ONLY jobs within 10 KM.
                     */

                    if (distance > 10) {

                        return false;

                    }


                    return true;

                });


        // ==========================================
        // SORT BY NEAREST JOB
        // ==========================================

        if (!indiaWide) {

            nearbyJobs.sort(
                (a, b) => {

                    const distanceA =
                        calculateDistance(
                            userLatitude,
                            userLongitude,
                            parseFloat(a.latitude),
                            parseFloat(a.longitude)
                        );


                    const distanceB =
                        calculateDistance(
                            userLatitude,
                            userLongitude,
                            parseFloat(b.latitude),
                            parseFloat(b.longitude)
                        );


                    return distanceA - distanceB;

                }
            );

        }


        // ==========================================
        // PHONE
        // ==========================================

        function extractPhone(text) {

            const match =
                String(text || "").match(
                    /(?:\+91[\s-]?)?[6-9]\d{9}/
                );


            return match
                ? match[0]
                : "";

        }


        // ==========================================
        // EMAIL
        // ==========================================

        function extractEmail(text) {

            const match =
                String(text || "").match(
                    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
                );


            return match
                ? match[0]
                : "";

        }


        // ==========================================
        // FINAL JOB DATA
        // ==========================================

        const jobs =
            nearbyJobs
                .slice(0, 30)
                .map(job => {

                    let distance = null;


                    if (
                        !indiaWide &&
                        job.latitude !== undefined &&
                        job.longitude !== undefined
                    ) {

                        distance =
                            calculateDistance(
                                userLatitude,
                                userLongitude,
                                parseFloat(job.latitude),
                                parseFloat(job.longitude)
                            );

                    }


                    const description =
                        job.description ||
                        "Job description not available";


                    return {

                        id:
                            String(job.id || ""),

                        title:
                            job.title ||
                            "Job title not available",

                        company:
                            job.company?.display_name ||
                            "Company not provided",

                        location:
                            job.location?.display_name ||
                            searchArea,

                        description:
                            description,

                        salaryMin:
                            job.salary_min ||
                            null,

                        salaryMax:
                            job.salary_max ||
                            null,

                        contractTime:
                            job.contract_time ||
                            "",

                        contractType:
                            job.contract_type ||
                            "",

                        latitude:
                            job.latitude ||
                            null,

                        longitude:
                            job.longitude ||
                            null,

                        distance:
                            distance !== null
                                ? Number(
                                    distance.toFixed(2)
                                )
                                : null,

                        phone:
                            extractPhone(description),

                        email:
                            extractEmail(description),

                        applyUrl:
                            job.redirect_url ||
                            "",

                        source:
                            "Adzuna"

                    };

                });


        // ==========================================
        // FINAL RESPONSE
        // ==========================================

        return res.status(200).json({

            success:
                true,

            searchedLocation:
                location,

            searchedArea:
                searchArea,

            radiusKm:
                indiaWide
                    ? null
                    : 10,

            searchMode:
                indiaWide
                    ? "India"
                    : "Nearby",

            course:
                course,

            count:
                jobs.length,

            jobs:
                jobs

        });


    }

    catch (error) {

        console.error(
            "Jobs API Error:",
            error
        );


        return res.status(500).json({

            success:
                false,

            error:
                "Server error",

            message:
                error.message

        });

    }

}