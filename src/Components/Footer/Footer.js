import React from 'react';
import './Footer.scss';



function Footer(){

    return (
        <div className='footer-container'>
            <p>TYJA © 2020</p>
            {/* Make About Us a link */}
            <p>About Us</p>
            {/* Make Contact Us a link to send email with nodemailer */}
            <p>Contact Us</p>
        </div>
    )
}

export default Footer;


// Add "About TYJA" component (About.js - functional)
//Add "Contact Us" component (using NodeMailer?)
//Add "LinkedIn" link to TYJA's page on LinkedIn (not active link)
//Add copyright info: TYJA c 2020
//change to scss
