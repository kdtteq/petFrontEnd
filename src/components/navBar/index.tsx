import React from "react";
import NavList from "../navList/NavList";
const navBarData = [
  {
    btnName: "地圖",
    listOptions: ["及時救援地圖"],
  },
  {
    btnName: "貓貓救援",
    listOptions: ["回報緊急救援資訊", "查看所需救援資訊"],
  },
  {
    btnName: "狗狗救援",
    listOptions: ["回報緊急救援資訊", "查看所需救援資訊"],
  },
  {
    btnName: "其他動物救援",
    listOptions: ["回報緊急救援資訊", "查看所需救援資訊"],
  },
  {
    btnName: "領養資訊",
    listOptions: ["回報緊急救援資訊", "查看所需救援資訊"],
  },
];
export default function NavBar() {
  return (
    <nav className="w-full flex justify-center items-center bg-[#5DAC81] text-white">
      <ul className="relative w-[80%] h-[65px] flex justify-between items-center text-[24px] font-medium tracking-widest">
        {navBarData.map((data) => {
          return (
            <NavList btnName={data.btnName} listOptions={data.listOptions} />
          );
        })}
      </ul>
    </nav>
  );
}
