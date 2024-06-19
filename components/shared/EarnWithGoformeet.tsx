import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import EarnWithUsCard from "./EarnWithUsCard";
import { EarnWithUsCards } from "@/constants";

const EarnWithGoformeet = () => {
  return (
    <div className="bg-[#A92600] py-20 mb-10 lg:flex custom-container">
      <div className="flex-1 mb-5">
        <h2 className="text-4xl mb-3 font-semibold text-[#F6BFB0]">
          Earn with <br />
          <span className="text-white">#Goformeet</span>
        </h2>
        <p className="text-white lg:w-3/5 font-light mb-10">
          At #Goformeet, our journey began with a vision to revolutionize
          professional networking by ensuring reliable and seamless meeting
          experiences.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2 mb-10">
          <Input type="text" placeholder="Mobile number" />
          <Button type="submit">Submit</Button>
        </div>
        <Image
          src="/assets/images/earnWithUsLeftArt.svg"
          alt="Left Art"
          className="w-full lg:w-3/4"
          width={250}
          height={100}
        />
      </div>
      <div className="flex-1">
        <div className="lg:flex gap-4">
          {EarnWithUsCards.map((card) => (
            <EarnWithUsCard key={card.title} content={card} />
          ))}
        </div>
        <Image
          src="/assets/images/earnWithUsRightArt.svg"
          alt="Right Art"
          className="w-full lg:w-3/4 mx-auto mt-10"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
};

export default EarnWithGoformeet;
