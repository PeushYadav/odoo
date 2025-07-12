// src/App.jsx
import { useState } from 'react';
import Auth from './components/Auth/Auth';
import Card from './components/Card/card';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <>
    <Auth />
    <Card />
    <LandingPage/>
    </>
  )
 
}

export default App;
