import React from "react";

import Link from "next/link";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Button from "@/components/index/Button";
import Image from "next/image";

const button = [
  {
    link: "/cat/rescue",
    image: "cat_pic.png",
    alt: "cat_pic",
    content: "貓咪緊急救援",
  },
  {
    link: "/dog/rescue",
    image: "dog_pic.png",
    alt: "dog_pic",
    content: "狗狗緊急救援",
  },
  {
    link: "/others/rescue",
    image: "animal_pic.png",
    alt: "animal_pic",
    content: "其他緊急救援",
  },
  {
    link: "/adoptions",
    image: "pet_care.png",
    alt: "pet_care",
    content: "領養資訊",
  },
];
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
                src="/images/index/background_head.png"
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
            {/* 首頁虛線箭頭 */}
            <div className="mt-[15vw] w-[30vw] ml-[17vw] flex ">
              <div className="text-[2.22vw] text-[#3A3A3A] rotate-[9deg] -mt-[2.5vw]">
                <div className="mr-[0.83vw] flex items-center">
                  <div className="relative w-[2.7vw] h-[2.7vw]">
                    <Image
                      src="/images/index/heart_icon.png"
                      alt="愛心icon"
                      fill
                      sizes=""
                      className="object-contain"
                      priority={true}
                    />
                  </div>

                  <span className="truncate">救援資訊</span>
                </div>
              </div>
              <div className="relative w-[8vw] h-[4.99vw]">
                <Image
                  src="/images/index/dashed_line.png"
                  alt="背景_虛線"
                  fill
                  className="object-contain"
                  priority={true}
                  sizes=""
                />
              </div>
            </div>

            <div className="relative w-[37.5vw] h-[47.17vw] -z-10 ml-[56.6vw] -mt-[48.2vw]">
              <Image
                src="/images/index/background_dog.png"
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

        {/* 內容區 */}
        <main className="flex flex-col items-center justify-center py-[60px]">
          {/* 四個按鈕 */}
          <article className="flex justify-around items-center w-[60%]">
            {button.map((data, index) => {
              return (
                <div key={index}>
                  <Button
                    link={data.link}
                    image={data.image}
                    content={data.content}
                    alt={data.alt}
                  />
                </div>
              );
            })}
          </article>

          {/* 附近需要救援的動物
          待功能更新後視狀態組件化
          暫時先直接複製貼上 */}

          <article className="mt-[100px] w-full flex flex-col items-center">
            <h2 className="text-[36px] flex justify-center text-[#5DAC81] font-semibold tracking-widest">
              附近需要救援的寵物
            </h2>
            <div className="flex w-[80%] justify-around  mt-[30px]">
              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/index/test/dog_pic1.jpg"
                    alt="pic_cat"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes=""
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
                    src="/images/index/test/cat_pic2.jpg"
                    alt="pic_cat"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes=""
                    onError={() => console.log("cat_pic2_Failed")}
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
                    src="/images/index/test/dog_pic2.jpg"
                    alt="pic_dog"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes=""
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
                    src="/images/index/test/cat_pic3.jpg"
                    alt="pic_dog"
                    fill
                    className="object-cover"
                    priority={true}
                    sizes=""
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#5DAC81] font-semibold tracking-widest">
                    哥哥
                  </span>
                </div>
              </div>
              <div className="w-[15%] h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 hover:shadow-[20px_24px_30px_0px_rgba(0,0,0,0.3)]">
                <Link href="/map">
                  <div className="relative w-full h-[75%]">
                    <Image
                      src="/images/index/test/animal_pic.png"
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
                </Link>
              </div>
            </div>
          </article>
        </main>
        <div className="relative w-[100vw] h-[24.1vw] -z-10 -mt-[20vw]">
          <Image
            src="/images/index/background_foot.png"
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
