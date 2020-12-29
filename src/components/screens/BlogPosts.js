import React, { useContext } from 'react';

import Masonry from 'react-masonry-css';

import { StateContext } from '../../context/context';
import ArticleCard from '../ArticleCard';

const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  1024: 2,
  668: 1,
};

const BlogPosts = () => {
  const { blogPosts } = useContext(StateContext);
  return (
    <>
      {blogPosts && blogPosts.length !== 0 && (
        <>
          <div className='container mx-auto flex justify-center'>
            <h1 className='text-center mt-7 text-4xl bg-gray-600 text-gray-100 py-4 px-8 font-italiana font-bold'>
              Articles
            </h1>
          </div>
          <div className='container mx-auto mt-7'>
            <Masonry
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'
              breakpointCols={breakpointColumnsObj}
            >
              {blogPosts.map((post, i) => (
                <ArticleCard post={post} key={i} />
              ))}
            </Masonry>
          </div>
        </>
      )}
    </>
  );
};

export default BlogPosts;
