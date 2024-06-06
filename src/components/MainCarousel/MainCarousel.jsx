import { useEffect, useState } from 'react';

import phone1 from '../../assets/LG.png'; 
import phone2 from '../../assets/apple.png'; 
import phone3 from '../../assets/dell.png'; 
import phone4 from '../../assets/itel.png'; 
import phone5 from '../../assets/jbl.png'; 
import phone6 from '../../assets/Noice.png'; 
import phone7 from '../../assets/vivo.png'; 

const slides = [
  { image: phone1 },
  { image: phone2 },
  { image: phone3 },
  { image: phone4 },
  { image: phone5 },
  { image: phone6 },
  { image: phone7 },
];

function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gray-100 border border-gray-700 flex items-center justify-center z-10 shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center justify-center text-center  bg-white bg-opacity-80 rounded-lg shadow-lg">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full max-w-xs  object-contain" />
          </div>
        </div>
      ))}
      <div className="absolute bottom-3 flex justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainCarousel;
