import React, { useContext } from 'react';
import { StateContext } from '../../context/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPizzaSlice,
  faPepperHot,
  faFish,
  faWineBottle,
  faCocktail,
} from '@fortawesome/free-solid-svg-icons';

const MenuHeader = ({ heading, icon }) => (
  <div className='mb-2 flex justify-between items-center border-b-2 border-gray-700'>
    <h2 className='font-bold text-xl text-yellow-800 font-italiana'>
      {heading}
    </h2>
    <FontAwesomeIcon className='text-2xl text-yellow-800' icon={icon} />
  </div>
);
const MenuItems = ({ items }) =>
  items.map((item, i) => (
    <div key={i} className='flex justify-between mb-3'>
      <div>
        <p className='font-bold text-md font-italiana'>{item.title}</p>
        <p className='italic text-sm'>{item.description}</p>
      </div>
      <p>${parseFloat(item.price).toFixed(2)}</p>
    </div>
  ));

const Menu = () => {
  const {
    businessData,
    businessData: {
      businessName,
      hours,
      days,
      specialDay,
      phoneNumber1,
      phoneNumber2,
      email,
    },
    menuData,
    menuData: {
      menuHeading1,
      menuHeading2,
      menuHeading3,
      menuHeading4,
      menuHeading5,
      menuItems1,
      menuItems2,
      menuItems3,
      menuItems4,
      menuItems5,
    },
  } = useContext(StateContext);
  const isObjectEmpty = (obj) => Object.keys(obj).length !== 0;
  return (
    <div className='container mx-auto'>
      {isObjectEmpty(businessData) && isObjectEmpty(menuData) && (
        <>
          <div className='mt-7 text-center '>
            <h1 className='font-italiana text-4xl text-yellow-800 font-bold'>
              {businessName}
            </h1>
            <p className='font-bold mt-2'>
              {days} | {hours}
            </p>
            {specialDay && <p className='font-bold'>{specialDay}</p>}
            <div className='flex-col my-3'>
              <p className='font-semibold'>Questions? Order? Table?</p>
              <p className='font-semibold'>Call us!</p>
              {phoneNumber1 && (
                <a className='font-bold block' href={`tel:${phoneNumber1}`}>
                  {phoneNumber1}
                </a>
              )}
              {phoneNumber2 && (
                <a className='font-bold block' href={`tel:${phoneNumber2}`}>
                  {phoneNumber2}
                </a>
              )}
            </div>
            {email && (
              <p>
                Email:{' '}
                <a className='font-bold' href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
            )}
          </div>
          <div className='mt-3 mb-8 max-w-md sm:max-w-4xl mx-auto border-t-2 border-dotted border-gray-700' />
          <div className='container mx-auto mb-10 max-w-md lg:max-w-full flex-col rounded lg:grid p-6 bg-gray-100 menu-grid'>
            <div>
              <MenuHeader heading={menuHeading1} icon={faPizzaSlice} />
              <MenuItems items={menuItems1} />
            </div>
            <div>
              <MenuHeader heading={menuHeading2} icon={faPepperHot} />
              <MenuItems items={menuItems2} />
            </div>
            <div>
              <MenuHeader heading={menuHeading3} icon={faFish} />
              <MenuItems items={menuItems3} />
            </div>
            <div>
              {' '}
              <MenuHeader heading={menuHeading4} icon={faWineBottle} />
              <MenuItems items={menuItems4} />
            </div>
            <div>
              {' '}
              <MenuHeader heading={menuHeading5} icon={faCocktail} />
              <MenuItems items={menuItems5} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
