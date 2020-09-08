import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { connect } from "react";
import {setJobs} from '../redux/jobReducer';


const AddJob = (props) => {
    const {input, setInput} = useState({
        title: '',
        location: '',
        url: '',
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

    // How do I have two parameters (userId and jobId) to edit or delete one job? 

    //When adding a job with a foreign key reference, do I need to add the userId? Or because I get that off match.params, will that be put on the job object?  
    


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
                        <input className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>LOCATION</p>
                        <input className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <input className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <input className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <input className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>STATUS</p>
                        <select className='status-dropdown'>
                            {/* Is it case sensitive? They're in the tables in all caps; for the query to work, does it need to be all caps? Or will this work? */}
                            <ul>Researching</ul>
                            <ul>Networking</ul>
                            <ul>Applying</ul>
                            <ul>Application Submitted</ul>
                            <ul>Assessments</ul>
                            <ul>Interviewing</ul>
                            <ul>Thank You Sent</ul>
                            <ul>Waiting for Response</ul>
                            <ul>Offer</ul>
                            <ul>Rejected</ul>
                            <ul>Negotiating</ul>
                            <ul>Accepted Offer</ul>
                            <ul>Rejected Offer</ul>
                        </select>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DESCRIPTION</p>
                        <textarea className='value'></textarea>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>NOTES</p>
                        <textarea className='value'>{notes}</textarea>
                    </div>
                </div>
            </section>
        </div>
    )

}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {setJobs})(AddJob);



//Store these values in input on state (and connect to redux).