import React, { useEffect, useRef } from 'react';

const images = [
   'https://images.bewakoof.com/uploads/grid/app/1x1-june-oof-jogger-common-3jun--1--1748936058.jpg',
  'https://images.bewakoof.com/uploads/grid/app/BUY-3-CFT-1X1-COMMON-HC-BANNER--2--1749393561.jpg',
   'https://images.bewakoof.com/uploads/grid/app/Denim-Verse-Jun6-1x1-HC-common-1749393562.jpg',
  'https://images.bewakoof.com/uploads/grid/app/OOF-pants-Jun6-1x1-HC-commmon-1749393748.jpg',
  'https://images.bewakoof.com/uploads/grid/app/1x1-pjs-women-1749214576.jpg',
  'https://images.bewakoof.com/uploads/grid/app/HC2-1x1-Shorts-1749398728.jpg',
   'https://images.bewakoof.com/uploads/grid/app/BUY-2-OS-1X1-Common-HC-BANNER-1749393562.jpg',
  'https://images.bewakoof.com/uploads/grid/app/1x1-PartyAnimal-aimodel-01-1749393746.jpg'

  
];

const ImageSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollAmount += scrollContainer.offsetWidth / 4; // scroll width for 4 images
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.offsetWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    const interval = setInterval(scrollImages, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar transition-all duration-700"
      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            className=" h-[350px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
