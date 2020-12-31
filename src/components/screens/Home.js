import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context/context';
import Slider from '../Carousel';
import Meta from '../Meta';

const Home = () => {
  const {
    businessData: { businessName },
  } = useContext(StateContext);
  return (
    <>
      <Meta
        title={businessName && `Welcome To Our Restaurant, ${businessName}!`}
      />
      <Slider />
      <div className='container flex flex-col justify-between items-center mx-auto mt-1 h-full'>
        <h1 className='text-2xl xl:text-5xl md:text-4xl sm:text-3xl font-italiana bg-gray-600 text-gray-100 py-4 px-8 text-center font-bold mt-10'>
          Welcome to our restaurant, Grazie!
        </h1>
        <Link to='/menu'>
          <button className='px-10 md:px16 py-2 mt-6 font-bold text-md md:text-xl font-italiana text-white bg-yellow-600 rounded-sm  transition-all focus:outline-none  hover:bg-yellow-700'>
            BROWSE MENU
          </button>
        </Link>
        <p className='mt-6 mb-10 max-w-xs text-gray-600 text-center'>
          Or if you want to learn more about us, check our{' '}
          <Link to='/about' className='text-yellow-600'>
            About Us
          </Link>{' '}
          page!
        </p>
      </div>
    </>
  );
};

export default Home;
