module.exports = {
    //On the front end, define what information you need.
    getJobs: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.session.user;
        const jobs = await db.jobs.get_jobs(userId)
        res.status(200).send(jobs);
    },
    editJob: async (req, res) => {
        console.log(req.params)
        const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = req.body;
        const {userId} = req.params; 
        const db = req.app.get('db');
        const jobs = await db.jobs.edit_job({
            title,
            location,
            url,
            date_posted: datePosted,
            description,
            notes,
            job_status_id: jobStatusId,
            company,
            contact
        })
        res.status(200).send(jobs);
    },
    //getting userId and jobId - how?
    deleteJob: async (req, res) => {
        const {userId} = req.session.user;
        const {jobId} = req.params;
        const db = req.app.get('db');
        const jobs = await db.jobs.delete_job([jobId, userId])
        res.status(200).send(jobs);
    },
    addJob: async (req, res) => {
        const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = req.body;
        const {userId} = req.session.user; 
        const db = req.app.get('db');
        const jobs = await db.jobs.add_job([
            title,
            location,
            company,
            url,
            datePosted,
            description,
            notes,
            contact,
            jobStatusId,
            userId
        ])
        res.status(200).send(jobs)
    }
}