import React, { useState, useEffect, useRef } from 'react';
import styles from './MotionlessCarousel.module.css';

const MotionlessCarousel = ({photos, interval}) => {
  const images = photos
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const container = sliderContainerRef.current;
    const img = container.querySelector('img');
    if (img) {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      container.style.paddingBottom = `${(1 / aspectRatio) * 100}%`;
    }
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer} ref={sliderContainerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className={`${styles.image} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MotionlessCarousel;