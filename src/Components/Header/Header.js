import React from 'react';
import './Header.scss';
//change to scss
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {logoutUser} from '../../redux/reducer';
// import {getUser} from '../../redux/reducer';


const Header = () => {

    return (
        <div className='header-container'>
            <div className='left-header'>
                <h1>TYJA</h1>
                <h3>Track Your Job Application</h3>
            </div>
            <div className='right-header'>
                <h3>Dashboard</h3>
                <h3>Contacts</h3>
                <h3>Companies</h3>
                {/* The Search Jobs link is Icebox, but super important to try to findRenderedDOMComponentWithClass. */}
                {/* <h3>Search Jobs</h3> */}
                <h3>Logout</h3>
            </div>
                
            {/* Make About Us a link */}
            <p>About Us</p>
            {/* Make Contact Us a link to send email with nodemailer */}
            <p>Contact Us</p>
        </div>
    )
}

export default Header;