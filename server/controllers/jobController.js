module.exports = {
    //On the front end, define what information you need.
    getJobs: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.params;
        const jobs = await db.jobs.get_jobs(userId)
        res.status(200).send(jobs);
    },
    getJob: async (req, res) => {
        const db = req.app.get('db');
        const {jobId} = req.params;
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
    // getJobBrief: async (req, res) => {
    //     const db = req.app.get('db');
    //     const {jobId} = req.params;
    //     const jobs = await db.jobs.get_job_brief(jobId)
    
    // } 

}