import React from 'react';

const Footer = () => {
  return (
    <div className='py-5 container flex justify-center items-center text-gray-500 bg-gray-900 min-w-full'>
      <p className='text-base'>
        © {new Date().getFullYear()} Built by Artur Molenda
      </p>
    </div>
  );
};

export default Footer;
