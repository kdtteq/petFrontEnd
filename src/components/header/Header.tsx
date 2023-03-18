import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="w-[100vw] h-[15vh] flex items-center justify-center">
      <div className="w-[80vw] flex justify-between items-center">
        <div className="w-[62.5vw]">
          <Link href="/">
            <h1 className="cursor-pointer text-[#3A3A3A] text-[3vw]">
              PetHelper
            </h1>
          </Link>
        </div>

        <div className="flex justify-between flex-grow">
          <button className="text-[#3A3A3A] text-[1.5vw] truncate flex-grow">
            登入
          </button>
          <button className=" text-[#3A3A3A] text-[1.5vw] truncate flex-grow">
            註冊
          </button>
        </div>
      </div>
    </nav>
  );
}
