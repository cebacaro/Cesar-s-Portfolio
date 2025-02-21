import Image from "next/image";
import img1 from "../public/images/1.jpeg";
import img2 from "../public/images/2.jpeg";
import img3 from "../public/images/3.jpeg";
import img4 from "../public/images/4.jpeg";
import img5 from "../public/images/5.jpeg";
import img6 from "../public/images/6.jpeg";
import img7 from "../public/images/7.jpeg";
import img8 from "../public/images/8.jpeg";
import img9 from "../public/images/9.jpeg";
import img10 from "../public/images/10.jpeg";
import img11 from "../public/images/11.jpeg";

const images = [
  {
    src: img1,
    width: 300,
    height: 300,
  },
  {
    src: img2,
    width: 300,
    height: 300,
  },
  {
    src: img3,
    width: 300,
    height: 300,
  },
  {
    src: img4,
    width: 300,
    height: 300,
  },
  {
    src: img5,
    width: 300,
    height: 300,
  },
  {
    src: img6,
    width: 300,
    height: 300,
  },
  {
    src: img7,
    width: 300,
    height: 300,
  },
  {
    src: img8,
    width: 300,
    height: 300,
  },
  {
    src: img9,
    width: 300,
    height: 300,
  },
  {
    src: img10,
    width: 300,
    height: 300,
  },
  {
    src: img11,
    width: 300,
    height: 300,
  },
];

export default function PhotographyGallery() {
  return (
    <>
      <h1 className="">Photography Gallery</h1>
      <div className="grid grid-cols-3 gap-4 w-screen h-screen overflow-auto bg-black">
        {images.map((image, idx) => (
          <div key={idx} className="relative w-full h-full m-8 ">
            <Image
              src={image.src}
              alt="Gallery Image"
              className="justify-center object-cover"
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </>
  );
}
