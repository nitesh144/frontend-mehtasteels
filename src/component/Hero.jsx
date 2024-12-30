// import React from 'react';
// import sir from '../images/Hero.jpg';

// const HeroSection = () => {
//   return (
//     <div className="container relative overflow-hidden ">
//         <div className="relative group">
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           <img
//             src={sir}
//             alt="Memorial Portrait"
//             className="w-full max-h-[600px] object-cover shadow-xl transform"
//           />
//           <div className="absolute inset-0 bg-gray-800 opacity-80 z-10"></div>
//           {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div> */}
//         </div>
//         <div className='bg-white'>
          

//         </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MSPlates from '../images/mild-steel-plate-for-bridge.jpg';
import MSChannel from '../images/mild-steel-sheet.jpg';
import HRCoil from '../images/steel-channel.jpg';
import MSAngle from '../images/steel-plate-cutting.jpg';
import Rail from '../images/structural-steel-for-plant.jpg';
import Rail1 from '../images/mild-steel-angle.jpg';
import Rail2 from '../images/mild-steel-moulding.jpg';

const ProductSlider = () => {
  const images = [
    { id: 2, src: MSPlates, alt: 'Mild Steel used for bridge construction' },
    { id: 3, src: MSChannel, alt: 'Mild Steel sheet for construction' },
    { id: 4, src: HRCoil, alt: 'Hot Rolled Coil' },
    { id: 5, src: MSAngle, alt: 'Mild Steel Angle' },
    { id: 7, src: Rail, alt: 'Mild Steel for Plant Construction' },
    { id: 8, src: Rail1, alt: 'Mild steel Angle for Industry ' },
    { id: 9, src: Rail2, alt: 'Mild Steel Moulding' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full mx-auto mt-3">
      {/* Main slider container */}
      <div
        className="relative h-[600px] overflow-hidden shadow-xl"
        aria-live="polite"
      >
        {/* Image container with transition */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-full h-full flex-shrink-0 relative ${
                currentIndex === index ? '' : 'aria-hidden'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Image name overlay */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-2xl mb-2 font-proxima font-bold px-3 py-1 rounded-lg shadow-lg">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-lg transition-all duration-200"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
