import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DashboardJobs from './DashboardJob'
import DashboardActions from './DashboardActions';
import '../styles/components/Dashboard.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../redux/authReducer';
import {withRouter} from 'react-router-dom';
import arrow from '../left-black-arrow-skinny-icon.png';

const Dashboard = (props) => {
    // props from App.js
    const [jobs, setJobs] = useState([]);
    
        useEffect(() => {
            axios
                .get('/api/jobs')
                .then(res =>{
                    setJobs(res.data);
                })
                .catch(err => console.log(err));
        }, []);
   
        
    //Uncomment the jobMap and actionMap once I have data to send through props. 

    // const jobMap = props.jobs.map(job => {
    //     return <DashboardJobs
    //                 key={job.id}
    //                 job={job}/>
    // })

    // const actionMap = props.actions.map(job => {
    //     return <DashboardActions
    //                 key={action.id}
    //                 job={action}/>
    // })

    //Method for axios call to get all jobs here.



    //Method for adding job here.

    return(
        <div className='dash-page'>
            <section className='big-list-container'>
                <div className='title-bar'>
                    <div className='title'>
                        <p>JOBS</p>
                    </div>
                    <div className='arrow-container'>
                        <img className="arrow" src={arrow} alt='arrow'/>
                    </div>
                    <div className='status'>
                        <p>STATUS</p>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='add-btn'>ADD JOB</button>
                </div>
                <section className='map-list-container'>
                {/* Uncomment the following line as soon as props are set up. */}
                    {/* {jobMap} */}
                </section>
            </section>
            <div className='line-between'></div>
            <section className='big-list-container'>
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
                </section>
            </section>
            
        </div>
    )
}

// const mapStateToProps = state => state;
function mapStateToProps(reduxState){
    console.log("REDUX STATE Nav", reduxState)
    return {
        user: reduxState.user
    };
}

export default connect(mapStateToProps, {getUser})(withRouter(Dashboard));

//Styling notes: set overflow for lists to auto, so it will scroll down to the other list items.
{/* Right and left list containers are the same format and can use the same classid or styling handle */}