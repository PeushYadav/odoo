// src/App.jsx
import { useState } from 'react';
import Auth from './components/Auth/Auth';
import Card from './components/Card/card';
import LandingPage from './components/LandingPage';
import { Navbar } from './components/Card/Navbar';
import UserDashboard from './components/userdashboard';
import ProductDetailPage from './components/productDesign';
import FAQ from './components/faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
    {/* <Navbar/>
   */}
   
    <LandingPage/>
    {/* <UserDashboard/> */}
    {/* <ProductDetailPage/> */}
    {/* <FAQ/>
    <Footer/> */}
    </>
  )
 
}

export default App;
