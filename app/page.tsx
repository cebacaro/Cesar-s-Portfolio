"use client";
import React, { useState } from "react";
import HeroMusic from "@/public/PHOTOS/HeroMusic.jpg";
import WY from "@/public/PHOTOS/WY.png";
import HeroDev from "@/public/GIIGS/HeroDev.jpg";
import PhotographyGallery from "@/components/PhotographyGallery";

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setExpandedSection(section);
  };

  const handleGoBackClick = () => {
    setExpandedSection(null);
  };

  const handleMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  if (expandedSection) {
    return (
      <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-black">
        {expandedSection === "gallery" && <PhotographyGallery />}
        {expandedSection === "music" && (
          <div className="text-white text-4xl">
            Musician Portfolio (Coming Soon)
          </div>
        )}
        {expandedSection === "dev" && (
          <div className="text-white text-4xl">
            Developer Portfolio (Coming Soon)
          </div>
        )}
        <button
          onClick={handleGoBackClick}
          className="items-baseline text-white text-2xl mb-8 mt-8"
        >
          GO BACK
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen flex gap-4">
      <h1 className="text-white text-9xl absolute  top-32 justify-center w-screen items-center text-center">
        CESAR BACARO
      </h1>
      <div
        onClick={() => handleSectionClick("music")}
        onMouseEnter={() => handleMouseEnter("music")}
        onMouseLeave={handleMouseLeave}
        className={`${
          hoveredSection === "music"
            ? "w-4/5"
            : hoveredSection
            ? "w-1/5"
            : "w-1/3"
        } h-full flex items-center justify-center flex-col transition-all duration-700 ease-in-out cursor-pointer`}
        style={{
          backgroundImage: `url(${HeroMusic.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-4xl text-left w-1/2">THE MUSICIAN</p>
      </div>

      <div
        onClick={() => handleSectionClick("gallery")}
        onMouseEnter={() => handleMouseEnter("gallery")}
        onMouseLeave={handleMouseLeave}
        className={`${
          hoveredSection === "gallery"
            ? "w-4/5"
            : hoveredSection
            ? "w-1/5"
            : "w-1/3"
        } h-full flex items-center justify-center bg-black transition-all duration-700 ease-in-out cursor-pointer`}
        style={{
          backgroundImage: `url(${WY.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-4xl">THE ARTIST</h2>
      </div>

      <div
        onClick={() => handleSectionClick("dev")}
        onMouseEnter={() => handleMouseEnter("dev")}
        onMouseLeave={handleMouseLeave}
        className={`${
          hoveredSection === "dev"
            ? "w-4/5"
            : hoveredSection
            ? "w-1/5"
            : "w-1/3"
        } h-full flex items-center justify-center bg-black transition-all duration-700 ease-in-out cursor-pointer`}
        style={{
          backgroundImage: `url(${HeroDev.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-4xl">THE DEVELOPER</h2>
      </div>
    </div>
  );
}
