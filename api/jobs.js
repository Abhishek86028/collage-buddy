js
export default async function handler(req, res) {

    // CORS
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://abhishek86028.github.io"
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

        let searches = ["part time student"];


        // B.Tech CSE
        if (course === "B.Tech CSE") {
            searches = [
                "software developer",
                "web developer",
                "IT support",
                "computer operator",
                "programmer"
            ];
        }


        // BCA
        if (course === "BCA") {
            searches = [
                "software developer",
                "web developer",
                "IT support",
                "computer operator",
                "data entry"
            ];
        }


        // BBA
        if (course === "BBA") {
            searches = [
                "sales",
                "marketing",
                "customer service",
                "business development",
                "office assistant"
            ];
        }


        // ==========================================
        // SEARCH ADZUNA
        // ==========================================

        const allJobs = [];

        for (const searchTerm of searches) {

            const params = new URLSearchParams({
                app_id: appId,
                app_key: appKey,
                results_per_page: "10",
                what: searchTerm,
                where: location,
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
        // FORMAT JOB DATA
        // ==========================================

        const jobs = uniqueJobs
            .slice(0, 30)
            .map(job => ({

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

                applyUrl:
                    job.redirect_url ||
                    "",

                source:
                    "Adzuna"
            }));


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

