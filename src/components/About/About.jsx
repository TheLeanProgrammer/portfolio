import React from 'react';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='The Lean Programmer | Public speaker | YouTuber | Blogger | Uplifting the student community in the field of tech and personal growth'
            />

            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
