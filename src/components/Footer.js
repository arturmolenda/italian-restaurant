import React, { useContext } from 'react';
import { StateContext } from '../context/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const {
    businessData,
    businessData: {
      hours,
      days,
      specialDay,
      specialDayHours,
      phoneNumber1,
      phoneNumber2,
      email,
      address,
    },
  } = useContext(StateContext);
  return (
    <div className='bg-gray-900'>
      {businessData && Object.keys(businessData).length !== 0 && (
        <>
          <div className='w-full sm:pt-5 container mx-auto flex flex-col sm:flex-row justify-evenly items-start text-white'>
            <div className='flex flex-col w-80 my-5 sm:my-0 mx-auto justify-center items-center text-gray-300'>
              <h1 className='text-xl text-gray-400'>Contact</h1>
              <div className='w-8 my-2 border-t-2 border-yellow-500' />
              {phoneNumber1 && (
                <a className='font-semibold block' href={`tel:${phoneNumber1}`}>
                  {phoneNumber1}
                </a>
              )}
              {phoneNumber2 && (
                <a className='font-semibold block' href={`tel:${phoneNumber2}`}>
                  {phoneNumber2}
                </a>
              )}
              {email && (
                <a className='font-semibold' href={`mailto:${email}`}>
                  {email}
                </a>
              )}
            </div>
            <div className='flex flex-col w-80 my-5 sm:my-0 mx-auto justify-center items-center text-gray-300'>
              <h1 className='text-xl text-gray-400'>Hours</h1>
              <div className='w-8 my-2 border-t-2 border-yellow-200' />
              <p>
                <span className='font-semibold'>{days}</span> | {hours}
              </p>
              {specialDay && specialDayHours && (
                <p className='mt-2'>
                  <span className='font-semibold'>{specialDay}</span> |{' '}
                  {specialDayHours}
                </p>
              )}
            </div>
            <div className='flex flex-col w-80 my-5 sm:my-0 mx-auto justify-center items-center text-gray-300'>
              <h1 className='text-xl text-gray-400'>Location</h1>
              <div className='w-8 my-2 border-t-2 border-yellow-200' />
              {address && (
                <p
                  className='font-semibold mx-auto text-center'
                  style={{ maxWidth: 200 }}
                >
                  {address}
                </p>
              )}
            </div>
          </div>
          <div className='flex justify-evenly mt-4 max-w-xs mx-auto mb-4'>
            <a
              className='text-yellow-200 text-2xl'
              href='https://twitter.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className='text-yellow-200 text-2xl'
              href='https://instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className='text-yellow-200 text-2xl'
              href='https://youtube.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              className='text-yellow-200 text-2xl'
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <p className='text-base text-center text-gray-500 py-2'>
            © {new Date().getFullYear()} Built by Artur Molenda
          </p>
        </>
      )}
    </div>
  );
};

export default Footer;
