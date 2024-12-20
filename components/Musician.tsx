import React, { useState, useEffect } from "react";
import Image from "next/image";
import MusicianImg from "../public/PHOTOS/BruceTips2-43.jpg";
import SpotifyPlayer from "./SpotifyPlayer";

const Musician = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Example: Fetch token from an API or authentication service
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/getSpotifyToken");
        const data = await response.json();
        setToken(data.token); // Assuming the response has a `token` property
      } catch (error) {
        console.error("Error fetching Spotify token:", error);
      }
    };

    fetchToken();
  }, []);
  return (
    <>
      {/* Image and Description Section */}
      <div className="flex w-[80%] h-[70%] bg-gray-100 shadow-slate-600 shadow-lg">
        {/* Left Section: Image */}
        <div className="w-3/4">
          <Image
            src={MusicianImg}
            alt="Musician"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-1/4 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold text-black mb-4">Musician</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;ve been playing guitar for over 10 years. I&apos;ve played in
            a few bands and have performed at various venues in the NYC area.
            I&apos;m currently working on a solo project and hope to release
            some music soon.
          </p>
        </div>
      </div>

      {/* Spotify Album Section */}
      <SpotifyPlayer token={token} />
    </>
  );
};

export default Musician;
