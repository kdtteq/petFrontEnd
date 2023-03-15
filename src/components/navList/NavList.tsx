import React from "react";
import { NavListProps } from "@/types/navBarType";
import styles from "../../../public/css/navBar.module.css";
import Link from "next/link";

export default function NavList({ btnName, listOptions }: NavListProps) {
  return (
    <li className={`cursor-pointer w-full ${styles.navBar} text-[22px]`}>
      <div className={`pl-5 h-full leading-[65px] bg-[#5DAC81] ${styles.btn}`}>
        {btnName}
      </div>
      <div
        className={`bg-[#A8D8B9] text-[#5DAC81] h-0 overflow-hidden  ${styles.navList}`}
      >
        {listOptions &&
          listOptions.map((data, index) => {
            return (
              <div key={index} className={`px-5 mt-[10px] ${styles.link}`}>
                <div>
                  <Link href={`${data.link}/rescue`}>{data.title}</Link>
                </div>
              </div>
            );
          })}
      </div>
    </li>
  );
}
