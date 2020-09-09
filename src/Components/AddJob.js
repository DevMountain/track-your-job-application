import React, {useState} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {setJobs} from '../redux/jobReducer';
import {getUser} from '../redux/authReducer';
import '../styles/components/AddJob.scss';

//used hooks
const AddJob = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState({
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

    // (attach to dropdown container)
    const toggling = () => setIsOpen(!isOpen); 

    // How do I have two parameters (userId and jobId) to edit or delete one job? 

    //When adding a job with a foreign key reference, do I need to add the userId? Or because I get that off match.params, will that be put on the job object?  

    const addJob = () => {
        // const {userId} = props.match.params;
        const {userId} = props.user;
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
                        <p>ADD JOB</p>
                    </div>
                    <div className='add-cancel-box'>
                        <button onClick={addJob} className='btn'>ADD</button>
                        <button onClick={cancelAdd} className='btn'>CANCEL</button>
                    </div>
                </div>
                <div className='details-container'>
                    <div className='detail-item'>
                        <p className='item'>JOB TITLE</p>
                        <input type='text' name='title' value={input.title} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>COMPANY</p>
                        <input type='text' name='company' value={input.company} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>LOCATION</p>
                        <input type='text' name='location' value={input.location} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <input type='text' name='url' value={input.url} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <input type='text' placeholder='YYYY-MM-DD' name='datePosted' value={input.datePosted} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <input type='text' name='contact' value={input.contact} onChange={handleChange} className='value'/>
                    </div>
                    <div onClick={toggling} className='status-dropdown-container'>
                        <p className='item'>STATUS</p>
                        {isOpen && (

                            <select  name='jobStatusId' className='dropdown' value={input.jobStatusId} onChange={handleChange}>
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
                        )}
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DESCRIPTION</p>
                        <textarea type='text' name='description' placeholder='Enter job description here.' className='description'>{input.description}</textarea>
                    </div>
                    <div className='detail-item'>
                        <p placeholder='Enter any other notes here.' className='item'>NOTES</p>
                        <textarea type='text' name='notes' className='notes'>{input.notes}</textarea>
                    </div>
                </div>
            </section>
        </div>
    )

}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, setJobs})(AddJob);
