// src/App.jsx
import { useState } from 'react';
import Auth from './components/Auth/Auth';
import { Navbar } from './components/Card/navbar';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <>
    <Navbar />
    <Auth />
    <LandingPage/>
    </>
  )
 
}

export default App;
