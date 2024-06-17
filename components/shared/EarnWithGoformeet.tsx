import Image from "next/image";
import React from "react";

const EarnWithGoformeet = () => {
  return (
    <div className="bg-[#A92600] py-20 mb-10 custom-container">
      <h2 className="text-4xl mb-3 font-semibold text-[#F6BFB0]">
        Earn with <br />
        <span className="text-white">#Goformeet</span>
      </h2>
      <p className="text-white w-1/3 font-light mb-10">
        At #Goformeet, our journey began with a vision to revolutionize
        professional networking by ensuring reliable and seamless meeting
        experiences.
      </p>
      <Image src="/assets/images/earnWithUsLeftArt.svg" alt="Left Art" width={250} height={100}/>
    </div>
  );
};

export default EarnWithGoformeet;
