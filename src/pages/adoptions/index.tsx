import React from "react";
import Image from "next/image";

export default function Adoptions() {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <div className="text-[7vw] text-[#3A3A3A]/[0.8] tracking-widest font-light">
        網頁施工中...
      </div>
      <div className="relative w-[50vw] h-[30vw]">
        <Image
          src="/images/in_progress.jpg"
          alt="施工中"
          fill
          sizes=""
          className="object-contain"
        />
      </div>
    </div>
  );
}
