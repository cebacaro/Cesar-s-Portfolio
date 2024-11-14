// components/PhotographyGallery.tsx
import React from "react";
import Image from "next/image";
import HeroMusic from "@/public/PHOTOS/HeroMusic.jpg";

const photos = [HeroMusic];

const PhotographyGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 w-full h-full max-w-screen-lg">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative w-full h-48 overflow-hidden rounded-lg"
        >
          <Image
            src={photo}
            alt={`Photo ${index + 1}`}
            height={400}
            width={400}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotographyGallery;
