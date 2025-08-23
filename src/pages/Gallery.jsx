import React, { useState } from 'react';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';

const TypographyBlockquote = () => {
  return (
    <blockquote className="text-[#000080] mt-6 italic text-sm border-l-4 border-gray-300 pl-4">
      "A gallery originally meant a covered passage or corridor, but by the 16th century it came to
      describe a space where artworks were displayed, and later, the collection itself. With the invention
      of photography in the 19th century, photographs began to be exhibited in art galleries alongside
      paintings. Over time, the term photo gallery emerged to describe a curated collection of photographs,
      whether in physical spaces or, more recently, in digital form on websites and apps. This natural
      extension of the word reflects how galleries have always been places for visual display and public viewing."
    </blockquote>
  );
};

const GalleryPage = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const images = [
    { src: image1, title: "Farewell 2025 , red brick wall shoot ", 
        description: "Credits : Ishaan Grover , was so hesitant on my open button shirt picture , made me look like jaat , yeah too belonged there" },
    { src: image2, title: "Golden Hour", description: "When light meets emotion" },
    { src: image3, title: "Serene View", description: "Nature's peaceful embrace" },
    { src: image4, title: "Joyful Connection", description: "Happiness shared together" },
    { src: image5, title: "Timeless Beauty", description: "Memories that last forever" },
    { src: image6, title: "Perfect Harmony", description: "When everything aligns" }
  ];

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="p-10 text-3xl">
      <span className="font-bold text-[#000080]">Gallery (noun), Latin 'galilea'</span>

      <TypographyBlockquote />

      <div className="columns-3 gap-2 space-y-2 mt-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid shadow-md hover:shadow-lg transition-shadow mb-2 cursor-pointer"
            onClick={() => handleCardClick(index)}
          >
            <div className="relative w-full preserve-3d transition-transform duration-700 ease-in-out"
                 style={{
                   transformStyle: 'preserve-3d',
                   transform: flippedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}>
              
              <div className="w-full backface-hidden"
                   style={{ backfaceVisibility: 'hidden' }}>
                <img
                  src={img.src}
                  alt={`my photo ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              <div className="bg-[#000080] text-white absolute inset-0 backface-hidden flex flex-col p-6 "
                   style={{ 
                     backfaceVisibility: 'hidden',
                     transform: 'rotateY(180deg)'
                   }}>
                <h3 className="text-white text-lg font-bold mb-3">
                  {img.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {img.description}
                </p>
                <div className="mt-4 text-xs text-white">
                  Click to flip back
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;