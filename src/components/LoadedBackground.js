import { useState, useEffect } from 'react';

const LoadedBackground = ({
  src,
  thumbnail,
  classes,
  inlineStyling,
  dark,
  children,
}) => {
  const [sourceLoaded, setSourceLoaded] = useState(thumbnail);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src, thumbnail]);

  return (
    <div
      className={classes}
      style={{
        ...inlineStyling,
        backgroundImage: dark
          ? `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5) ),url(${sourceLoaded})`
          : `url(${sourceLoaded})`,
      }}
    >
      {children}
    </div>
  );
};
export default LoadedBackground;
