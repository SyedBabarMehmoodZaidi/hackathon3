import Image from 'next/image';
import React from 'react';
import HeroImg from '/public/Images/HeroImg.jpg';

const Hero = () => {
  return (
    <div className="relative">
      <Image src={HeroImg} alt="Heroimage" width={1440} height={716} className="w-full h-auto"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center md:w-[599px] md:left-[140px] md:top-[260px] md:transform-none md:-translate-x-0 md:-translate-y-0 gap-4">
        <p className="font-bold text-[12px] md:text-[16px] text-white">SUMMER 2020</p>
        <h1 className="font-bold text-[32px] md:text-[58px] text-white">NEW COLLECTION</h1>
        <p className="font-normal text-[14px] md:text-[20px] text-white">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-[#2DC071] hover:bg-green-700 w-[180px] md:w-[221px] h-[50px] md:h-[62px] text-white rounded-[5px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;