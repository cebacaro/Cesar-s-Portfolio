"use client";

import React, { useState, useEffect } from "react";
import HeroMusic from "@/public/PHOTOS/HeroMusic.jpg";
import WY from "@/public/PHOTOS/WY.png";
import HeroDev from "@/public/GIIGS/HeroDev.jpg";
import PhotographyGallery from "@/components/PhotographyGallery";
import Image from "next/image";

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    music: false,
    gallery: false,
    dev: false,
  });
  const [showName, setShowName] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);

  // Delayed animations for each section
  useEffect(() => {
    const timers = [
      setTimeout(() => setNameVisible(true), 200),
      setTimeout(
        () => setVisibleSections((prev) => ({ ...prev, music: true })),
        2000
      ),
      setTimeout(
        () => setVisibleSections((prev) => ({ ...prev, gallery: true })),
        4000
      ),
      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, dev: true }));
        setShowName(false);
      }, 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

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
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
        <button
          onClick={handleGoBackClick}
          className="text-gray-800 text-2xl mt-8"
        >
          GO BACK
        </button>
        {expandedSection === "gallery" && <PhotographyGallery />}
        {expandedSection === "music" && (
          <div className="text-gray-800 text-4xl">
            Musician Portfolio (Coming Soon)
          </div>
        )}
        {expandedSection === "dev" && (
          <div className="text-gray-800 text-4xl">
            Developer Portfolio (Coming Soon)
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black flex flex-col sm:flex-row">
      {/* Name Display */}
      {showName && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`text-white text-9xl  transform transition-opacity duration-4000 font-amithen-extra m-8 ${
              nameVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            CESAR
          </h1>
          <h1
            className={`text-white text-9xl tracking-widest transform transition-opacity duration-4000 font-amithen-extra m-8 ${
              nameVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            BACARO
          </h1>
        </div>
      )}

      {/* Sections */}
      <div className="flex flex-col sm:flex-row w-full h-full">
        {/* Music Section */}
        <div
          onClick={() => handleSectionClick("music")}
          onMouseEnter={() => handleMouseEnter("music")}
          onMouseLeave={handleMouseLeave}
          className={`${
            hoveredSection === "music"
              ? "w-full sm:w-4/5"
              : hoveredSection
              ? "w-full sm:w-1/5"
              : "w-full sm:w-1/3"
          } h-full flex items-center justify-center flex-col transition-all duration-700 ease-in-out cursor-pointer transform ${
            visibleSections.music
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
        >
          <Image
            src={HeroMusic}
            alt="HeroMusic"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <p className="text-white text-4xl z-40">The Musician</p>
        </div>

        {/* Photography Gallery Section */}
        <div
          onClick={() => handleSectionClick("gallery")}
          onMouseEnter={() => handleMouseEnter("gallery")}
          onMouseLeave={handleMouseLeave}
          className={`${
            hoveredSection === "gallery"
              ? "w-full sm:w-4/5"
              : hoveredSection
              ? "w-full sm:w-1/5"
              : "w-full sm:w-1/3"
          } h-full flex items-center justify-center transition-all duration-700 ease-in-out cursor-pointer transform ${
            visibleSections.gallery
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
        >
          <Image
            src={WY}
            alt="WY"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <p className="text-white text-4xl z-40">The Artist</p>
        </div>

        {/* Developer Section */}
        <div
          onClick={() => handleSectionClick("dev")}
          onMouseEnter={() => handleMouseEnter("dev")}
          onMouseLeave={handleMouseLeave}
          className={`${
            hoveredSection === "dev"
              ? "w-full sm:w-4/5"
              : hoveredSection
              ? "w-full sm:w-1/5"
              : "w-full sm:w-1/3"
          } h-full flex items-center justify-center transition-all duration-700 ease-in-out cursor-pointer transform ${
            visibleSections.dev
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
        >
          <Image
            src={HeroDev}
            alt="HeroDev"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <p className="text-white text-4xl z-40">The Developer</p>
        </div>
      </div>
    </div>
  );
}
