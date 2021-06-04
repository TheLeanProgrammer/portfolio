import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects.'
                details="Here are a few cool things I've worked on, do check them out!"
            />

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Projects;
