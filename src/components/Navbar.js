import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const linkStyle = 'uppercase p-5 sm:p-2 text-sm hover:text-yellow-300';
const activeLink = 'text-yellow-300';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuClickHandle = () => {
    if (open) {
      document.body.style.overflowY = 'auto';
      setOpen(false);
    } else {
      document.body.style.overflowY = 'hidden';
      setOpen(true);
    }
  };
  const navLinkClickHandle = () => {
    document.body.style.overflowY = 'auto';
    setOpen(false);
  };
  return (
    <div className='relative w-screen bg-gray-900 py-3 sm:py-5 pr-2 sm:pr-6 flex flex-col justify-center items-center text-gray-300'>
      <Link to='/' onClick={navLinkClickHandle}>
        <h1
          className={`text text-4xl sm:text-5xl text-white font-bold font-italiana transition-all hover:text-yellow-400`}
        >
          GRAZIE
        </h1>
      </Link>
      <CSSTransition in={open} timeout={350} classNames='menuTransition'>
        <div
          className={`container transition-all sm:pr-3 mt-4 hidden sm:flex flex-row justify-evenly items-center`}
        >
          <NavLink
            to='/'
            exact
            activeClassName={activeLink}
            onClick={navLinkClickHandle}
          >
            <p className={linkStyle}>Home</p>
          </NavLink>
          <NavLink
            to='/about'
            activeClassName={activeLink}
            onClick={navLinkClickHandle}
          >
            <p className={linkStyle}>About Us</p>
          </NavLink>
          <NavLink
            to='/menu'
            activeClassName={activeLink}
            onClick={navLinkClickHandle}
          >
            <p className={linkStyle}>Menu</p>
          </NavLink>
          <NavLink
            to='/blog'
            activeClassName={activeLink}
            onClick={navLinkClickHandle}
          >
            <p className={linkStyle}>Blog</p>
          </NavLink>
          <NavLink
            to='/gallery'
            activeClassName={activeLink}
            onClick={navLinkClickHandle}
          >
            <p className={linkStyle}>Gallery</p>
          </NavLink>
        </div>
      </CSSTransition>
      <button
        className='absolute w-12 p-2 top-2 right-5 text-3xl flex justify-center items-center sm:hidden'
        onClick={menuClickHandle}
        style={{ outline: 'none' }}
      >
        <FontAwesomeIcon icon={open ? faTimes : faBars} />
      </button>
    </div>
  );
};

export default Navbar;
