import { useState, useEffect } from 'react';

const useLoadedImage = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
export default useLoadedImage;
