import { useState, useEffect } from 'react';
import sanityClient from '../client';

export const useStateContext = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    // get carouselImages
    sanityClient
      .fetch(
        `*[_type == "carouselImages"]{
            "imagesArray": imagesArray[]->{
              _id,
              title,
              description,
              "image": image.asset
            }
          }`
      )
      .then((res) => {
        console.log(res);
        if (res.length !== 0 && res.length !== 0)
          setCarouselImages(res[0].imagesArray);
      })
      .catch((err) => console.log(err));

    // get aboutData
    sanityClient
      .fetch(
        `*[_type == "aboutUs"]{
        title,
        "aboutUsImage": aboutUsImage[0]->{
          title,
          description,
          "image": image.asset
        },
     aboutUs,
     "dishImage": dishImage[0]->{
       title,
       description,
       "image": image.asset
     },
     advantage1,
     advantage2,
     advantage3,
     advantage4,
     "extraImage": extraImage[0]->{
      title,
      description,
      "image": image.asset
    },
     }`
      )
      .then((res) => {
        console.log(res);
        if (res.length !== 0) setAboutData(res[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(aboutData);
  return {
    carouselImages,
    aboutData,
  };
};
