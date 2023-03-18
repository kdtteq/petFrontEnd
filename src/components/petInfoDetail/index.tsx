import React from "react";
import Image from "next/image";

interface PetInfoProps {
  alt: string;
  src: string;
  petInfo: string;
}

export default function PetInfoDetail({ petInfo, alt, src }: PetInfoProps) {
  return (
    <div className="flex items-center ">
      <div className="w-full flex items-center">
        <div className="relative w-[1.39vw] h-[1.39vw]">
          <Image
            src={`/images/info/${src}`}
            alt={`${alt}`}
            priority={false}
            fill
            sizes="1vw"
            className="object-cover"
          />
        </div>

        <span className="ml-[0.7vw] truncate text-[1vw]">{`${petInfo}`}</span>
      </div>
    </div>
  );
}
