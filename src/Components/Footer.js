import React from 'react';
import '../styles/components/Footer.scss';
import {Link} from 'react-router-dom';




function Footer(){

    
    return (
        <div className='footer'>
            <div className='footer-links'>
                <p>TYJA © 2020</p>
                {/* Make About Us a link */}
                <Link to='/about'>
                    <p>About TYJA</p>
                </Link>
                {/* Make Contact Us a link to send email with nodemailer */}
                <p>Contact Us</p>
                </div>
        </div>
    )
}

export default Footer;


// Add "About TYJA" component (About.js - functional)
//Add "Contact Us" component (using NodeMailer?)
//Add "LinkedIn" link to TYJA's page on LinkedIn (not active link)
//Add copyright info: TYJA c 2020
//change to scss
