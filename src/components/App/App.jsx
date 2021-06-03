import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';

import './App.css';
import NavBar from '../NavBar/NavBar';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/projects' exact component={Projects} />
                    <Route path='/skills' exact component={Skills} />
                    <Route path='/contact' exact component={Contact} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
