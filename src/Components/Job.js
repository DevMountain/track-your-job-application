import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import '../styles/components/Job.scss'
import {updateJobs} from '../redux/jobReducer';
import {getUser} from '../redux/authReducer';
// import {withRouter} from 'react-router-dom';



const Job = (props) => {
    // console.log('props job.js', props)
    // const {userId} = props.authReducer.user;
    // const {jobId} = props.match.params;
    //maybe take jobStatusId off this, because it needs to be in the side Status list. 
    // const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = props.jobReducer.jobs;
   
    const [isEditing, setIsEditing] = useState(false)
    const [job, setJob] = useState({})
    const [input, setInput] = useState({
        // title: props.job.title,
        //since I destructured off props, do I need to do it like the above? Or will this work:
        // title,
        // location,
        // url,
        // datePosted,
        // description,
        // notes,
        // jobStatusId,
        // company,
        // contact
        
        // title: '',
        location: '',
        url: '',
        datePosted: '',
        description: '',
        notes: '',
        //Maybe put this in a different location.
        jobStatusId: 1,
        company: '',
        contact: ''

        // title: props.job.title,
        // location: props.job.location,
        // url: props.job.url,
        // datePosted: props.job.datePosted,
        // description: props.job.description,
        // notes: props.job.notes,
        // jobStatusId: props.job.job_status_id,
        // company: props.job.company,
        // contact: props.job.contact,
    })

    // get the job info in an axios request get jobs, inside a component did mount/useEffect, so the job is listed as soon as I view the component.
    //Do I need the userId? I think I put it in the endpoint.
    useEffect(() => {
        console.log('props on jobjs', props)
        const {userId} = props.authReducer.user;
        const {jobId} = props.match.params;
        //when I changed the params in the endpoint, it stopped loading. Try without userId again.
        axios.get(`/api/jobs/${userId}/${jobId}`).then(res=> {
            setJob(res.data)
            console.log("props job.js", props)
            console.log("job job.js ", job)
            // console.log("job.js setjob", setJob)
            // console.log("job.js useState", useState)
        }).catch(err => console.log(err));
    }, []);
    //This useEffect isn't updating useState. Why? The getOneJob endpoint is working in Postman.

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    };

    const saveEdit = (title, location, url, datePosted, description, notes, company, contact) => {
        // const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = input;
        //Do jobStatusId elsewhere. Separate edit function and changeHandler and onClick.
        // const {userId} = props.job.user_id;
        //Or this? Which is better? I'm connected to redux, so probably redux.
        const {userId} = props.authReducer.user;
        const {jobId} = props.match.params;
        axios.put(`/api/jobs/${userId}/${jobId}`, {title, location, url, datePosted, description, notes, company, contact}).then(res => {
            props.updateJobs(res.data);
        }).catch(err => console.log(err));
    };

    const deleteJob = (userId, jobId) => {
        // const {userId} = props.authReducer.user;
        // const {jobId} = props.match.params;
        axios.delete(`/api/jobs/${userId}/${jobId}`).then(res=> {
            props.updateJobs(res.data);
            props.history.push('/dashboard');
        }).catch(err => console.log(err))
    };

    const toggleEdit = () => {
        const {title, location, url, datePosted, description, notes, company, contact} = input;
        setIsEditing(!isEditing);
        setInput({
            title,
            location,
            url,
            datePosted,
            description,
            notes,
            company,
            contact
        });
    };

    console.log('job.js JOB check', job)
    return (
        <div className='page'>
            <section className='job-container-jobjs'>
                <div className='title-bar'>
                    <div className='title-box'>
                        {/* The job title needs to come from where? From useState here. */}
                        <p>TITLE NOT WORKING{job.title}</p>
                    </div>
                    <div className='edit-delete-box'>
                        {/* Add onClick method */}
                        <button onClick={() => toggleEdit()} className='btn' >EDIT</button>
                        <button onClick={() => saveEdit(
                            //How am I getting jobId? (It's in the props sent here, and also, it was in the link route.)
                            //**Do I need to save userId in here?
                            // props.job.jobId,
                            // input.title,
                            input.location,
                            input.url,
                            input.datePosted,
                            input.description,
                            input.notes,
                            input.company,
                            input.contact
                        )} className='btn' >SAVE</button>
                        <button onClick={() => deleteJob(props.authReducer.user.userId, job.jobId)} className='btn' >DELETE</button>
                    </div>
                </div>
                <div className='details-container'>
                    {!isEditing ? (
                        <>
                    <div className='detail-item'>
                        <p className='item'>COMPANY</p>
                        <p className='value'>{job.company}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>LOCATION</p>
                        <p className='value'>{job.location}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <p className='value'>{job.url}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <p className='value'>{job.date_posted}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <p className='value'>{job.contact}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DESCRIPTION</p>
                        <p className='value'>{job.description}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>NOTES</p>
                        <props className='value'>{job.notes}</props>
                    </div>
                        </>
                    ) : (
                        <>
                    <div className='detail-item'>
                        <p className='item'>COMPANY</p>
                        <input 
                            name='company' 
                            value={input.company}
                            onChange={(e) => handleChange(e)} 
                            className='value' />
                    </div>
                    <div className='detail-item'>   
                        <p className='item'>LOCATION</p>
                        <input 
                        name='location' 
                        value={input.location}
                        onChange={(e) => handleChange(e)} 
                        className='value' />
                    </div>
                    <div className='detail-item'>
                        <p className='item'>URL</p>
                        <input 
                            name='url' 
                            value={input.url}
                            onChange={(e) => handleChange(e)} 
                            className='value' />
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DATE POSTED</p>
                        <input 
                            name='datePosted' 
                            value={input.datePosted}
                            onChange={(e) => handleChange(e)} 
                            className='value' />
                    </div>
                    <div className='detail-item'>
                        <p className='item'>CONTACT</p>
                        <input 
                            name='contact' 
                            value={input.contact}
                            onChange={(e) => handleChange(e)} 
                            className='value' />
                    </div>
                    <div className='detail-item'>
                        <p className='item'>DESCRIPTION</p>
                        <textarea 
                            name='description' 
                            value={input.description}
                            onChange={(e) => handleChange(e)} 
                            placeholder='Enter job description here.' 
                            className='value-textarea'>{input.description}</textarea>
                    </div>
                    <div className='detail-item'>
                        <p className='item'>NOTES</p>
                        <textarea 
                            name='notes' 
                            value={input.notes}
                            onChange={(e) => handleChange(e)} 
                            placeholder='Enter any notes here.' 
                            className='value-textarea'>{input.notes}</textarea>
                    </div>
                        </>
                    )} 
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
                        {/* Conditional rendering for status */}
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                                {job.jobStatusId === 1 ? 
                                <p className='researching'>RESEARCHING</p>
                                : <p className='normal-text'>RESEARCHING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 2 ? 
                                <p className='networking'>NETWORKING</p>
                                : <p className='normal-text'>NETWORKING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                                <p className='applying'>APPLYING</p>
                                : <p className='normal-text'>APPLYING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='application-submitted'>APPLICATION SUBMITTED</p>
                            : <p className='normal-text'>APPLICATION SUBMITTED</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='assessments'>ASSESSMENTS</p>
                            : <p className='normal-text'>ASSESSMENTS</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='interviewing'>INTERVIEWING</p>
                            : <p className='normal-text'>INTERVIEWING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='thankyou'>THANK YOU SENT</p>
                            : <p className='normal-text'>THANK YOU SENT</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='waiting'>WAITING FOR RESPONSE</p>
                            : <p className='normal-text'>WAITING FOR RESPONSE</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='offer'>OFFER</p>
                            : <p className='normal-text'>OFFER</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='rejected'>REJECTED</p>
                            : <p className='normal-text'>REJECTED</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='negotiating'>NEGOTIATING</p>
                            : <p className='normal-text'>NEGOTIATING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
                            <p className='accepted-offer'>ACCEPTED OFFER</p>
                            : <p className='normal-text'>ACCEPTED OFFER</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.jobStatusId === 1 ? 
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

export default connect(mapStateToProps, {getUser, updateJobs })(Job);


// need to get jobs from redux state.




// Job is a completely different Component. It's a way to display a full view of the job. I will edit, save, and delete jobs from this this detailed Job view. This will need to update the Dashboard component. If I weren't using redux, the methods to update the list of jobs in the database (and on state), would need to be housed in Dashboard - the master list. 

// The DashboardJobs component will make the same request - and get mostly the same clientInformation, but just not as much. Will it need an axios call? 

