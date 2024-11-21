import Image from "next/image";
import MusicianImg from "../public/PHOTOS/BruceTips2-43.jpg";

const Musician = () => {
  return (
    <div className="flex w-[80%] h-[70%] bg-gray-100">
      {/* Left Section: Image */}
      <div className="w-3/4 ">
        <Image
          src={MusicianImg}
          alt="Musician"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-1/4 flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold text-black mb-4">Musician</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I've been playing guitar for over 10 years. I've played in a few bands
          and have performed at various venues in the NYC area. I'm currently
          working on a solo project and hope to release some music soon.
        </p>
      </div>
    </div>
  );
};

export default Musician;
