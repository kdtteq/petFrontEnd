import React, { useEffect } from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import PetInfoCard from "@/components/petInfo/PetInfoCard";
import { useState } from "react";
import { PetInfoArray, PetInfoState } from "@/types/petInfoType";
export default function CatInfo() {
  const [petInfo, setPetInfo] = useState<PetInfoArray>();
  console.log("petInfo", petInfo);
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await fetch("https://pethelp-api.store/animal/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            animal_type: "貓貓",
          },
        }),
      });
      const infoResponse = await res.json();
      setPetInfo(infoResponse);
    };
    fetchInfo();
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex">
        {/* 搜尋側欄 */}
        <div className="w-[20vw] border">排序功能製作中...</div>
        <div className="flex flex-col w-[80vw]">
          {/* searchBar */}
          <div className="h-[10vh] border">搜尋功能製作中...</div>
          {/* 內容顯示 */}
          <main className="px-[5vw] py-[3vw]">
            {petInfo &&
              petInfo?.map((data: PetInfoState, index: any) => {
                return (
                  <div
                    key={index}
                    className={`inline-block ${
                      index % 2 === 1 && "ml-[60px]"
                    } ${index > 1 && "mt-[60px]"}`}
                  >
                    <PetInfoCard petInfo={data} />
                  </div>
                );
              })}
            <div className=" flex justify-center mt-4">載入更多...製作中</div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
