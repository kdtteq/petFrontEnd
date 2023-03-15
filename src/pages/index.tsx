import React from "react";

import Link from "next/link";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"), { ssr: false });

export default function Index() {
  return (
    <>
      <div>
        {/* 最上面導航列 */}
        <Header />
        {/* 下拉式下單導航列 */}
        <NavBar />
        {/* 背景 */}
        <div>
          <div className="w-full">
            <div className="relative w-[100vw] h-[37.75vw] -z-10 -mt-[4vw]">
              <Image
                src="/images/上圈圈.png"
                alt="背景_上大圖"
                fill
                className="object-contain"
                priority={true}
                sizes="(max-width:768px) 100vw,
              (max-width:768px) 100vw,100vw"
              />
            </div>
            <div className="z-10 text-[#3A3A3A] text-[5.56vw] -mt-[13.8vw] pl-[9.87vw] tracking-widest">
              一份關懷，一份愛
            </div>
            <div className="z-10 text-[#3A3A3A] text-[5.56vw] pl-[9.87vw] tracking-widest">
              讓牠的生命充滿色彩
            </div>
            <div className="relative w-[8vw] h-[4.99vw] -z-10 mt-[15vw] ml-[30vw]">
              <Image
                src="/images/線.png"
                alt="背景_虛線"
                fill
                className="object-contain"
                priority={true}
                sizes="(max-width:768px) 8vw,
              (max-width:768px) 8vw,8vw"
              />
            </div>
            <div className="text-[2.22vw] rotate-[9.42deg] ml-[17vw] -mt-[1.8vw] text-[#3A3A3A]">
              <div className="mr-[0.83vw] flex items-center">
                <Image
                  src="/images/愛心.png"
                  alt="背景"
                  width={40}
                  height={40}
                  priority={true}
                />
                <span>救援資訊</span>
              </div>
            </div>
            <div className="relative w-[37.5vw] h-[47.17vw] -z-10 ml-[56.6vw] -mt-[48.2vw]">
              <Image
                src="/images/dog_background.png"
                alt="背景_狗狗"
                fill
                className="object-contain"
                priority={true}
                sizes="(max-width:768px) 37.5vw,
              (max-width:768px) 37.5vw,37.5vw"
              />
            </div>
          </div>
        </div>

        {/* 大圖背景 */}
        {/* <div className="h-[350px] overflow-hidden relative shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] -z-10">
          <div className="absolute w-full h-[890px] -top-[65%] -z-20">
            <Image
              src="/images/indexBackground.jpg"
              alt="Dog"
              fill
              className="object-contain"
            />
          </div>
        </div> */}

        {/* 內容區 */}
        <main className="flex flex-col items-center justify-center py-[60px]">
          {/* 四個按鈕 */}
          <article className="flex justify-around items-center w-[60%]">
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/cat/rescue">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/cat.png"
                    alt="pic_cat"
                    width={100}
                    height={100}
                    priority={true}
                  />
                  <div className="mt-[10px] text-[#5DAC81] font-semibold tracking-widest">
                    貓咪緊急救援
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/dog/rescue">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/dog.png"
                    alt="pic_dog"
                    width={100}
                    height={100}
                    priority={true}
                  />
                  <div className="mt-[10px] text-[#5DAC81] font-semibold tracking-widest">
                    狗狗緊急救援
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/others/rescue">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/animal.png"
                    alt="pic_animal"
                    width={100}
                    height={100}
                    priority={true}
                  />
                  <div className="mt-[10px] text-[#5DAC81] font-semibold tracking-widest">
                    其他緊急救援
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/adoptions">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/pet_care.png"
                    alt="pic_petCare"
                    width={100}
                    height={100}
                    priority={true}
                  />
                </div>
                <div className="mt-[10px] text-[#5DAC81] font-semibold tracking-widest flex justify-center">
                  領養資訊
                </div>
              </Link>
            </div>
          </article>
          {/* 附近需救援動物 */}
          <article className="mt-[100px] w-full flex flex-col items-center">
            <h2 className="text-[36px] flex justify-center text-[#5DAC81] font-semibold tracking-widest">
              附近需要救援的寵物
            </h2>
            <div className="flex w-[80%] justify-around  mt-[30px]">
              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/cat1.jpg"
                    alt="pic_cat"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width:768px) 100%,
              (max-width:768px) 100%,100%"
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#5DAC81] font-semibold tracking-widest">
                    妹妹
                  </span>
                </div>
              </div>

              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/cat2.jpg"
                    alt="pic_cat"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width:768px) 100%,
              (max-width:768px) 100%,100%"
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#5DAC81] font-semibold tracking-widest">
                    姊姊
                  </span>
                </div>
              </div>
              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/dog1.jpg"
                    alt="pic_dog"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width:768px) 100%,
              (max-width:768px) 100%,100%"
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#5DAC81] font-semibold tracking-widest">
                    弟弟
                  </span>
                </div>
              </div>
              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/dog2.jpg"
                    alt="pic_dog"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width:768px) 100%,
              (max-width:768px) 100%,100%"
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#5DAC81] font-semibold tracking-widest">
                    哥哥
                  </span>
                </div>
              </div>
              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-[75%]">
                  <Image
                    src="/images/animal.png"
                    alt="pic_animal"
                    fill
                    className="object-contain"
                    priority={true}
                    sizes="(max-width:768px) 100%,
                          (max-width:768px) 100%,100%"
                  />
                </div>
                <div className="w-full h-[25%] relative bg-white flex justify-center items-center">
                  <span className=" text-[#5DAC81] font-semibold tracking-widest">
                    更多需要救援..
                  </span>
                </div>
              </div>
            </div>
          </article>
        </main>
        <div className="relative w-[100vw] h-[24.1vw] -z-10 -mt-[20vw]">
          <Image
            src="/images/下圈圈.png"
            alt="背景"
            fill
            className="object-contain"
            priority={true}
            sizes="(max-width:768px) 100vw,
              (max-width:768px) 100vw,100vw"
          />
        </div>
        {/* 頁尾 */}
        <Footer />
      </div>
    </>
  );
}
