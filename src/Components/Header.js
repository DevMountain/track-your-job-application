import React, {useEffect} from 'react';
import axios from 'axios';
import '../styles/components/Header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, getUser} from '../redux/authReducer';
import {withRouter} from 'react-router-dom';

//used hooks
const Header = (props) => {
    useEffect(() => {
        console.log("comes from redux props", props);
        props.getUser();
        console.log('props.history', props.history);
        if(props.user.email === ''){
            props.history.push('/');
        }
        //getting this warning:  Line 20:8:  React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
        //Also - I want to understand what the dependency array at the end of the useEffect method does.
    // }, []);s
    }, [props.user.email, props.location.pathname]);

    const logout = () => {
        axios.post('/auth/logout').then(res => {
            props.logoutUser();
            props.history.push('/')
        }).catch(err => console.log(err))
    }

    return (
        <div className='header-container'>
            <div className='header-left-header'>
                <div className='logo-box'>
                    <p>TYJA</p>
                </div>
                <p>TRACK YOUR JOB APPLICATION</p>
            </div>
            <div className='right-header'>
                <Link to='/dashboard'>
                    <p className='header-links'>DASHBOARD</p>
                </Link>
                <Link to='/addjob'>
                    <p className='header-links'>ADD JOB</p>
                </Link>

                {/* <p>Companies</p> */}
                {/* The Search Jobs link is Icebox, but super important to try to incorporate. */}
                {/* <p>Search Jobs</p> */}
                <Link to='/'>
                    <p className='header-links' onClick={logout}>LOGOUT</p>
                </Link>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => state;

function mapStateToProps(reduxState){
    console.log("REDUX STATE Nav", reduxState)
    return {
        user: reduxState.authReducer.user,
    };
}


export default connect(mapStateToProps, {logoutUser, getUser})(withRouter(Header));