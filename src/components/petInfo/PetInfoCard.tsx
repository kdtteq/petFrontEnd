import React, { useEffect, useState } from "react";
import { PetInfoState } from "@/types/petInfoType";
import Image from "next/image";
import { computeTime } from "@/utils/computeTime";
import PetInfoDetail from "../petInfoDetail";

export default function PetInfoCard({ petInfo }: { petInfo: PetInfoState }) {
  const [timeDiff, setTimeDiff] = useState<string>("");
  const now = new Date();
  const targetDate = new Date(`${petInfo.createdAt}`);
  useEffect(() => {
    setTimeDiff(computeTime(now, targetDate));
  }, []);
  const petInfoDetailData = [
    { petInfo: petInfo.color, alt: "顏色Icon", src: "icon_coat_color.png" },
    { petInfo: petInfo.size, alt: "體型icon", src: "paw_black.png" },
    { petInfo: timeDiff, alt: "時間Icon", src: "time.png" },
    {
      petInfo: petInfo.shelter_location,
      alt: "地點Icon",
      src: "icon_position.png",
    },
  ];
  return (
    <div className="w-[32vw] h-[16vw] relative text-[1vw]">
      <div className="flex shadow-[12px_12px_20px_-15px_rgba(0,0,0,0.3)] rounded-tr-[5.56vw] text-[#3A3A3A]/[0.8] bg-[#F5F5F5] w-[30vw] ">
        {/* 照片資訊 */}
        <div>
          {petInfo.image_url && (
            <div className="relative w-[15vw] h-[15vw]">
              <Image
                src={petInfo.image_url}
                alt="照片資訊"
                fill
                sizes="20vw"
                priority={true}
                className="object-cover"
              />
            </div>
          )}
        </div>
        {/* 動物資訊 */}
        <div className="h-[15vw] flex-grow rounded-tr-[80px] ">
          <div className="ml-[2.78vw] mt-[1.39vw] flex justify-center items-center border w-[5vw] h-[2.78vw] rounded-[20px] bg-[#5DAC81]/[0.7]">
            <span className=" text-white truncate">{`${petInfo.animal_type}`}</span>
          </div>
          <div className="w-[10.5vw] ml-[2.78vw] h-[9vw] overflow-hidden">
            {petInfoDetailData.map((data, index) => {
              return (
                <div key={index} className="mt-[0.63vw]">
                  <PetInfoDetail
                    petInfo={data.petInfo}
                    src={data.src}
                    alt={data.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 拯救按鈕 */}
      <div className="cursor-pointer  border h-[2.78vw] w-[8.33vw] rounded-[20px] flex justify-center items-center text-white bg-[#5DAC81] absolute bottom-0 right-0 overflow-hidden">
        <div className="truncate">救救他</div>
        <div className="relative w-[10%] h-[50%] ml-[0.5vw]">
          <Image
            src="/images/info/arrow_white.png"
            alt="白色箭頭"
            fill
            sizes=""
            priority={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
