import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime.gif';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='header-text'>
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is Madhav, a full stack dev and a teacher</p>
                </div>
                <div className='head-btns'>
                    <Link to='/about' className='btn btn-white'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                </div>
                <div className='splash-image'>
                    <img
                        src={homeAnime}
                        alt='animation'
                        className='home-anime'
                    />
                </div>
            </div>
        );
    }
}

export default Home;
