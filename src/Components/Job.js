import React, {useState} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import '../styles/components/Job.scss'
import {setJobs} from '../redux/jobReducer';

// Dashboard methods: get jobs, delete, edit, add function (defined on jobReducer), handlechange if I add a search/filter function. 

// Job Detail view method: add job, delete, edit, saveinput, handlechange, 

const Job = (props) => {
    console.log('props', props)
    const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = props.job;
    const {input, setInput} = useState({
        title: '',
        location: '',
        ulr: '',
        //Data type of datePosted? 
        datePosted: '',
        description: '',
        notes: '',
        jobStatusId: 1,
        company: '',
        contact: ''
    })
    
    const inputHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    };

//Need edit, save edit, and delete functions here. 

    const saveEdit = (jobId, title, location, url, datePosted, description, notes,jobStatusId, company, contact) => {
        // const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = input;
        const {userId} = props.match.params;
        axios.put(`/api/jobs/${userId}/${jobId}`, {title, location, url, datePosted, description, notes, jobStatusId, company, contact}).then(res => {
            props.setJobs(res.data);
        }).catch(err => console.log(err));
    }



    return (
        <div className='page'>
            <section className='job-container'>
                <div className='title-bar'>
                    <div className='title-box'>
                        {/* The job title needs to come from redux. */}
                        <p>{title}</p>
                    </div>
                    <div className='edit-delete-box'>
                        {/* Add onClick method */}
                        <button className='btn' >EDIT</button>
                        <button className='btn' >DELETE</button>
                    </div>
                </div>
                <div className='details-container'>
                    <div className='detail-item'>
                        <p className='item'>COMPANY</p>
                        <p className='value'>{company}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>LOCATION</p>
                        <p className='value'>{location}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <p className='value'>{url}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <p className='value'>{datePosted}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <p className='value'>{contact}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DESCRIPTION</p>
                        <textarea className='value'>{description}</textarea>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>NOTES</p>
                        <textarea className='value'>{notes}</textarea>
                    </div>
                </div>
            </section>

            <section className='status-container'>
                <div className='status-title'>
                    <p>STATUS</p>
                </div>
                <div className='list-w-bar'>
                    <div className='status-line'></div>
                    {/* <div className='line-circle'></div> */}
                    <div className='status-list'>
                        {/* This needs conditional rendering to select the right status from the list and make border and text color change. No border if not selected, and colored border if selected.  */}
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                                {jobStatusId === 1 ? 
                                <p className='researching'>RESEARCHING</p>
                                : <p className='normal-text'>RESEARCHING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 2 ? 
                                <p className='networking'>NETWORKING</p>
                                : <p className='normal-text'>NETWORKING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                                <p className='applying'>APPLYING</p>
                                : <p className='normal-text'>APPLYING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='application-submitted'>APPLICATION SUBMITTED</p>
                            : <p className='normal-text'>APPLICATION SUBMITTED</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='assessments'>ASSESSMENTS</p>
                            : <p className='normal-text'>ASSESSMENTS</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='interviewing'>INTERVIEWING</p>
                            : <p className='normal-text'>INTERVIEWING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='thankyou'>THANK YOU SENT</p>
                            : <p className='normal-text'>THANK YOU SENT</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='waiting'>WAITING FOR RESPONSE</p>
                            : <p className='normal-text'>WAITING FOR RESPONSE</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='offer'>OFFER</p>
                            : <p className='normal-text'>OFFER</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='rejected'>REJECTED</p>
                            : <p className='normal-text'>REJECTED</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='negotiating'>NEGOTIATING</p>
                            : <p className='normal-text'>NEGOTIATING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='accepted-offer'>ACCEPTED OFFER</p>
                            : <p className='normal-text'>ACCEPTED OFFER</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {jobStatusId === 1 ? 
                            <p className='rejected-offer'>REJECTED OFFER</p>
                            : <p className='normal-text'>REJECTED OFFER</p>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setJobs })(Job);


// need to get jobs from redux state.




// Job is a completely different Component. It's a way to display a full view of the job. I will edit, save, and delete jobs from this this detailed Job view. This will need to update the Dashboard component. So, the methods to update the list of jobs in the database (and on state), will need to be housed in Dashboard - the master list. So, define the add job function, the 

// The DashboardJobs component will make the same request - and get mostly the same clientInformation, but just not as much. Will it need an axios call? 

