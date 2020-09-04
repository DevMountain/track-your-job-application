import React from 'react';
import '../styles/components/DashboardJob.scss'

const DashboardJob = (props) => {
    const {title, name, status} = props.job;
    // const [mappedJob, setMappedJob] = useState({
    //     title: props.job.title,
    //     name: props.company.name
        //need to figure out if I need to do an axios get request of company...Or is this just a weird db query where I need to do a join? 
        // SELECT jobs.title, companies.name FROM jobs 
        // JOIN ON jobs.company_id = companies.company_id 
        // WHERE company_id = $1;
        // -- id sent on params in axios get request. 

        //Where do I put this query? In the jobController - but which method? getJobBrief, and the axios call will go in dashboard, and get passed as props to DashBoardJob.
    // )

    //Where is status being stored on jobs?  I think status is just an arbitrary value that a person can type in to the jobs detail view and it will be stored as the value of status on state. 

    // const statusColorChanger = () => {
    //     if(status === )
    // }
    // }


    return(
        <div className='mapped-job-box'>
            <div className='job-company-box'>
                <p className='job-title'>job title{title}</p>
                <p className='company-name'>company name{name}</p>
            </div>
            {status === 'Researching' ? 
                <div className='status-researching'>
                    <p className='status'>status{status}</p>
                </div>
             : status === 'Networking' ?
                <div className='status-networking'>
                    <p className='status'>status{status}</p>
                </div>
            : ( status === 'Applying' ?
                <div className='status-applying'>
                    <p className='status'>status{status}</p>
                </div>
             : ( status === 'Application Submitted' ?
                <div className='status-application-submitted'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Assessments' ?
                <div className='status-assessments'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Interviewing' ?
                <div className='status-interviewing'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Thank You Sent' ?
                <div className='status-thank-you'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Waiting for Response' ?
                <div className='status-waiting'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Offer' ?
                <div className='status-offer'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Rejected' ?
                <div className='status-rejected'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Negotiating' ?
                <div className='status-negotiating'>
                    <p className='status'>status{status}</p>
                </div>
             : (status === 'Accepted Offer' ?
                <div className='status-accepted-offer'>
                    <p className='status'>status{status}</p>
                </div>
             : 
                <div className='status-rejected-offer'>
                    <p className='status'>status{status}</p>
                </div>
            
             ))))))))))}
        </div>
    )
}

export default DashboardJob;