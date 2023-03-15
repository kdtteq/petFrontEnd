import React from "react";
import NavList from "../navList/NavList";
const navBarData = [
  {
    btnName: "地圖",
    listOptions: [{ title: "及時救援地圖", link: "" }],
  },
  {
    btnName: "貓貓救援",
    listOptions: [
      { title: "回報緊急救援資訊", link: "/cat" },
      { title: "查看所需救援資訊", link: "" },
    ],
  },
  {
    btnName: "狗狗救援",
    listOptions: [
      { title: "回報緊急救援資訊", link: "/dog" },
      { title: "查看所需救援資訊", link: "" },
    ],
  },
  {
    btnName: "其他動物救援",
    listOptions: [
      { title: "回報緊急救援資訊", link: "/others" },
      { title: "查看所需救援資訊", link: "" },
    ],
  },
  {
    btnName: "領養資訊",
    listOptions: [
      { title: "回報緊急救援資訊", link: "" },
      { title: "查看所需救援資訊", link: "" },
    ],
  },
];
export default function NavBar() {
  return (
    <nav className="w-full flex justify-center items-center bg-[#5DAC81] text-white">
      <ul className="relative w-[80%] h-[65px] flex justify-between items-center text-[24px] font-medium tracking-widest">
        {navBarData.map((data, index) => {
          return (
            <NavList
              key={index}
              btnName={data.btnName}
              listOptions={data.listOptions}
            />
          );
        })}
      </ul>
    </nav>
  );
}
