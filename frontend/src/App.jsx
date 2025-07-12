// src/App.jsx
import { useState } from 'react';
import Auth from './components/Auth/Auth';
import Card from './components/Card/card';
import LandingPage from './components/LandingPage';
import { Navbar } from './components/Card/navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Auth />
    <Card />
    <LandingPage/>
    
    </>
  )
 
}

export default App;
