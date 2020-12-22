import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const linkStyle = 'p-1 uppercase text-sm hover:text-blue-300';
const activeLink = 'text-blue-300';

const Navbar = () => {
  return (
    <div className='bg-gray-900 py-5 w-full flex flex-col justify-center items-center text-gray-300'>
      <Link to='/'>
        <h1 className='text text-5xl mb-4 text-white font-bold font-italiana'>
          GRAZIE
        </h1>
      </Link>
      <div className='container flex justify-evenly'>
        <NavLink to='/' exact activeClassName={activeLink}>
          <p className={linkStyle}>Home</p>
        </NavLink>
        <NavLink to='/about' activeClassName={activeLink}>
          <p className={linkStyle}>About Us</p>
        </NavLink>
        <NavLink to='/menu' activeClassName={activeLink}>
          <p className={linkStyle}>Menu</p>
        </NavLink>
        <NavLink to='/blog' activeClassName={activeLink}>
          <p className={linkStyle}>Blog</p>
        </NavLink>
        <NavLink to='/gallery' activeClassName={activeLink}>
          <p className={linkStyle}>Gallery</p>
        </NavLink>
        <NavLink to='/catering' activeClassName={activeLink}>
          <p className={linkStyle}>Catering</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
