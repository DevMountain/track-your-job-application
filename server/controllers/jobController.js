module.exports = {
    getJobs: async (req, res) => {
        const db = req.app.get('db');
        const jobs = await db.jobs.get_jobs()
        res.status(200).send(jobs);
    },
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

}