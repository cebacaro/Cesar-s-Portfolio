import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react"; // Import NextUI components
import HeroMusic from "@/public/PHOTOS/HeroMusic.jpg";
import HeroDev from "@/public/GIIGS/HeroDev.jpg";
import WY from "@/public/PHOTOS/WY.png";

const photos = [HeroMusic, HeroDev, WY, HeroMusic, HeroMusic, HeroMusic];

const PhotographyGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 bg-white text-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full h-full ">
      {photos.map((photo, index) => (
        <Card key={index} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Photo {index + 1}</p>
            <small className="text-default-500">Randomized Size</small>
          </CardHeader>
          <CardBody
            className="overflow-hidden"
            style={{ height: "full", width: "full" }}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              className="rounded-lg h-full w-full"
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PhotographyGallery;
