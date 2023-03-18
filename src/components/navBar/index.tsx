import React from "react";
import NavList from "../navList/NavList";
const navBarData = [
  {
    btnName: "地圖",
    listOptions: [{ title: "及時救援地圖", link: "/map" }],
  },
  {
    btnName: "貓貓救援",
    listOptions: [
      { title: "回報-救援資訊", link: "/cat/rescue" },
      { title: "查看-救援資訊", link: "/cat/info" },
    ],
  },
  {
    btnName: "狗狗救援",
    listOptions: [
      { title: "回報-救援資訊", link: "/dog/rescue" },
      { title: "查看-救援資訊", link: "/dog/info" },
    ],
  },
  {
    btnName: "其他動物救援",
    listOptions: [
      { title: "回報-救援資訊", link: "/others/rescue" },
      { title: "查看-救援資訊", link: "/others/info" },
    ],
  },
  {
    btnName: "領養資訊",
    listOptions: [
      { title: "機構-領養資訊", link: "/adoptions/org" },
      { title: "民眾-領養資訊", link: "/adoptions/people" },
    ],
  },
];
export default function NavBar() {
  return (
    <nav className="w-[100vw] flex justify-center items-center bg-[#5DAC81] text-white">
      <ul className="w-[80vw] h-[65px] flex justify-between items-center">
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
