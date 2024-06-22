import Image from "next/image";
import React from "react";

const ArchitecturalJourney = () => {
  return (
    <div className="custom-container py-20 flex architecture-journey">
      <div className="flex-1 py-10">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-8 font-bold">
          Our Architectural{" "}
          <span className="text-[#E03300]">
            {" "}
            <br /> Journey
          </span>
        </h2>
        <p className="w-full lg:w-[80%]">
          At #Goformeet, our journey began with a vision to revolutionize
          professional networking by ensuring reliable and seamless meeting
          experiences. Over the years, we&apos;ve evolved through innovation, user
          feedback, and a commitment to excellence. Our platform is built on
          cutting-edge technology, ensuring security, efficiency, and ease of
          use for all users.
        </p>
      </div>
      <div>
        <Image
          alt="Architectural journey"
          src="/assets/images/architectureJounrey.png"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default ArchitecturalJourney;
