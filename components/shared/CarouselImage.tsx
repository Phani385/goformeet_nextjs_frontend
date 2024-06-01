import Image from "next/image";
import React from "react";

const CarouselImage = () => {
  return (
    <div className="carousel-image-container">
      <Image src="/assets/icons/like.svg" alt="like" width={36} height={36} className="like-icon" />
      <Image
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/connectionapp-8dc63.appspot.com/o/HostImages%2F7080921608%2F1709798785435986?alt=media&token=98b13071-2637-499e-bce9-e2049007be26"
        width={300}
        height={600}
        className="host-image"
      />
    </div>
  );
};

export default CarouselImage;
