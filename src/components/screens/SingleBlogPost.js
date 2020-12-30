import React, { useContext, useEffect, useState } from 'react';

import BlockContent from '@sanity/block-content-to-react';
import moment from 'moment';
import { DiscussionEmbed } from 'disqus-react';

import { StateContext } from '../../context/context';
import ArticleCard from '../ArticleCard';

import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import LoadedBackground from '../LoadedBackground';
import Meta from '../Meta';

const builder = imageUrlBuilder(client);

const urlFor = (src) => {
  return builder.image(src);
};

const SingleBlogPost = (props) => {
  const [post, setPost] = useState({});
  const {
    blogPosts,
    businessData: { businessName },
  } = useContext(StateContext);

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (blogPosts && id) {
      const currentPost = blogPosts.find((p) => p.slug === id);
      if (currentPost) setPost(currentPost);
    }
  }, [id, blogPosts]);

  return (
    <>
      {post && Object.keys(post).length !== 0 && (
        <>
          <Meta title={businessName && `${post.title} | ${businessName}`} />
          <div className='relative bg-white' style={{ zIndex: -1 }}>
            <LoadedBackground
              src={urlFor(post.mainImage.image).url()}
              thumbnail={post.mainImage.metadata.lqip}
              classes={
                'h-screen max-h-screen z-0 bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-end'
              }
              inlineStyling={{ marginTop: '-10vh' }}
            >
              <div
                className='py-3 px-3 mb-32 sm:px-5 w-full max-w-4xl mx-auto text-center rounded'
                style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
              >
                <h1 className='text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-3 text-white font-bold'>
                  {post.title}
                </h1>
                <p className='max-h-8 text-white'>
                  By <span className='font-bold'>{post.author}</span>{' '}
                  <span className='text-gray-400'>
                    {moment(post.createdAt).format('MMM Do YYYY')}
                  </span>
                </p>
              </div>
            </LoadedBackground>
          </div>
          <div className='mb-5 container mx-auto max-w-4xl bg-white '>
            <div className='p-5'>
              <BlockContent
                className={`prose lg:prose-lg max-w-full mb-10`}
                blocks={post.body}
                projectId='r727n9na'
                dataset='production'
              />
              <DiscussionEmbed
                shortname='grazie-1'
                config={{
                  identifier: id,
                  title: post.title,
                }}
              />
            </div>
            <h1 className='text-gray-700 text-3xl sm:text-4xl font-bold mt-6 pl-3'>
              Also check out newest articles!
            </h1>
            <div className='p-2 pt-0'>
              <ul className='flex overflow-auto pt-2'>
                {blogPosts.slice(0, 6).map((article, i) => {
                  return (
                    post._id !== article._id && (
                      <li
                        key={i}
                        className='min-w-72'
                        style={{ minWidth: 253 }}
                      >
                        <ArticleCard
                          post={article}
                          maxCharacters={40}
                          fontSmall
                        />
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleBlogPost;
