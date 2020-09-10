module.exports = {
    //On the front end, define what information you need.
    //Get jobs works in Postman. 
    getJobs: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.params;
        const jobs = await db.jobs.get_jobs(userId)
        res.status(200).send(jobs);
    },
    editJob: async (req, res) => {
        console.log('console.log req.params in edit jobs', req.params)
        const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = req.body;
        const {userId, jobId} = req.params; 
        const db = req.app.get('db');
        const jobs = await db.jobs.edit_job([
            title,
            location,
            url,
            datePosted,
            description,
            notes,
            //It's not allowing me to insert the foreign key jobStatusId.
            // jobStatusId,
            company,
            contact,
            jobId,
            userId
        ])
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
        const {userId} = req.params; 
        const db = req.app.get('db');
        const jobs = await db.jobs.add_job({
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
        })
        res.status(200).send(jobs)
    }
}