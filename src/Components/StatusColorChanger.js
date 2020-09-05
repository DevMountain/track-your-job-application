

const statusColorChanger = () => {
    //How would I destructure that?
    // const {status} = props.job
    if(status === 'Researching'){
        <div className='status-researching'>
            <p className='status'>TEST STATUS{status}</p>
        </div>
    } else if(status === 'Networking') {
        <div className='status-networking'>
            <p className='status'>TEST STATUS{status}</p>
        </div>
    } else if(status === 'Applying') {
        <div className='status-application-submitted'>
            <p className='status'>TEST STATUS{status}</p>
        </div>
    } else if(status === 'Application Submitted') {
        <div className='status-application-submitted'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Assessments') {
        <div className='status-assessments'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Interviewing') {
        <div className='status-interviewing'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Sending Thank You') {
        <div className='status-thank-you'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Waiting for Response') {
        <div className='status-waiting'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Offer') {
        <div className='status-offer'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Rejected') {
        <div className='status-rejected'>
            <p className='status'>status{status}</p>
        </div>
    } else if(status === 'Negotiating') {
        <div className='status-negotiating'>
            <p className='status'>status{status}</p>
        </div>
    } else if (status === 'Accepted Offer') {
        <div className='status-accepted-offer'>
            <p className='status'>status{status}</p>
        </div>
    } else {
        <div className='status-rejected-offer'>
            <p className='status'>status{status}</p>
        </div>
    }
}