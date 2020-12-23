import React, { useContext } from 'react';
import { StateContext } from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faUtensils,
  faPizzaSlice,
  faEgg,
} from '@fortawesome/free-solid-svg-icons';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const urlFor = (src) => {
  return builder.image(src);
};

const advContainer = 'flex items-baseline p-3 rounded';
const advantageStyling = 'prose lg:prose-xl max-w-full text-base text-left';
const advantageStylingRight =
  'prose lg:prose-xl max-w-full text-base text-right';
const iconStylingLeft =
  'p-4 w-12 h-12 mr-4 rounded-full bg-yellow-600 text-white text-2xl flex items-center justify-center';
const iconStylingRight =
  'p-4 w-12 h-12 ml-4 rounded-full bg-yellow-600 text-white text-2xl flex items-center justify-center';

const About = () => {
  const { aboutData } = useContext(StateContext);
  console.log(aboutData);
  return (
    <>
      {aboutData && Object.keys(aboutData).length !== 0 && (
        <>
          <div
            className='h-screen relative z-0 bg-fixed -mt-32 bg-center bg-no-repeat bg-cover flex justify-center items-center'
            style={{
              backgroundImage: `url(${urlFor(
                aboutData.aboutUsImage.image
              ).url()})`,
              zIndex: -1,
            }}
          >
            <h1 className='text-4xl py-4 px-8 bg-gray-600 text-gray-100 font-bold font-italiana'>
              {aboutData.title}
            </h1>
          </div>
          <div className='container mx-auto'>
            <section className='px-16 lg:px-48 py-2 prose lg:prose-xl max-w-full'>
              <BlockContent
                blocks={aboutData.aboutUs}
                projectId='r727n9na'
                dataset='production'
              />
            </section>
          </div>
          <div
            className='bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center'
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${urlFor(
                aboutData.extraImage.image
              ).url()})`,
              zIndex: -1,
            }}
          >
            <section className='container mt-24 sm:mt-0 flex flex-col sm:flex-row items-center'>
              <div className='flex sm:h-96 sm:justify-between flex-col'>
                <div className={advContainer}>
                  <div className={iconStylingLeft}>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <BlockContent
                    className={`${advantageStyling} block-content-text-white`}
                    blocks={aboutData.advantage1}
                    projectId='r727n9na'
                    dataset='production'
                  />
                </div>
                <div className={advContainer}>
                  <div className={iconStylingLeft}>
                    <FontAwesomeIcon icon={faEgg} />
                  </div>
                  <BlockContent
                    className={`${advantageStyling} block-content-text-white`}
                    blocks={aboutData.advantage2}
                    projectId='r727n9na'
                    dataset='production'
                  />
                </div>
              </div>
              <img
                className='p-10'
                src={`${urlFor(aboutData.dishImage.image)
                  .size(600, 600)
                  .url()}`}
                alt={aboutData.dishImage.description}
              />
              <div className='flex h-96 sm:justify-between flex-col'>
                <div className={advContainer}>
                  <BlockContent
                    className={`${advantageStylingRight} block-content-text-white`}
                    blocks={aboutData.advantage3}
                    projectId='r727n9na'
                    dataset='production'
                  />
                  <div className={iconStylingRight}>
                    <FontAwesomeIcon icon={faPizzaSlice} />
                  </div>
                </div>
                <div className={advContainer}>
                  <BlockContent
                    className={`${advantageStylingRight} block-content-text-white`}
                    blocks={aboutData.advantage4}
                    projectId='r727n9na'
                    dataset='production'
                  />
                  <div className={iconStylingRight}>
                    <FontAwesomeIcon icon={faUtensils} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default About;
