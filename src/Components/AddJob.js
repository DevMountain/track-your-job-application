import React, {useState} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {updateJobs} from '../redux/jobReducer';
import {getUser} from '../redux/authReducer';
import '../styles/components/AddJob.scss';

//used hooks
const AddJob = (props) => {
    // console.log('props on addjob', props)
    // const [isOpen, setIsOpen] = useState(false);
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

    const handleDropdown = (e) => {
        e.stopPropagation();
        setInput({...input, jobStatusId: e.target.value})
    };

    // (attach to dropdown container)
    // const toggling = () => setIsOpen(!isOpen); 

    // How do I have two parameters (userId and jobId) to edit or delete one job? 

    //When adding a job with a foreign key reference, do I need to add the userId? Or because I get that off match.params, will that be put on the job object?  

    const addJob = () => {
        const {userId} = props.authReducer.user;
        const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = input;

        axios.post(`/api/jobs/${userId}`, {title, location, url, datePosted, description, notes, userId, jobStatusId, company, contact}).then(res => {
            props.updateJobs(res.data);
            props.history.push('/dashboard');
        }).catch(err => console.log(err));
    }

    const cancelAdd = () => {
        props.history.push('/dashboard')
    }

    console.log("AddJob.js props", props)
    return (
        <div className='page-add'>
            <section className='job-container-add'>
                <div className='title-bar-add-job'>
                    <div className='title-box'>
                        <p>ADD JOB</p>
                    </div>
                    <div className='add-cancel-box'>
                        <button onClick={() => addJob()} className='btn'>ADD</button>
                        <button onClick={cancelAdd} className='btn'>CANCEL</button>
                    </div>
                </div>
                <div className='details-container'>
                    <div className='detail-item'>
                        <p className='item'>JOB TITLE</p>
                        <input type='text' placeholder='Job Title' name='title' value={input.title} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>COMPANY</p>
                        <input type='text' placeholder='Company' name='company' value={input.company} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>LOCATION</p>
                        <input type='text' placeholder='Company' name='location' value={input.location} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <input type='text' placeholder='URL' name='url' value={input.url} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <input type='text' placeholder='Date Posted' name='datePosted' value={input.datePosted} onChange={handleChange} className='value'/>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <input type='text' placeholder='Contact' name='contact' value={input.contact} onChange={handleChange} className='value'/>
                    </div>
                    
                    <div 
                    className='status-dropdown-container-line'>
                        <p className='item'>STATUS</p>
                            <select  name='jobStatusId' className='dropdown'  onChange={handleDropdown}>
                                <option className='options' value={1}>Researching</option>
                                <option className='options' value={2}>Networking</option>
                                <option className='options' value={3}>Applying</option>
                                <option className='options' value={4}>Application Submitted</option>
                                <option className='options' value={5}>Assessments</option>
                                <option className='options' value={6}>Interviewing</option>
                                <option className='options' value={7}>Thank You Sent</option>
                                <option className='options' value={8}>Waiting for Response</option>
                                <option className='options' value={9}>Offer</option>
                                <option className='options' value={10}>Rejected</option>
                                <option className='options' value={11}>Negotiating</option>
                                <option className='options' value={12}>Accepted Offer</option>
                                <option className='options' value={13}>Rejected Offer</option>
                            </select>
                    </div>
                    <div className='detail-item-textarea'>
                        <p className='item'>DESCRIPTION</p>
                        <textarea 
                            onChange={handleChange} 
                            type='text' 
                            name='description' 
                            placeholder='Enter job description here.' className='addjob-textarea' 
                            value={input.description}></textarea>
                    </div>
                    <div className='detail-item-textarea'>
                        <p className='item'>NOTES</p>
                        <textarea 
                            onChange={handleChange} 
                            type='text' 
                            name='notes' 
                            placeholder='Enter any other notes here.' className='addjob-textarea' 
                            value={input.notes}></textarea>
                    </div>
                </div>
            </section>
        </div>
    )

}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, updateJobs})(AddJob);
