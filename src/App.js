import React from 'react';
import {Route, Routes } from 'react-router-dom'
import About from './components/About';
import Home from "./components/Home";
import Services from './components/Services';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'

function App() {
  return (<>
  <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/HeroSection" element={<HeroSection/>}/>
    
   
  </Routes>
  </>
  );
}

export default App;
