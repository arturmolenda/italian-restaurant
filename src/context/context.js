import { createContext } from 'react';

export const StateContext = createContext({
  carouselImages: [],
  aboutData: {},
  brandName: '',
  businessData: {},
  menuData: {},
  galleryImages: [],
  blogPosts: [],
});
