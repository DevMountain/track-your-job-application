import React from 'react';
import '../styles/components/StatusColorChanger.scss';

const StatusColorChanger = (props) => {
    const {jobStatusId} = props.job;
    
    if(jobStatusId === 1){
        return <div className='status--researching'>
            <p className='status'>RESEARCHING</p>
        </div>
    } else if(jobStatusId === 2) {
        return <div className='status--networking'>
            <p className='status'>NETWORKING</p>
        </div>
    } else if(jobStatusId === 3) {
        return <div className='status--applying'>
            <p className='status'>APPLYING</p>
        </div>
    } else if(jobStatusId === 4) {
        return <div className='status--application-submitted'>
            <p className='status'>APPLICATION SUBMITTED</p>
        </div>
    } else if(jobStatusId === 5) {
        return <div className='status--assessments'>
            <p className='status'>ASSESSMENTS</p>
        </div>
    } else if(jobStatusId === 6) {
        return <div className='status--interviewing'>
            <p className='status'>INTERVIEWING</p>
        </div>
    } else if(jobStatusId === 7) {
        return <div className='status--thank-you'>
            <p className='status'>THANK YOU SENT</p>
        </div>
    } else if(jobStatusId === 8) {
        return <div className='status--waiting'>
            <p className='status'>WAITING FOR RESPONSE</p>
        </div>
    } else if(jobStatusId === 9) {
        return <div className='status--offer'>
            <p className='status'>OFFER</p>
        </div>
    } else if(jobStatusId === 10) {
        return <div className='status--rejected'>
            <p className='status'>REJECTED</p>
        </div>
    } else if(jobStatusId === 11) {
        return <div className='status--negotiating'>
            <p className='status'>NEGOTIATING</p>
        </div>
    } else if (jobStatusId === 12) {
        return <div className='status--accepted-offer'>
            <p className='status'>ACCEPTED OFFER</p>
        </div>
    } else {
        return <div className='status--rejected-offer'>
            <p className='status'>REJECTED OFFER</p>
        </div>
    }
}

export default StatusColorChanger;