import React from 'react';
import images from '../data/gallery.json';

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

const CLOUDINARY_TRANSFORM = 'f_auto,q_auto,w_800';

const TypographyBlockquote = () => {
  return (
    <blockquote className="text-[#000080] mt-6 italic text-sm border-l-4 border-gray-300 pl-4">
      "A gallery originally meant a covered passage or corridor, but by the 16th century it came to
      describe a space where artworks were displayed, and later, the collection itself. With the invention
      of photography in the 19th century, photographs began to be exhibited in art galleries alongside
      paintings. Over time, the term photo gallery emerged to describe a curated collection of photographs,
      whether in physical spaces or, more recently, in digital form on websites and apps."
    </blockquote>
  );
};

const GalleryPage = () => {
  return (
    <div className="p-10 text-3xl">
      <span className="font-bold text-[#000080]">
        Gallery (noun), Latin 'galilea'
      </span>

      <TypographyBlockquote />

      <div className="columns-3 gap-2 space-y-2 mt-10">
        {images.map((publicId, index) => {
          const imageUrl = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_TRANSFORM}/${publicId}`;

          return (
            <div
              key={publicId}
              className="break-inside-avoid shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={imageUrl}
                alt={`gallery photo ${index + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
