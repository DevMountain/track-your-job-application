import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { connect } from "react";
import {setJobs} from '../redux/jobReducer';
import '../styles/components/AddJob.scss';


const AddJob = (props) => {
    const {isEditing, setIsEditing} = useState(false);
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
    });
    
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    };

    // How do I have two parameters (userId and jobId) to edit or delete one job? 

    //When adding a job with a foreign key reference, do I need to add the userId? Or because I get that off match.params, will that be put on the job object?  
    //methods: add job, cancel button, onSubmit, handelInput. Also, status drop down, push to job detail view onSubmit.

    const addJob = () => {
        const {userId} = props.match.params;
        const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = input;
        axios.post(`/api/jobs/${userId}`, {title, location, url, datePosted, description, notes, userId, jobStatusId, company, contact}).then(res => {
            props.setJobs(res.data);
            props.history.push('/job');
        }).catch(err => console.log(err));
    }

    const cancelAdd = () => {
        setInput({
            title: '',
            location: '',
            url: '',
            datePosted: '',
            description: '',
            notes: '',
            jobStatusId: 1,
            company: '',
            contact: ''
            })
    }

    


    return (
        <div className='page'>
            <section className='job-container'>
                <div className='title-bar'>
                    <div className='title-box'>
                        {/* The job title needs to come from redux. */}
                        <p>ADD JOB</p>
                    </div>
                    <div className='add-cancel-box'>
                        {/* Add onClick method */}
                        {/* Do the conditional rendering for when the save button toggles to edit and vice versa. */}
                        <button onClick={addJob} className='btn'>ADD</button>
                        <button onClick={cancelAdd} className='btn'>CANCEL</button>
                    </div>
                </div>
                <div className='details-container'>
                    <div className='detail-item'>
                        <p className='item'>JOB TITLE</p>
                        <input type='text' name='title' value={title} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>COMPANY</p>
                        <input type='text' name='company' value={company} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>LOCATION</p>
                        <input type='text' name='location' value={location} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <input type='text' name='url' value={url} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <input type='text' name='datePosted' value={datePosted} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <input type='text' name='contact' value={contact} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>STATUS</p>
                        <select name='jobStatusId' className='status-dropdown' value={jobStatusId} onChange={handleChange}>
                            {/* Is it case sensitive? They're in the tables in all caps; for the query to work, does it need to be all caps? Or will this work? */}
                            <option value='1'>Researching</option>
                            <option value='2'>Networking</option>
                            <option value='3'>Applying</option>
                            <option value='4'>Application Submitted</option>
                            <option value='5'>Assessments</option>
                            <option value='6'>Interviewing</option>
                            <option value='7'>Thank You Sent</option>
                            <option value='8'>Waiting for Response</option>
                            <option value='9'>Offer</option>
                            <option value='10'>Rejected</option>
                            <option value='11'>Negotiating</option>
                            <option value='12'>Accepted Offer</option>
                            <option value='13'>Rejected Offer</option>
                        </select>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DESCRIPTION</p>
                        <textarea type='text' name='description' placeholder='Enter job description here.' className='value'>{description}</textarea>
                    </div>
                    <div className='detail-item'>
                        <p placeholder='Enter any other notes here.' className='item'>NOTES</p>
                        <textarea type='text' name='notes' className='value'>{notes}</textarea>
                    </div>
                </div>
            </section>
        </div>
    )

}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {setJobs})(AddJob);



//Store these values in input on state (and connect to redux).