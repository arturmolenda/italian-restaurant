import { useState, useEffect } from 'react';
import sanityClient from '../client';

export const useStateContext = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [aboutData, setAboutData] = useState({});
  const [businessData, setBusinessData] = useState({});
  const [menuData, setMenuData] = useState({});
  const [galleryImages, setGalleryImages] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  const getCarouselImages = () => {
    sanityClient
      .fetch(
        `
  *[_type == "carouselImages"][0]{
        "imagesArray": imagesArray[]->{
          _id,
          title,
          description,
          "image": image.asset,
          "metadata": image.asset->metadata
        }
      }`
      )
      .then((res) => {
        if (res) setCarouselImages(res.imagesArray);
      })
      .catch((err) => console.log(err));
  };
  const getAboutData = () => {
    sanityClient
      .fetch(
        `
*[_type == "aboutUs"][0]{
    title,
    "aboutUsImage": aboutUsImage[0]->{
      title,
      description,
      "image": image.asset,
      "metadata": image.asset->metadata
    },
    aboutUs,
    "dishImage": dishImage[0]->{
      title,
      description,
      "image": image.asset,
      "metadata": image.asset->metadata
    },
    advantage1,
    advantage2,
    advantage3,
    advantage4,
    "extraImage": extraImage[0]->{
      title,
      description,
      "image": image.asset,
      "metadata": image.asset->metadata
    },
 }`
      )
      .then((res) => {
        if (res) setAboutData(res);
      })
      .catch((err) => console.log(err));
  };

  const getBusinessData = () => {
    sanityClient
      .fetch(
        `
  *[_type == "businessData"][0]{
        businessName,
        hours,
        days,
        specialDay,
        specialDayHours,
        phoneNumber1,
        phoneNumber2,
        email,
        address
    }`
      )
      .then((res) => {
        if (res) setBusinessData(res);
      })
      .catch((err) => console.log(err));
  };

  const getMenuData = () => {
    sanityClient
      .fetch(
        `
    *[_type == "menu"][0]{
      menuHeading1,
      "menuItems1": menuItems1[]->{
        _id,
        title,
        description,
        price
      },
      menuHeading2,
      "menuItems2": menuItems2[]->{
        _id,
        title,
        description,
        price
      },
      menuHeading3,
      "menuItems3": menuItems3[]->{
        _id,
        title,
        description,
        price
      },
      menuHeading4,
      "menuItems4": menuItems4[]->{
        _id,
        title,
        description,
        price
      },
      menuHeading5,
      "menuItems5": menuItems5[]->{
        _id,
        title,
        description,
        price
      },
  }
    `
      )
      .then((res) => {
        if (res) setMenuData(res);
      })
      .catch((err) => console.log(err));
  };

  const getGalleryImages = () => {
    sanityClient
      .fetch(
        `
    *[_type == "images" && showInGallery == true]{
      title,
      description,
      showInGallery,
      "image": image.asset,
      "metadata": image.asset->metadata
   }`
      )
      .then((res) => {
        if (res) setGalleryImages(res);
      })
      .catch((err) => console.log(err));
  };

  const getBlogPosts = () => {
    sanityClient
      .fetch(
        `
    *[_type == "post" ]{
      _id,
      title,
      "slug": slug.current,
      "category": categories[0]->title,
      "author": author->name,
      "mainImage": {
        "image": mainImage.asset,
        "metadata": mainImage.asset->metadata
      },
      publishedAt,
      body,
      cardText
    }`
      )
      .then((res) => {
        if (res) setBlogPosts(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCarouselImages();
    getAboutData();
    getBusinessData();
    getMenuData();
    getGalleryImages();
    getBlogPosts();
  }, []);

  return {
    brandName: businessData && businessData.businessName,
    carouselImages,
    aboutData,
    businessData,
    menuData,
    galleryImages,
    blogPosts,
  };
};
