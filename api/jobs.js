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
    // COURSE KEYWORDS
    // ==========================================

    let searches = [
        "part time",
        "freelance",
        "temporary"
    ];


    if (course === "B.Tech CSE") {

        searches = [
            "part time developer",
            "part time IT",
            "part time computer",
            "part time data",
            "part time technical",
            "freelance developer",
            "freelance programmer",
            "freelance web developer"
        ];

    }


    else if (course === "BCA") {

        searches = [
            "part time computer",
            "part time IT",
            "part time developer",
            "part time data",
            "part time technical",
            "part time customer support",
            "freelance developer",
            "freelance computer"
        ];

    }


    else if (course === "BBA") {

        searches = [
            "part time sales",
            "part time marketing",
            "part time business",
            "part time customer",
            "part time office",
            "part time operations",
            "part time HR",
            "freelance sales"
        ];

    }


    // ==========================================
    // GEOCODE USER LOCATION
    // ==========================================

    let userLatitude = null;
    let userLongitude = null;

    let searchArea = location;

    let district = "";
    let state = "";

    let locationSearches = [];


    if (!indiaWide) {

        const geoQueries = [
            `${location}, India`,
            location
        ];

        let geoData = [];


        // --------------------------------------
        // Try multiple geocoding queries
        // --------------------------------------

        for (const geoQuery of geoQueries) {

            try {

                const geoUrl =
                    "https://nominatim.openstreetmap.org/search?" +
                    new URLSearchParams({
                        q: geoQuery,
                        format: "json",
                        addressdetails: "1",
                        countrycodes: "in",
                        limit: "5"
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


                if (geoResponse.ok) {

                    const result =
                        await geoResponse.json();

                    if (
                        Array.isArray(result) &&
                        result.length > 0
                    ) {

                        geoData = result;
                        break;

                    }

                }

            }

            catch (error) {

                console.error(
                    "Geocoding error:",
                    error
                );

            }

        }


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
                    "Location could not be found. Please enter a valid Indian city, area, district or PIN code."

            });

        }


        // --------------------------------------
        // Select best Indian result
        // --------------------------------------

        const geo =
            geoData.find(item =>
                item.address?.country_code === "in"
            ) || geoData[0];


        userLatitude =
            parseFloat(geo.lat);

        userLongitude =
            parseFloat(geo.lon);


        const address =
            geo.address || {};


        searchArea =
            address.city ||
            address.town ||
            address.village ||
            address.municipality ||
            address.county ||
            address.district ||
            location;


        district =
            address.city_district ||
            address.district ||
            address.county ||
            "";


        state =
            address.state ||
            "";


        // --------------------------------------
        // Multiple Adzuna location searches
        // --------------------------------------

        locationSearches = [
            location,
            searchArea,
            district,
            state
        ]
            .map(value =>
                String(value || "").trim()
            )
            .filter(Boolean)
            .filter(
                (value, index, array) =>
                    array.indexOf(value) === index
            );


        // Maximum 3 location variations
        locationSearches =
            locationSearches.slice(0, 3);

    }

    else {

        locationSearches = ["India"];

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


    /*
     * We use multiple location variations.
     *
     * Example:
     *
     * Bhopal
     * Madhya Pradesh
     *
     * But the final 10 km coordinate filter
     * remains compulsory.
     */

    for (const searchTerm of searches) {

        for (const whereLocation of locationSearches) {

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
                        whereLocation,

                    sort_by:
                        "relevance",

                    "content-type":
                        "application/json"

                });


            const apiUrl =
                `https://api.adzuna.com/v1/api/jobs/in/search/1?${params.toString()}`;


            try {

                const response =
                    await fetch(apiUrl);


                if (!response.ok) {

                    console.error(
                        "Adzuna failed:",
                        searchTerm,
                        whereLocation,
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
    // COURSE MATCHING
    // ==========================================

    function matchesCourse(
        title,
        description
    ) {

        const text =
            `${title} ${description}`
            .toLowerCase();


        // --------------------------------------
        // All courses
        // --------------------------------------

        if (course === "all") {
            return true;
        }


        // --------------------------------------
        // B.Tech CSE
        // --------------------------------------

        if (course === "B.Tech CSE") {

            return (

                text.includes("software") ||
                text.includes("developer") ||
                text.includes("web") ||
                text.includes("programmer") ||
                text.includes("programming") ||
                text.includes("coding") ||
                text.includes("computer") ||
                text.includes("technical") ||
                text.includes("technology") ||
                text.includes("information technology") ||
                text.includes("data") ||
                text.includes("it ") ||
                text.startsWith("it") ||
                text.includes("qa") ||
                text.includes("testing") ||
                text.includes("app developer") ||
                text.includes("application developer")

            );

        }


        // --------------------------------------
        // BCA
        // --------------------------------------

        if (course === "BCA") {

            return (

                text.includes("software") ||
                text.includes("developer") ||
                text.includes("web") ||
                text.includes("programmer") ||
                text.includes("programming") ||
                text.includes("coding") ||
                text.includes("computer") ||
                text.includes("technical") ||
                text.includes("technology") ||
                text.includes("information technology") ||
                text.includes("data") ||
                text.includes("it ") ||
                text.startsWith("it") ||
                text.includes("customer support") ||
                text.includes("computer operator") ||
                text.includes("data entry") ||
                text.includes("qa") ||
                text.includes("testing") ||
                text.includes("app")

            );

        }


        // --------------------------------------
        // BBA
        // --------------------------------------

        if (course === "BBA") {

            return (

                text.includes("sales") ||
                text.includes("marketing") ||
                text.includes("business") ||
                text.includes("customer") ||
                text.includes("office") ||
                text.includes("hr") ||
                text.includes("human resource") ||
                text.includes("management") ||
                text.includes("operations") ||
                text.includes("telecaller") ||
                text.includes("administration") ||
                text.includes("admin") ||
                text.includes("relationship") ||
                text.includes("finance") ||
                text.includes("account")

            );

        }


        return false;

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
            // REMOVE INTERNSHIPS
            // ----------------------------------

            if (
                title.includes("internship") ||
                title.includes("intern ")
            ) {

                return false;

            }


            // ----------------------------------
            // REMOVE FULL TIME
            // ----------------------------------

            if (
                contractTime === "full_time"
            ) {

                return false;

            }


            // ----------------------------------
            // PART TIME / FREELANCE
            // ----------------------------------

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


            // ----------------------------------
            // COURSE FILTER
            // ----------------------------------

            return matchesCourse(
                title,
                description
            );

        });


    // ==========================================
    // STRICT 10 KM LOCATION FILTER
    // ==========================================

    const nearbyJobs =
        indiaWide

            ? filteredJobs

            : filteredJobs.filter(job => {

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


                return distance <= 10;

            });


    // ==========================================
    // SORT NEAREST FIRST
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
