module.exports = {
    getJobs: async (req, res) => {
        const db = req.app.get('db');
        const jobs = await db.jobs.get_jobs()
        res.status(200).send(jobs);
    },
    // maybe this query needs to include the job company name from the companies table. Maybe update the SQL query to what I wrote in getJobBrief - meaning, add a join so it will give more info from companies. 
    getJob: async (req, res) => {
        const db = req.app.get('db');
    },
    editJob: async (req, res) => {
        const db = req.app.get('db');
    },
    deleteJob: async (req, res) => {
        const db = req.app.get('db');
    },
    addJob: async (req, res) => {
        const db = req.app.get('db');
    },
    getJobBrief: async (req, res) => {
        const db = req.app.get('db');
        const jobs = await db.jobs.get_job_brief(${id})
    
    } 

}