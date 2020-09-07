import React from 'react';
import { connect } from "react-redux";
import '../styles/components/Job.scss'
// import jobController from '../../server/controllers/jobController';
// Dashboard methods: get jobs, delete, edit, add function (defined on jobReducer), handlechange if I add a search/filter function. 

// Job Detail view method: add job, delete, edit, saveinput, handlechange, 

const Job = (props) => {
    console.log('props', props)
    // const {}
//How am I getting props from redux? console log it to see what I'm getting.

//Need edit, save edit, and delete functions here. 

    return (
        <div className='page'>
            <section className='job-container'>
                <div className='title-bar'>
                    <div className='title-box'>
                        {/* The job title needs to come from redux. */}
                        <p>JOB TITLE</p>
                    </div>
                    <div className='edit-delete-box'>
                        {/* Add onClick method */}
                        <button className='btn' >EDIT</button>
                        <button className='btn' >DELETE</button>
                    </div>
                </div>
            </section>
            <div className='line-between'></div>
            <section className='status-container'>
                <div className='status-title'>
                    <p>STATUS</p>
                </div>
                <div className='list-w-bar'>
                    <div className='status-line'></div>
                    <div className='status-list'>
                        {/* This needs conditional rendering to select the right status from the list and make border and text color change. No border if not selected, and colored border if selected.  */}
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                        <p>STATUS</p>
                    </div>
                </div>
            </section>
        </div>
    )

}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Job);


// need to get jobs from redux state.




// Job is a completely different Component. It's a way to display a full view of the job. I will edit, save, and delete jobs from this this detailed Job view. This will need to update the Dashboard component. So, the methods to update the list of jobs in the database (and on state), will need to be housed in Dashboard - the master list. So, define the add job function, the 

// The DashboardJobs component will make the same request - and get mostly the same clientInformation, but just not as much. Will it need an axios call? 

