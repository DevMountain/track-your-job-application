import React from 'react';
import '../styles/components/StatusColorChanger.scss';

const StatusColorChanger = (props) => {
    console.log('status color changer props', props)
    const {job_status_name} = props.job;
    
    if(job_status_name === 'RESEARCHING'){
        return <div className='status--researching'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "NETWORKING") {
        return <div className='status--networking'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "APPLYING") {
        return <div className='status--applying'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "APPLICATION SUBMITTED") {
        return <div className='status--application-submitted'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "ASSESSMENTS") {
        return <div className='status--assessments'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "INTERVIEWING") {
        return <div className='status--interviewing'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "THANK YOU SENT") {
        return <div className='status--thankyou'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "WAITING FOR RESPONSE") {
        return <div className='status--waiting'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "OFFER") {
        return <div className='status--offer'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "REJECTED") {
        return <div className='status--rejected'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "NEGOTIATING") {
        return <div className='status--negotiating'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else if(job_status_name === "ACCEPTED OFFER") {
        return <div className='status--accepted-offer'>
            <p className='status'>{job_status_name}</p>
        </div>
    } else {
        return <div className='status--rejected-offer'>
            <p className='status'>{job_status_name}</p>
        </div>
    }
}

export default StatusColorChanger;