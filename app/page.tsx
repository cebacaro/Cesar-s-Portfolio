"use client";
import React, { useState, useEffect } from "react";
import HeroMusic from "@/public/PHOTOS/HeroMusic.jpg";
import WY from "@/public/PHOTOS/WY.png";
import HeroDev from "@/public/GIIGS/HeroDev.jpg";
import PhotographyGallery from "@/components/PhotographyGallery";

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
      setTimeout(() => setNameVisible(true), 500),
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
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center">
      {/* Name Display */}
      {showName && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`text-white text-9xl transform transition-all duration-1000 ${
              nameVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            CESAR BACARO
          </h1>
        </div>
      )}

      {/* Sections */}
      <div className="w-full h-screen flex">
        {/* Music Section */}
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
          } h-full flex items-center justify-center flex-col transition-all duration-700 ease-in-out cursor-pointer transform ${
            visibleSections.music
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
          style={{
            backgroundImage: `url(${HeroMusic.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white text-4xl">WEB DEVELOPER</p>
        </div>

        {/* Photography Gallery Section */}
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
          } h-full flex items-center justify-center transition-all duration-700 ease-in-out cursor-pointer transform ${
            visibleSections.gallery
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
          style={{
            backgroundImage: `url(${WY.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white text-4xl">Photography Portfolio</h2>
        </div>

        {/* Developer Section */}
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
          } h-full flex items-center justify-center transition-all duration-700 ease-in-out cursor-pointer transform ${
            visibleSections.dev
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
          style={{
            backgroundImage: `url(${HeroDev.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white text-4xl">THE DEVELOPER</h2>
        </div>
      </div>
    </div>
  );
}
