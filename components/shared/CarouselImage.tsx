"use client"

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";



const CarouselImage = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);


  const prev = () =>
    setCurrentImage((curr) => (curr === 0 ? images.length - 1 : curr - 1))
  const next = () =>
    setCurrentImage((curr) => (curr === images.length - 1 ? 0 : curr + 1))


  return (
    <div className="carousel-image-container">
      <div className="flex transition-transform ease-out duration-500"
        >
        <Image
          src={images[currentImage]}
          alt="carousel image"
          width={400}
          height={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute inset-0 flex top-60 items-center justify-center gap-4 p-4">
        <button
          className="p-1 rounded-full shadow bg-[#FCEBE650] text-white hover:bg-[#FCEBE6] hover:text-black"
          onClick={prev}
        >
          <FaAngleLeft size={20} />
        </button>
        <button
          className="p-1 rounded-full shadow bg-[#FCEBE650] text-white hover:bg-[#FCEBE6] hover:text-black"
          onClick={next}
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CarouselImage;
