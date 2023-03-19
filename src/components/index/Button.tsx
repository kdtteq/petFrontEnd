import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ButtonProps } from "@/types/indexButtonType";

export default function Button({ link, image, content, alt }: ButtonProps) {
  return (
    <div className="w-[12vw] h-[12vw] overflow-hidden flex justify-center items-center rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
      <div>
        <Link href={`${link}`}>
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[7vw] h-[7vw]">
              <Image
                src={`/images/index/test/${image}`}
                alt={`${alt}`}
                fill
                sizes=""
                priority={true}
              />
            </div>
            <div className="mt-[0.7vw] text-[#5DAC81] font-semibold text-[1.6vw] tracking-widest truncate">
              {`${content}`}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
