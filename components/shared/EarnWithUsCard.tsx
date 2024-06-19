import Image from "next/image";
import React from "react";

const EarnWithUsCard = ({ className }: { className: string }) => {
  return (
    <div className={`bg-[#FCEBE6] p-10 w-1/2 rounded-md ${className}`}>
      <div>
        <Image
          src="/assets/icons/creatorEarnings.svg"
          alt="Card Icon"
          width={56}
          height={56}
        />
      </div>
    </div>
  );
};

export default EarnWithUsCard;
