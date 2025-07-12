import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './layout.jsx'
import LandingPage from './components/LandingPage.jsx'
import UserDashboard from './components/userdashboard.jsx'

import About from './components/About.jsx'
import FAQ from './components/faq.jsx'
import SwapPage from './components/swapPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="swap" element={<SwapPage />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
