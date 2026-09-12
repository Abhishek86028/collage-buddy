 export default async function handler(req, res) {

    // CORS
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

        const location = req.query.location || "";
        const course = req.query.course || "all";

        if (!location) {
            return res.status(400).json({
                error: "Location is required"
            });
        }

        const appId = process.env.ADZUNA_APP_ID;
        const appKey = process.env.ADZUNA_APP_KEY;

        if (!appId || !appKey) {
            return res.status(500).json({
                error: "Adzuna API credentials are not configured on Vercel."
            });
        }


        // ==========================================
        // COURSE BASED SEARCHES
        // ==========================================

        let searches = [
    "part time",
    "work from home",
    "student jobs",
    "data entry",
    "customer service"
];
        // B.Tech CSE
       if (course === "B.Tech CSE") {
    searches = [
        "part time software developer",
        "part time web developer",
        "part time IT support",
        "student computer operator",
        "work from home programmer"
    ];

        }


        // BCA
        
          if (course === "BCA") {
    searches = [
        "part time software developer",
        "part time web developer",
        "part time IT support",
        "part time data entry",
        "work from home computer operator"
    ];

        }


        // BBA
       if (course === "BBA") {
    searches = [
        "part time sales",
        "part time marketing",
        "part time customer service",
        "part time business development",
        "part time office assistant"
    ];

        }


        // ==========================================
        // SEARCH ADZUNA
        // ==========================================
// ==========================================
// CONVERT LOCATION TO LATITUDE / LONGITUDE
// ==========================================

const geoResponse = await fetch(
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({
        q: location + ", India",
        format: "json",
        limit: "1"
    }),
    {
        headers: {
            "User-Agent": "CollegeBuddy Jobs"
        }
    }
);

const geoData = await geoResponse.json();

if (!geoData || geoData.length === 0) {
    return res.status(200).json({
        success: true,
        searchedLocation: location,
        course: course,
        count: 0,
        jobs: [],
        message: "Location could not be found."
    });
}

const userLatitude =
    parseFloat(geoData[0].lat);

const userLongitude =
    parseFloat(geoData[0].lon);
    // ==========================================
// DISTANCE CALCULATION
// ==========================================

function calculateDistance(lat1, lon1, lat2, lon2) {

    const earthRadius = 6371;

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
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return earthRadius * c;
}
        const allJobs = [];

        for (const searchTerm of searches) {

            const params = new URLSearchParams({
                app_id: appId,
                app_key: appKey,
                results_per_page: "10",
                what: searchTerm,
                where: location || "India",
                "content-type": "application/json"
            });

            const apiUrl =
                `https://api.adzuna.com/v1/api/jobs/in/search/1?${params.toString()}`;

            const response = await fetch(apiUrl);

            if (!response.ok) {

                console.error(
                    "Adzuna search failed:",
                    searchTerm,
                    response.status
                );

                continue;
            }

            const data = await response.json();

            if (data.results && Array.isArray(data.results)) {
                allJobs.push(...data.results);
            }
        }


        // ==========================================
        // REMOVE DUPLICATE JOBS
        // ==========================================

        const uniqueJobs = [];
        const seenIds = new Set();

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
// FILTER JOBS WITHIN 10 KM
// ==========================================

const nearbyJobs = uniqueJobs.filter(job => {

    if (!job.latitude || !job.longitude) {
        return false;
    }

    const jobLatitude =
        parseFloat(job.latitude);

    const jobLongitude =
        parseFloat(job.longitude);

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
// FORMAT JOB DATA
// ==========================================

const jobs = nearbyJobs
    .slice(0, 30)
    .map(job => {

        const distance =
            calculateDistance(
                userLatitude,
                userLongitude,
                parseFloat(job.latitude),
                parseFloat(job.longitude)
            );

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
                location,

            description:
                job.description ||
                "Job description not available",

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
                Number(distance.toFixed(2)),

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

            success: true,

            searchedLocation:
                location,

            course:
                course,

            count:
                jobs.length,

            jobs:
                jobs
        });


    } catch (error) {

        console.error(error);

        return res.status(500).json({

            error:
                "Server error",

            message:
                error.message
        });
    }
}

