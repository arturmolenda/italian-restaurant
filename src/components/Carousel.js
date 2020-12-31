import React, { useContext, useState } from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Img } from 'react-image';
import Skeleton from 'react-loading-skeleton';
import imageUrlBuilder from '@sanity/image-url';

import placeholderImg from '../placeholderImg.png';
import { StateContext } from '../context/context';
import client from '../client';

const builder = imageUrlBuilder(client);

const urlFor = (src) => {
  return builder.image(src);
};

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
  const [autoPlay, setAutoPlay] = useState(true);
  const { carouselImages: images } = useContext(StateContext);
  const carouselItems =
    images && images.length !== 0
      ? images.map((img) => (
          <Img
            key={img._id}
            alt={img.description ? img.description : 'Italian dish'}
            className='w-full'
            src={urlFor(img.image)
              .width(img.metadata.dimensions.width / 4)
              .url()}
            onDragStart={(e) => e.preventDefault()}
            loader={
              Number(img.metadata.dimensions.aspectRatio.toFixed(1)) === 1.5 ? (
                <div
                  className='relative'
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img src={placeholderImg} alt='placeholder' />

                  <img
                    src={img.metadata.lqip}
                    className='absolute top-0 w-full h-full'
                    alt={'Thumbnail'}
                  />
                </div>
              ) : (
                <img
                  className='w-full h-full'
                  src={img.metadata.lqip}
                  onDragStart={(e) => e.preventDefault()}
                  alt={'Thumbnail'}
                />
              )
            }
          />
        ))
      : [...Array(6).keys()].map((index) => (
          <div
            key={index}
            className='relative'
            onDragStart={(e) => e.preventDefault()}
          >
            <img alt='placeholder' src={placeholderImg} />
            <Skeleton className='absolute top-0 bottom-0 left-0 right-0 rounded-none-important' />
          </div>
        ));

  const carouselHover = () => setAutoPlay((prevState) => !prevState);
  return (
    <div
      style={{ width: '100%', display: 'block' }}
      onMouseEnter={carouselHover}
      onMouseLeave={carouselHover}
    >
      <Carousel
        responsive={responsive}
        autoPlay={images && images.length !== 0 && autoPlay}
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
