// objective: modern restaurent
// Author: Mashfikur Rahman
// Date: 4th March 2022

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, Findus, Footer } from './container';


const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <Findus />
        <Footer />
    </div>
);

export default App;