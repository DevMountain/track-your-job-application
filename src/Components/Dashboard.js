import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
// import DashboardJob from './DashboardJob'
// import DashboardAction from './DashboardAction';
// import Job from './Job';
import '../styles/components/Dashboard.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../redux/authReducer';
import {updateJobs} from '../redux/jobReducer';
import {withRouter} from 'react-router-dom';
import StatusColorChanger from './StatusColorChanger';
// import { render } from 'sass';

//used hooks
const Dashboard = (props) => {

    //Why is it saying that jobs here isn't used?
    //
    const [jobs, setJobs] = useState([]);
    // const [users, setUsers] = useState();
    // I need hooks here because I need the lifecycle method. I don't know if I need state or not. I don't think I do. I do need a link on the add button to the add job page. I think I need state because I need to make the axios call and update the value of state with the response (res.data) of the axios call. And that's what I'll pass down as props to dashboardjob.js. And also, I need to connect to redux to get the userId off of user in the store. 

//Uncomment this after I console.log props.

    useEffect(() => {
        console.log('props on dashboard', props)
        const {userId} = props.authReducer.user;
        // const {updateJobs} = props.jobReducer;
        axios
            // .get(`/api/jobs`)
            .get(`/api/jobs/${userId}`)
            .then(res =>{
                // It's not recognizing that I'm using what I'm importing from jobReducer. Why? Am I not using jobs from redux state? I think I need to update state here and then it will map to redux. 
                console.log(res.data);
                setJobs(res.data);
                props.updateJobs(res.data);
            })
            .catch(err => console.log(err));
    }, []);
     

    return (
        <div className='dash-page'>
            <section className='big-list-container'>
                <div className='title-bar-jobs'>
                    <div className='dashboard-job-title'>
                        <p>ALL JOBS</p>
                    </div>
                    {/* Fix this line (style) element when I have time. */}
                    <section className='select-line-box'>
                        <div className='line-box'></div>
                        <div className='line-container'>
                            <div className='box-line-up'></div>
                            <div className='box-line-down'></div>
                        </div>
                    </section>
                    <div className='status-title'>
                        <p>STATUS</p>
                    </div>
                </div>
                <div className='btn-container'>
                    <Link to='/addjob'>
                        <button className='btn'>ADD JOB</button>
                    </Link>
                </div>
                <section className='map-list-container'>
                    {/* In hooks, do we have to do props or anything or do we destructure at all? See jobs below: */}
                    {/* Is this right? */}
                    {jobs.map((job, index, array) => {
                        console.log('job', job)
                        return (
                            <>
                                <Link to = {`/job/${props.authReducer.user.userId}/${job.job_id}`} >
                                    <div key={index} className='job-map-box'  >
                                        <div className='job-company-box'>
                                            <p className='job-title'>{job.title}</p>
                                            <p className='company-name'>{job.company}</p>
                                            
                                            {/* <p className='location'>TEST COMPANY{job.location}</p>
                                            <p className='company-name'>TEST COMPANY{job.company}</p>
                                            <p className='company-name'>TEST COMPANY{job.company}</p>
                                            <p className='company-name'>TEST COMPANY{job.company}</p>
                                            <p className='company-name'>TEST COMPANY{job.company}</p>
                                            <p className='company-name'>TEST COMPANY{job.company}</p>
                                            <p className='company-name'>TEST COMPANY{job.company}</p> */}
                                        </div>
                                        <StatusColorChanger key={index} job={job}/>
                                    </div>
                                </Link>
                            </>
                        );
                    })}
                </section>
            </section>
            {/* ICEBOX feature for future version: */}
            {/* <div className='line-between'></div> */}
            {/* <section className='big-list-container'>
                <div className='title-bar'>
                    <div className='title title-right'>
                        <p>ACTION ITEMS</p>
                    </div>
                    <div className='arrow-container arrow-container-right'>
                        <img className="arrow arrow-right" src={arrow} alt='arrow'/>
                    </div>
                    <div className='status'>
                        <p>STATUS</p>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='add-btn'>ADD ACTION ITEM</button>
                </div>
                <section className='map-list-container'>
                    {/* Uncomment the following line as soon as props are set up. */}
                    {/* {actionMap} */}
                {/* </section>
            </section>  */}
            
        </div>
    )
}



const mapStateToProps = state => state;
// function mapStateToProps(reduxState){
//     console.log("REDUX STATE Nav", reduxState)
//     return {
//         user: reduxState.user,
        //**Do I need this? 
//         jobs: reduxState.jobs
//     };
// }

export default connect(mapStateToProps, {getUser, updateJobs})(withRouter(Dashboard));


// {/* Right and left list containers are the same format and can use the same classid or styling handle */}




    //I tried to do a function to map over status and render a div setup for each status, but that will just render 13 status boxes for each job map below. Doesn't work. Go back to defining the if statements outside the return and putting that function in curly brackets in the return, inside the job map. 

    // const statusMap = props.jobs.status.map((status, index, array) => {
    //     return <div key={index} className='status-box'>
    //                 <p className='status-text'>status{status}</p>
    //             </div>
    // })
    // {status.map}