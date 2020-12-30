import React, { useContext, useEffect, useState } from 'react';

import Masonry from 'react-masonry-css';
import imageUrlBuilder from '@sanity/image-url';
import { Img } from 'react-image';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import { StateContext } from '../../context/context';
import client from '../../client';
import placeholderImg from '../../placeholderImg.png';
import Meta from '../Meta';

const builder = imageUrlBuilder(client);

const urlFor = (src) => {
  return builder.image(src);
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = () => {
  const {
    galleryImages: images,
    businessData: { businessName },
  } = useContext(StateContext);
  const [currentIndex, setCurrentIndex] = useState(null);

  const callbacks = {
    onSlideChange: (object) => setCurrentIndex(object.index),
    onLightboxOpened: (object) => {
      setCurrentIndex(Number(object.currentSlide.id));
    },
    onLightboxClosed: (object) => setCurrentIndex(null),
  };

  useEffect(() => {
    // fix for displaying img description on the top left corner
    if (
      currentIndex !== null &&
      images &&
      images.length !== 0 &&
      currentIndex < images.length
    ) {
      // get lightbox container
      const lightboxContainer = document.getElementById('SRLLightbox');
      // remove img description if it exists
      if (lightboxContainer.childElementCount === 2) {
        lightboxContainer.removeChild(lightboxContainer.children[1]);
      }
      // create html element with img description
      const imgDescription = document.createElement('div');
      imgDescription.className = 'lightbox-img-description absolute block';
      imgDescription.innerHTML = images[currentIndex].description;
      // append img description
      lightboxContainer.appendChild(imgDescription);
    }
  }, [currentIndex, images]);
  return (
    <>
      {images && images.length !== 0 && (
        <>
          <Meta title={businessName && `Gallery | ${businessName}`} />
          <div className='container mx-auto flex justify-center'>
            <h1 className='text-center mt-7 mb-5 text-4xl bg-gray-600 text-gray-100 py-4 px-8 font-italiana font-bold'>
              Gallery
            </h1>
          </div>
          <SimpleReactLightbox>
            <div className='container mx-auto'>
              <SRLWrapper callbacks={callbacks}>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className='my-masonry-grid'
                  columnClassName='my-masonry-grid_column flex flex-col'
                >
                  {images.map((img, i) => (
                    <a
                      key={i}
                      href={urlFor(img.image).url()}
                      className='my-1.5'
                    >
                      <Img
                        src={urlFor(img.image).url()}
                        loader={
                          <img
                            src={img.metadata.lqip}
                            className='w-full h-full mb-1.5'
                            alt={''}
                          />
                        }
                      />
                    </a>
                  ))}
                </Masonry>
              </SRLWrapper>
            </div>
          </SimpleReactLightbox>
        </>
      )}
    </>
  );
};

export default Gallery;
