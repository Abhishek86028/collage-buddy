export default async function handler(req, res) {

    // ==========================================
    // CORS
    // ==========================================

    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, OPTIONS"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }


    try {

        // ==========================================
        // USER INPUT
        // ==========================================

        const location =
            (req.query.location || "").trim();

        const course =
            req.query.course || "all";


        if (!location) {

            return res.status(400).json({
                error: "Location is required"
            });

        }


        // ==========================================
        // ADZUNA API KEYS
        // ==========================================

        const appId =
            process.env.ADZUNA_APP_ID;

        const appKey =
            process.env.ADZUNA_APP_KEY;


        if (!appId || !appKey) {

            return res.status(500).json({

                error:
                    "Adzuna API credentials are not configured on Vercel."

            });

        }


        // ==========================================
        // COURSE SEARCH KEYWORDS
        // ==========================================

        let searches = [

            "part time jobs",
            "student jobs",
            "freelance jobs",
            "internship",
            "work from home part time"

        ];


        // ==========================================
        // B.TECH CSE
        // ==========================================

        if (course === "B.Tech CSE") {

            searches = [

                "part time software developer",
                "part time web developer",
                "part time IT support",
                "software internship",
                "freelance programmer"

            ];

        }


        // ==========================================
        // BCA
        // ==========================================

        if (course === "BCA") {

            searches = [

                "part time software developer",
                "part time web developer",
                "part time IT support",
                "part time data entry",
                "computer internship"

            ];

        }


        // ==========================================
        // BBA
        // ==========================================

        if (course === "BBA") {

            searches = [

                "part time sales",
                "part time marketing",
                "part time customer service",
                "part time business development",
                "business internship"

            ];

        }


        // ==========================================
        // GEOCODE USER ADDRESS
        // ==========================================

        const geoResponse = await fetch(

            "https://nominatim.openstreetmap.org/search?" +

            new URLSearchParams({

                q:
                    location + ", India",

                format:
                    "json",

                addressdetails:
                    "1",

                limit:
                    "1"

            }),

            {

                headers: {

                    "User-Agent":
                        "CollegeBuddy Jobs/1.0"

                }

            }

        );


        if (!geoResponse.ok) {

            return res.status(500).json({

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

                success:
                    true,

                searchedLocation:
                    location,

                course:
                    course,

                count:
                    0,

                jobs:
                    [],

                message:
                    "Location could not be found. Please enter a valid Indian address, area, city or PIN code."

            });

        }


        // ==========================================
        // USER LATITUDE / LONGITUDE
        // ==========================================

        const userLatitude =
            parseFloat(geoData[0].lat);

        const userLongitude =
            parseFloat(geoData[0].lon);


        // ==========================================
        // BETTER LOCATION FOR ADZUNA SEARCH
        // ==========================================

        const address =
            geoData[0].address || {};


        const searchArea =
            address.city ||
            address.town ||
            address.village ||
            address.municipality ||
            address.county ||
            location;


        // ==========================================
        // DISTANCE CALCULATION
        // ==========================================

        function calculateDistance(
            lat1,
            lon1,
            lat2,
            lon2
        ) {

            const earthRadius =
                6371;

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
        // SEARCH ADZUNA
        // ==========================================

        const allJobs = [];


        for (const searchTerm of searches) {

            // Search first 2 pages
            // to get more genuine listings

            for (
                let page = 1;
                page <= 2;
                page++
            ) {

                const params =
                    new URLSearchParams({

                        app_id:
                            appId,

                        app_key:
                            appKey,

                        results_per_page:
                            "10",

                        what:
                            searchTerm,

                        where:
                            searchArea,

                        "content-type":
                            "application/json"

                    });


                const apiUrl =

                    `https://api.adzuna.com/v1/api/jobs/in/search/${page}?${params.toString()}`;


                const response =
                    await fetch(apiUrl);


                if (!response.ok) {

                    console.error(
                        "Adzuna search failed:",
                        searchTerm,
                        "page:",
                        page,
                        "status:",
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

        }


        // ==========================================
        // REMOVE DUPLICATE JOBS
        // ==========================================

        const uniqueJobs = [];

        const seenIds =
            new Set();


        for (const job of allJobs) {

            if (!job.id) {
                continue;
            }


            if (seenIds.has(job.id)) {
                continue;
            }


            seenIds.add(job.id);

            uniqueJobs.push(job);

        }


        // ==========================================
        // FILTER 10 KM + REAL PART-TIME RELEVANCE
        // ==========================================

        const nearbyJobs =
            uniqueJobs.filter(job => {


                // Job must have coordinates

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


                // Calculate distance

                const distance =
                    calculateDistance(

                        userLatitude,
                        userLongitude,

                        jobLatitude,
                        jobLongitude

                    );


                // MUST be within 10 KM

                if (distance > 10) {

                    return false;

                }


                // ==================================
                // JOB TEXT
                // ==================================

                const title =
                    (
                        job.title ||
                        ""
                    ).toLowerCase();


                const description =
                    (
                        job.description ||
                        ""
                    ).toLowerCase();


                const contractTime =
                    (
                        job.contract_time ||
                        ""
                    ).toLowerCase();


                const text =
                    title +
                    " " +
                    description;


                // ==================================
                // STRONG PART-TIME SIGNALS
                // ==================================

                const hasPartTimeSignal =

                    text.includes("part time") ||

                    text.includes("part-time") ||

                    text.includes("freelance") ||

                    text.includes("internship") ||

                    text.includes("intern ") ||

                    text.includes("temporary") ||

                    text.includes("flexible hours") ||

                    text.includes("flexible work") ||

                    text.includes(
                        "student job"
                    ) ||

                    text.includes(
                        "student jobs"
                    ) ||

                    text.includes(
                        "work from home part time"
                    ) ||

                    text.includes(
                        "part time work from home"
                    );


                // ==================================
                // STRONG FULL-TIME SIGNAL
                // ==================================

                const hasFullTimeSignal =

                    text.includes("full time") ||

                    text.includes("full-time");


                // ==================================
                // REMOVE CLEARLY FULL-TIME JOBS
                // ==================================

                if (
                    contractTime === "full_time" &&
                    !hasPartTimeSignal
                ) {

                    return false;

                }


                if (
                    hasFullTimeSignal &&
                    !hasPartTimeSignal
                ) {

                    return false;

                }


                // ==================================
                // MUST HAVE PART-TIME RELEVANCE
                // ==================================

                if (!hasPartTimeSignal) {

                    return false;

                }


                return true;

            });


        // ==========================================
        // SORT BY NEAREST FIRST
        // ==========================================

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


        // ==========================================
        // FORMAT PHONE / EMAIL
        // ONLY IF LISTING PROVIDES IT
        // ==========================================

        function extractPhone(text) {

            const match =
                text.match(
                    /(?:\+91[\s-]?)?[6-9]\d{9}/
                );

            return match
                ? match[0]
                : "";

        }


        function extractEmail(text) {

            const match =
                text.match(
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


                    const distance =
                        calculateDistance(

                            userLatitude,
                            userLongitude,

                            parseFloat(job.latitude),
                            parseFloat(job.longitude)

                        );


                    const description =
                        job.description ||
                        "Job description not available";


                    return {

                        id:
                            job.id || "",


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
                            Number(
                                distance.toFixed(2)
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
                            "",


                        source:
                            "Adzuna"

                    };

                });


        // ==========================================
        // RESPONSE
        // ==========================================

        return res.status(200).json({

            success:
                true,

            searchedLocation:
                location,

            searchedArea:
                searchArea,

            radiusKm:
                10,

            course:
                course,

            count:
                jobs.length,

            jobs:
                jobs

        });


    } catch (error) {

        console.error(
            "Jobs API Error:",
            error
        );


        return res.status(500).json({

            error:
                "Server error",

            message:
                error.message

        });

    }

}