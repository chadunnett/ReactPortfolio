import React, { useState } from 'react';
import NavTabs from './Navigation';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  