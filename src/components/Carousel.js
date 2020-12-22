import React, { useContext } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Img } from 'react-image';
import Skeleton from 'react-loading-skeleton';

import placeholderImg from '../placeholderImg.png';
import { StateContext } from '../context/context';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  const { carouselImages: images } = useContext(StateContext);
  console.log(images);
  const carouselItems =
    images && images.length !== 0
      ? images.map((img) => (
          <Img
            key={img._id}
            alt={img.description ? img.description : 'Italian dish'}
            src={`${img.image}?w=1280`}
            onDragStart={(e) => e.preventDefault()}
            loader={
              <div className='relative'>
                <img alt='placeholder' src={placeholderImg} />
                <Skeleton className='absolute top-0 bottom-0 left-0 right-0 rounded-none-important' />
              </div>
            }
          />
        ))
      : [...Array(5).keys()].map((index) => (
          <div key={index} className='relative'>
            <img alt='placeholder' src={placeholderImg} />
            <Skeleton className='absolute top-0 bottom-0 left-0 right-0 rounded-none-important' />
          </div>
        ));
  return (
    <div style={{ width: '100%', display: 'block' }}>
      <Carousel
        responsive={responsive}
        autoPlay={images && images.length !== 0}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        infinite
        ssr
        minimumTouchDrag={10}
        transitionDuration={200}
        itemClass='p-1'
      >
        {carouselItems}
      </Carousel>
    </div>
  );
};

export default Slider;