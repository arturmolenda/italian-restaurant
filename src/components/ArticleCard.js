import React from 'react';

import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import moment from 'moment';

import client from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

const urlFor = (src) => {
  return builder.image(src);
};

const ArticleCard = ({ post, maxCharacters = 100, fontSmall }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div
        className={`bg-white mx-1 shadow-md relative transition-all card-hover ${
          fontSmall ? 'text-sm mb-2' : 'mb-4'
        }`}
      >
        <div
          className='relative w-full h-full bg-cover'
          style={{
            backgroundImage: `url(${post.mainImage.metadata.lqip})`,
            paddingBottom: '67%',
            zIndex: -1,
          }}
        >
          <Img
            className='absolute top-0'
            src={urlFor(post.mainImage.image).url()}
            alt={'Article Main Image'}
            loader={
              <img
                src={post.mainImage.metadata.lqip}
                className='absolute top-0 w-full h-full'
                alt={'Thumbnail'}
              />
            }
          />
          <p className='absolute -bottom-2 right-2 bg-yellow-300 text-gray-600 font-bold px-2 rounded'>
            {post.category}
          </p>
        </div>
        <div className='p-2 flex flex-col justify-between h-40'>
          <div className=' max-h-28'>
            <h2 className='font-bold md:text-xl text-gray-700'>{post.title}</h2>
            <p>
              {post.cardText.length >= maxCharacters
                ? `${post.cardText.substring(0, maxCharacters)}...`
                : post.cardText}
            </p>
          </div>
          <p className='max-h-20'>
            By <span className='font-bold text-gray-700'>{post.author}</span>{' '}
            <span className='text-gray-400'>
              {moment(post.createdAt).format('MMM Do YYYY')}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
