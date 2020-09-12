import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import '../styles/components/Job.scss'
import {updateJobs} from '../redux/jobReducer';
// import {getUser} from '../redux/authReducer';
// import {withRouter} from 'react-router-dom';



const Job = (props) => {
    // console.log('props job.js', props)
    // const {userId} = props.authReducer.user;
    // const {jobId} = props.match.params;
    //maybe take jobStatusId off this, because it needs to be in the side Status list. 
    // const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = props.jobReducer.jobs;
   
    const [isEditing, setIsEditing] = useState(false)
    const [job, setJob] = useState({})
    // const [input, setInput] = useState({
    //     // title: props.job.title,
    //     //since I destructured off props, do I need to do it like the above? Or will this work:
    //     // title,
    //     // location,
    //     // url,
    //     // datePosted,
    //     // description,
    //     // notes,
    //     // jobStatusId,
    //     // company,
    //     // contact
        
    //     // title: '',
    //     // location: '',
    //     // url: '',
    //     // datePosted: '',
    //     // description: '',
    //     // notes: '',
    //     // jobStatusId: 1,
    //     // company: '',
    //     // contact: ''

    //     title: job.title,
    //     company: job.company,
    //     location: job.location,
    //     url: job.url,
    //     datePosted: job.date_posted,
    //     contact: job.contact,
    //     jobStatusId: job.job_status_id,
    //     description: job.description,
    //     notes: job.notes,
    // })

    // get the job info in an axios request get jobs, inside a component did mount/useEffect, so the job is listed as soon as I view the component.
    //Do I need the userId? I think I put it in the endpoint.
    useEffect(() => {
        console.log('props on jobjs', props)
        const {userId} = props.authReducer.user;
        const {jobId} = props.match.params;
        //when I changed the params in the endpoint, it stopped loading. Try without userId again.
        axios.get(`/api/jobs/${userId}/${jobId}`).then(res=> {
            setJob(res.data)
        }).catch(err => console.log(err));
    }, []);
    //This useEffect isn't updating useState. Why? The getOneJob endpoint is working in Postman.

    const toggleEdit = () => {
        // const {title, location, url, datePosted, description, notes, company, contact} = input;
        setIsEditing(!isEditing);
        // setInput({
        //     title: job.title,
        //     company: job.company,
        //     location: job.location,
        //     url: job.url,
        //     datePosted: job.date_posted,
        //     contact: job.contact,
        //     jobStatusId: job.job_status_id,
        //     description: job.description,
        //     notes: job.notes,

//Just made this change. We'll see if it works.
            // title: input.title,
            // company: input.company,
            // location: input.location,
            // url: input.url,
            // datePosted: input.datePosted,
            // contact: input.contact,
            // jobStatusId: input.jobStatusDd,
            // description: input.description,
            // notes: input.notes,
            
            // title,
            // location,
            // url,
            // datePosted,
            // description,
            // notes,
            // company,
            // contact
    //     });
    };
//spread in input or not?
    const handleChange = (e) => {
        setJob({...job, [e.target.name]: e.target.value})
    };

    const handleDropdown = (e) => {
        e.stopPropagation();
        setJob({...job, [e.target.name]: e.target.value})
    };

    const saveEdit = (userId, jobId, title, location, url, datePosted, description, notes, jobStatusId, company, contact) => {
        // const {title, location, url, datePosted, description, notes, jobStatusId, company, contact} = input;
        // const {jobId} = props.match.params;
        // const {userId} = props.authReducer.user;
        axios.put(`/api/jobs/${userId}/${jobId}`, {title, location, url, datePosted, description, notes, jobStatusId, company, contact}).then(res => {
            //This is updating redux state.
            props.updateJobs(res.data);
            // setJob() would update values on local state. I could also add another axios.get call here (copy and paste from what's in the useEffect function) to update local state.
            //I wonder if I could also just send one job back from the backend and see what that does. 
            console.log('props.match.params', props.match.params)
            // props.history.push('/dashboard')
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

    console.log('job.js JOB check', job)
    return (
        <div className='page-job'>
            <section className='job-container-jobjs'>
            {!isEditing ? (
                <>
                <div className='title-bar-jobview'>
                    <div className='title-box'>
                        <p>{job.title}</p>
                    </div>
                    <div className='edit-delete-box'>
                        <button onClick={() => toggleEdit()} className='btn-jobview' >EDIT</button>
                        <button onClick={() => deleteJob(props.authReducer.user.userId, props.match.params.jobId)} className='btn-jobview' >DELETE</button>
                    </div>
                </div>
                <div className='details-container-jobview'>
                    <div className='detail-item-jobview'>
                        <p className='label'>COMPANY</p>
                        <p className='value'>{job.company}</p>
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>LOCATION</p>
                        <p className='value'>{job.location}</p>
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>URL</p>
                        <p className='value'>{job.url}</p>
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>DATE POSTED</p>
                        <p className='value'>{job.date_posted}</p>
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>CONTACT</p>
                        <p className='value'>{job.contact}</p>
                    </div>
                    <div className='textarea-line-jobview'>
                        <p className='label'>DESCRIPTION</p>
                        <p className='textarea-value'>{job.description}</p>
                    </div>
                    <div className='textarea-line-jobview'>
                        <p className='label'>NOTES</p>
                        <p className='textarea-value'>{job.notes}</p>
                    </div>
                </div>
                </>
                    ) : (
                <>
                <div className='title-bar-jobview'>
                    <div className='title-box'>
                        <input 
                            // value={input.title}
                            value={job.title}
                            // defaultValue={job.title}
                            name='title' 
                            onChange={(e) => handleChange(e)} 
                            // placeholder={job.title}
                            className='title-edit'/>
                    </div>
                    <div className='edit-delete-box'>
                        <button onClick={() => {
                            saveEdit(
                                props.match.params.userId,
                                props.match.params.jobId,
                                job.title,
                                job.location,
                                job.url,
                                job.date_posted,
                                job.description,
                                job.notes,
                                job.jobStatusId,
                                job.company,
                                job.contact
                            );
                            toggleEdit();
                        }} className='btn-jobview' >SAVE</button>
                        <button 
                            onClick={() => deleteJob(props.authReducer.user.userId, props.match.params.jobId)} 
                            className='btn-jobview' >DELETE</button>
                        <button 
                            onClick={() => toggleEdit()} 
                            className='btn-jobview' >CANCEL</button>
                    </div>
                </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>COMPANY</p>
                        <input 
                            name='company' 
                            // value={input.company}
                            value={job.company}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.company}
                            className='value' />
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>LOCATION</p>
                        <input 
                            name='location' 
                            value={job.location}
                            // value={input.location}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.location}
                            className='value' />
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>URL</p>
                        <input 
                            name='url' 
                            value={job.url}
                            // value={input.url}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.url}
                            className='value' />
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>DATE POSTED</p>
                        <input 
                            name='date_posted' 
                            value={job.date_posted}
                            // value={input.datePosted}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.date_posted}
                            className='value' />
                    </div>
                    <div className='detail-item-jobview'>
                        <p className='label'>CONTACT</p>
                        <input 
                            name='contact' 
                            value={job.contact}
                            // value={input.contact}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.contact}
                            className='value' />
                    </div>

                    <div className='dropdown-container-jobview'>
                        <p className='label'>STATUS</p>
                            <select  
                            name='jobStatusId' 
                            defaultValue={job.job_status_id} 
                            className='dropdown'  
                            onChange={(e) => handleDropdown(e)}>
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

                    <div className='detail-jobview-textarea'>
                        <p className='label'>DESCRIPTION</p>
                        <textarea 
                            name='description' 
                            value={job.description}
                            // value={input.description}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.description}
                            className='textarea-value textarea-value-edit'></textarea>
                    </div>
                    <div className='detail-jobview-textarea'>
                        <p className='label'>NOTES</p>
                        <textarea 
                            name='notes' 
                            value={job.notes}
                            // value={input.notes}
                            onChange={(e) => handleChange(e)} 
                            // defaultValue={job.notes}
                            className='textarea-value textarea-value-edit'></textarea>
                    </div>
                </>
                    )} 
            </section>
       

            <section className='status-container'>
                <div className='job-view-status-title'>
                    <p className='status-header'>STATUS</p>
                </div>
                <div className='list-w-bar'>
                    <div className='status-line'></div>
                    {/* <div className='line-circle'></div> */}
                    <div className='status-list'>
                        {/* Conditional rendering for status */}
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                                {job.job_status_id === 1 ? 
                                <p className='researching'>RESEARCHING</p>
                                : <p className='normal-text'>RESEARCHING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 2 ? 
                                <p className='networking'>NETWORKING</p>
                                : <p className='normal-text'>NETWORKING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 3 ? 
                                <p className='applying'>APPLYING</p>
                                : <p className='normal-text'>APPLYING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 4 ? 
                            <p className='application-submitted'>APPLICATION SUBMITTED</p>
                            : <p className='normal-text'>APPLICATION SUBMITTED</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 5 ? 
                            <p className='assessments'>ASSESSMENTS</p>
                            : <p className='normal-text'>ASSESSMENTS</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 6 ? 
                            <p className='interviewing'>INTERVIEWING</p>
                            : <p className='normal-text'>INTERVIEWING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 7 ? 
                            <p className='thankyou'>THANK YOU SENT</p>
                            : <p className='normal-text'>THANK YOU SENT</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 8 ? 
                            <p className='waiting'>WAITING FOR RESPONSE</p>
                            : <p className='normal-text'>WAITING FOR RESPONSE</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 9 ? 
                            <p className='offer'>OFFER</p>
                            : <p className='normal-text'>OFFER</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 10 ? 
                            <p className='rejected'>REJECTED</p>
                            : <p className='normal-text'>REJECTED</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 11 ? 
                            <p className='negotiating'>NEGOTIATING</p>
                            : <p className='normal-text'>NEGOTIATING</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 12 ? 
                            <p className='accepted-offer'>ACCEPTED OFFER</p>
                            : <p className='normal-text'>ACCEPTED OFFER</p>}
                        </div>
                        <div className='status-item-container'>
                            <div className='status-dash'></div>
                            {job.job_status_id === 13 ? 
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

//This takes all of redux state and puts it on props.
export default connect(mapStateToProps, {updateJobs })(Job);
//Didn't need getUser function.

// need to get jobs from redux state.




// Job is a completely different Component. It's a way to display a full view of the job. I will edit, save, and delete jobs from this this detailed Job view. This will need to update the Dashboard component. If I weren't using redux, the methods to update the list of jobs in the database (and on state), would need to be housed in Dashboard - the master list. 

// The DashboardJobs component will make the same request - and get mostly the same clientInformation, but just not as much. Will it need an axios call? 

