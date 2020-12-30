import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
  title = 'Welcome To Our Restaurant!',
  description = 'Looking for some high quality food? Visit us!',
  keywords = 'food, restaurant, italian, pizza, dishes, takeout, delivery',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

export default Meta;
