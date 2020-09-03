import React, {useEffect} from 'react';
import axios from 'axios';
import DashboardJobs from './DashboardJobs'
import DashboardActions from './DashboardActions';
import '../styles/components/Dashboard.scss';
// import '../styles/components/Header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, getUser} from '../redux/authReducer';
import {withRouter} from 'react-router-dom';

const Dashboard = (props) => {
    // props from App.js
   
    useEffect(() => {
        console.log("comes from redux props", props);
        props.getUser();
        console.log('props.user.email', props.user.email)
        if(props.user.email === null){
            props.history.push('/');
        }
    }, [props.user.email, props.location.pathname]);
        
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
                        <h1>Jobs</h1>
                    </div>
                    <div className='status'>
                        <h4>STATUS</h4>
                    </div>
                </div>
                <button className='add-btn'>ADD JOB</button>
                <section className='map-list-container'>
                {/* Uncomment the following line as soon as props are set up. */}
                    {/* {jobMap} */}
                </section>
            </section>
            <section className='big-list-container'>
                <div className='title-bar'>
                    <div className='title'>
                        <h1>Action Items</h1>
                    </div>
                    <div className='status'>
                        <h4>STATUS</h4>
                    </div>
                </div>
                <button className='add-btn'>ADD ACTION ITEM</button>
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
        username: reduxState.user.email,
    };
}

export default connect(mapStateToProps, {getUser})(withRouter(Dashboard));

//Styling notes: set overflow for lists to auto, so it will scroll down to the other list items.
{/* Right and left list containers are the same format and can use the same classid or styling handle */}