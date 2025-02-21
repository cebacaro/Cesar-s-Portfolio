import React from "react";
import Link from "next/link";
import Image from "next/image";
import g1 from "../public/images/g1.png";
import g2 from "../public/images/g2.png";
import g3 from "../public/images/g3.png";
import g4 from "../public/images/g4.png";
import j1 from "../public/images/j1.png";
import j2 from "../public/images/j2.png";
import j3 from "../public/images/j3.png";

const giigs = [
  { src: g1, width: 150, height: 150 },
  { src: g4, width: 300, height: 300 },
  { src: g2, width: 300, height: 300 },
  { src: g3, width: 300, height: 300 },
];
const LawFirm = [
  { src: j2, width: 300, height: 600 },
  { src: j1, width: 300, height: 600 },
  { src: j3, width: 300, height: 600 },
];

const Developer = () => {
  return (
    <section className="h-full  w-full text-center justify-center items-center bg-black overflow-y-scroll ">
      <Link
        href="https://giigsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="p-8">Visit GiigsApp</button>
      </Link>
      <div className="grid grid-cols-4 gap-4 mx-4 justify-center items-center h-full w-full overflow-hidden">
        {giigs.map((image, idx) => (
          <div key={idx} className="relative w-full h-full">
            <Image
              src={image.src}
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      <Link
        href="https://www.jorgeperezlaw.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="p-8">Visit Jorge Perez Law Firm</button>
      </Link>
      <div className="grid grid-cols-3 gap-4 w-full">
        {LawFirm.map((image, idx) => (
          <div key={idx} className="relative w-full h-80">
            <Image src={image.src} alt="Gallery Image" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developer;
