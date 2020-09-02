import React from 'react';
import DashboardJobs from './DashboardJobs'
import DashboardActions from './DashboardActions';
//IMPORT STYLING??

const Dashboard = (props) => {
    // props from App.js

    //Uncomment the jobMap and actionMap once I have data to send through props. 

    // const jobMap = props.jobs.map(job => {
    //     return <DashboardJobs
    //                 key={job.id}
    //                 job={job}/>
    // })

    // const actionMap = props.actions.map(job => {
    //     return <DashboardActions
    //                 key={action.id}
    //                 job={action}/>
    // })

    //Method for axios call to get all jobs here.


    //Method for adding job here.

    return(
        <div className='dash-page'>
            <section className='big-list-container'>
                <div className='title-bar'>
                    <div className='title'>
                        <h1>Jobs</h1>
                    </div>
                    <div className='status'>
                        <h4>STATUS</h4>
                    </div>
                </div>
                <button className='add-btn'>ADD JOB</button>
                <section className='map-list-container'>
                {/* Uncomment the following line as soon as props are set up. */}
                    {/* {jobMap} */}
                </section>
            </section>
            <section className='big-list-container'>
                <div className='title-bar'>
                    <div className='title'>
                        <h1>Action Items</h1>
                    </div>
                    <div className='status'>
                        <h4>STATUS</h4>
                    </div>
                </div>
                <button className='add-btn'>ADD ACTION ITEM</button>
                <section className='map-list-container'>
                    {/* Uncomment the following line as soon as props are set up. */}
                    {/* {actionMap} */}
                </section>
            </section>
            
        </div>
    )
}


export default Dashboard

//Styling notes: set overflow for lists to auto, so it will scroll down to the other list items.
{/* Right and left list containers are the same format and can use the same classid or styling handle */}