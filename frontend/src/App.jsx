// src/App.jsx
import { useState } from 'react';
import Auth from './components/Auth/Auth';
import Card from './components/Card/card';
import LandingPage from './components/LandingPage';
import { Navbar } from './components/Card/navbar';
import UserDashboard from './userdashboard';
import ProductDetailPage from './components/productDesign';

function App() {
  return (
    <>
    <Navbar/>
  
   
    <LandingPage/>
    <UserDashboard/>
    <ProductDetailPage/>
    
    </>
  )
 
}

export default App;
