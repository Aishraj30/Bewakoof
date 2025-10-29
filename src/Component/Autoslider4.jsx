// AutoSlider.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'motion/react-client';

// 10 sample image URLs from Picsum (you can replace these)
const images = [
  'https://images.bewakoof.com/uploads/grid/app/1x1-pjs-women-1749214576.jpg',
  'https://images.bewakoof.com/uploads/grid/app/HC2-1x1-Shorts-1749398728.jpg',
 
];

const AutoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
   
<div>
     <div className="w-[25vw] flex justify-center items-center bg-black ">
      <div className="relative w-[25vw] h-[580px] overflow-hidden rounded-xl shadow-xl">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Image ${index}`}
            className="absolute w-full h-full object-cover"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
    </div>
    
</div>

  );
};

export default AutoSlider;
