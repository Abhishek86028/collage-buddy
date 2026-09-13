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


        if (course === "B.Tech CSE") {

            searches = [
                "part time software",
                "part time developer",
                "part time web developer",
                "part time IT",
                "freelance developer",
                "freelance programmer",
                "part time data entry",
                "temporary computer"
            ];

        }

        else if (course === "BCA") {

            searches = [
                "part time software",
                "part time developer",
                "part time web developer",
                "part time IT",
                "freelance developer",
                "part time data entry",
                "temporary computer"
            ];

        }

        else if (course === "BBA") {

            searches = [
                "part time sales",
                "part time marketing",
                "part time customer service",
                "part time business development",
                "part time office",
                "freelance sales",
                "temporary office"
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

                    searchedLocation: location,

                    searchedArea: location,

                    radiusKm: 10,

                    searchMode: "Nearby",

                    course: course,

                    count: 0,

                    jobs: [],

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


                // ----------------------------------
                // NO INTERNSHIPS
                // ----------------------------------

                if (
                    title.includes("internship") ||
                    title.includes("intern ")
                ) {
                    return false;
                }


                // ----------------------------------
                // NO FULL TIME
                // ----------------------------------

                if (
                    contractTime === "full_time"
                ) {
                    return false;
                }


                // ----------------------------------
                // PART TIME CHECK
                // ----------------------------------

                const isPartTime =
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


                // ----------------------------------
                // COURSE CHECK
                // ----------------------------------

                if (course === "all") {
                    return true;
                }


                // ----------------------------------
                // BTECH CSE / BCA
                // ----------------------------------

                if (
                    course === "B.Tech CSE" ||
                    course === "BCA"
                ) {

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
                        description.includes("programming") ||
                        description.includes("web development") ||
                        description.includes("computer") ||
                        description.includes("information technology") ||
                        description.includes("technical")

                    );

                }


                // ----------------------------------
                // BBA
                // ----------------------------------

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

                        description.includes("sales") ||
                        description.includes("marketing") ||
                        description.includes("business development") ||
                        description.includes("customer service") ||
                        description.includes("management") ||
                        description.includes("human resources")

                    );

                }


                return false;

            });


        // ==========================================
        // STRICT LOCATION + 10 KM FILTER
        // ==========================================

        const nearbyJobs =
            indiaWide

                ? filteredJobs

                : filteredJobs.filter(job => {

                    // Job MUST have coordinates
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


                    const distance =
                        calculateDistance(
                            userLatitude,
                            userLongitude,
                            jobLatitude,
                            jobLongitude
                        );


                    // MUST be within 10 km
                    if (distance > 10) {
                        return false;
                    }


                    // ----------------------------------
                    // EXTRA LOCATION VERIFICATION
                    // ----------------------------------

                    const jobLocation =
                        String(
                            job.location?.display_name || ""
                        ).toLowerCase();

                    const searchedAreaLower =
                        String(
                            searchArea || ""
                        ).toLowerCase();

                    const enteredLocationLower =
                        location.toLowerCase();


                    /*
                     * If Adzuna gives a location name,
                     * make sure it is not obviously
                     * from another major city.
                     */

                    const knownCities = [
                        "delhi",
                        "new delhi",
                        "mumbai",
                        "bombay",
                        "bangalore",
                        "bengaluru",
                        "hyderabad",
                        "pune",
                        "jaipur",
                        "dehradun",
                        "chandigarh",
                        "lucknow",
                        "noida",
                        "gurgaon",
                        "gurugram",
                        "kolkata",
                        "chennai",
                        "ahmedabad",
                        "surat",
                        "indore",
                        "bhopal",
                        "kanpur",
                        "nagpur",
                        "patna",
                        "agra",
                        "varanasi"
                    ];


                    const otherMajorCity =
                        knownCities.some(city => {

                            if (
                                !jobLocation.includes(city)
                            ) {
                                return false;
                            }


                            /*
                             * Allow the searched city.
                             */

                            if (
                                searchedAreaLower.includes(city) ||
                                enteredLocationLower.includes(city)
                            ) {
                                return false;
                            }


                            /*
                             * Otherwise this listing
                             * explicitly belongs to
                             * another major city.
                             */

                            return true;

                        });


                    if (otherMajorCity) {
                        return false;
                    }


                    return true;

                });


        // ==========================================
        // SORT BY DISTANCE
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