import { useState, useEffect } from 'react';
import sanityClient from '../client';

export const useStateContext = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "carouselImages"]{
            "imagesArray": imagesArray[]->{
              _id,
              title,
              description,
              "image": image.asset->url
            }
          }`
      )
      .then((res) => {
        console.log(res);
        if (res.length !== 0 && res[0].imagesArray.length !== 0)
          setCarouselImages(res[0].imagesArray);
      })
      .catch((err) => console.log(err));
  }, []);
  return {
    carouselImages,
  };
};
