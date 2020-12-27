import React, { useContext, useEffect, useState } from 'react';

import Masonry from 'react-masonry-css';
import imageUrlBuilder from '@sanity/image-url';
import { Img } from 'react-image';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import { StateContext } from '../../context/context';
import client from '../../client';
import placeholderImg from '../../placeholderImg.png';

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
  const { galleryImages: images } = useContext(StateContext);
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
    <SimpleReactLightbox>
      <div className='container mx-auto'>
        {images && images.length !== 0 && (
          <SRLWrapper callbacks={callbacks}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'
            >
              {images.map((img, i) => (
                <Img
                  key={i}
                  src={urlFor(img.image).url()}
                  loader={
                    Number(img.metadata.dimensions.aspectRatio.toFixed(1)) ===
                    1.5 ? (
                      <div className='relative' style={{ margin: '0.7rem 0' }}>
                        <img src={placeholderImg} alt='placeholder' />

                        <img
                          src={img.metadata.lqip}
                          className='absolute top-0 w-full h-full'
                          alt={'Thumbnail (close and open again)'}
                        />
                        <div className='absolute top-0 w-full h-full bg-transparent z-50' />
                      </div>
                    ) : (
                      <div className='relative' style={{ margin: '0.7rem 0' }}>
                        <img
                          className='w-full'
                          src={img.metadata.lqip}
                          alt={'Thumbnail (close and open again)'}
                        />
                        <div className='absolute top-0 w-full h-full bg-transparent z-50' />
                      </div>
                    )
                  }
                />
              ))}
            </Masonry>
          </SRLWrapper>
        )}
      </div>
    </SimpleReactLightbox>
  );
};

export default Gallery;
