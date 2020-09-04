import React, {useState} from 'react';
import { request } from 'express';

const DashboardJob = (props) => {
    const [mappedJob, setMappedJob] = useState({
        title: props.job.title,
        name: props.company.name
        //need to figure out if I need to do an axios get request of company...Or is this just a weird db query where I need to do a join? 
        // SELECT jobs.title, companies.name FROM jobs 
        // JOIN ON jobs.company_id = companies.company_id 
        // WHERE company_id = $1;
        // -- id sent on params in axios get request. 

        //Where do I put this query? In the jobController - but which method? getJobBrief, and the axios call will go in dashboard, and get passed as props to DashBoardJob.

    })




    return(
        <div>


        </div>
    )


}


export default DashboardJobs;