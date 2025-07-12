import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Card/navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <Navbar />
      </header>
      
      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;