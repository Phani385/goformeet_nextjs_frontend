import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import DownloadAppModal from "./DownloadAppModal";

const LandingProfileCard = ({
  details,
}: {
  details: {
    image: string;
    name: string;
    username: string;
    description: string;
    location: string;
  };
}) => {
  return (
    <div className="profile-card relative">
      <div className="absolute top-[-50px] flex justify-center w-full rounded-md">
        <Image
          src={details.image}
          alt="Profile Image"
          width={150}
          height={150}
          className="rounded-md lg:w-[120px] lg:h-[150px] xl:w-[150px] xl:h-[150px] w-[150px] h-[150px]"
        />
      </div>
      <div className="mt-12 rounded-md text-center">
        <h4 className="text-2xl font-semibold text-[#F5BFB0]">
          {details.name}
        </h4>
        <p className="text-[#F5BFB0] mb-4">
          {details.username},{details.location}
        </p>
        <p className="text-[#F5BFB0] mb-8 text-ellipsis line-clamp-2">
          {details.description}
        </p>
        <DownloadAppModal>
          <Button className="secondary-button gap-2 items-center w-full">
            Book Meeting
            <Image
              alt="Right Arrow"
              src="/assets/icons/rightArrow.svg"
              width={16}
              height={16}
            />
          </Button>
        </DownloadAppModal>
      </div>
    </div>
  );
};

export default LandingProfileCard;
