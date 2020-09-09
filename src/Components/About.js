import React from 'react';
import '../styles/components/About.scss'


const About = () => {
    
    return (
        <div className='page'>
            <section className='job-container'>
                <div className='title-bar'>
                    <div className='title-box'>
                        {/* The job title needs to come from redux. */}
                        <p>ABOUT TYJA</p>
                    </div>
                    
                </div>
                <div className='about-text'>
                    <p className='about'>TYJA is a simple way to keep track of the jobs you’re applying to. Add jobs to your dashboard, and see where you’re at in each application process at a glance. No bells and whistles―just plenty of clarity. <br/> <br/>
                    Whatever your situation, TYJA will lessen the hassle of your job hunt so you can keep moving forward. 
                    </p>
                    
                </div>
            </section>

           
        </div>
    )

}


export default About;