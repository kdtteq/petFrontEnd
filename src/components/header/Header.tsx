import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="w-full h-[100px] flex items-center justify-center">
      <div className="w-[80%] text-4xl flex justify-between items-center">
        <Link href="/">
          <h1 className="cursor-pointer text-[#3A3A3A]">PetHelper</h1>
        </Link>
        <div className="w-[10%] text-xl flex justify-between">
          <button className="text-[#3A3A3A]">登入</button>
          <button className="text-[#3A3A3A]">註冊</button>
        </div>
      </div>
    </nav>
  );
}
