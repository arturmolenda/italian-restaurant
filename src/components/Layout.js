import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='min-h-screen'>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
