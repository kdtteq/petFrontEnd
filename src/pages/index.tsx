import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <div>
        {/* 最上面導航列 */}
        <nav className="w-full h-[100px] flex items-center justify-center">
          <div className="w-[80%] text-4xl flex justify-between items-center">
            <h1 className="cursor-pointer">PetHelper</h1>
            <div className="w-[10%] text-xl flex justify-around">
              <button className="">登入</button>
              <button className="">註冊</button>
            </div>
          </div>
        </nav>
        {/* 下拉式下單導航列 */}
        <nav className="w-full h-[60px] flex justify-center items-center bg-[#97C627] text-white ">
          <ul className="w-[80%] flex justify-between text-[24px] font-medium tracking-widest">
            <li>
              <Link href="/maps">地圖</Link>
            </li>
            <li>
              <Link href="/dogs">狗狗救援</Link>
            </li>
            <li>
              <Link href="/cats">貓貓救援</Link>
            </li>
            <li>
              <Link href="/animals">其他種類動物救援</Link>
            </li>
            <li>
              <Link href="/adoptions">寵物領養資訊</Link>
            </li>
          </ul>
        </nav>
        {/* 大圖背景 */}
        <div className="h-[500px] overflow-hidden">
          <Image
            src="/images/indexBackground.jpg"
            alt="Dogs & Cats"
            width={500}
            height={500}
            className="w-full -mt-[12%]"
          />
        </div>

        {/* 內容區 */}
        <main className="flex flex-col items-center justify-center py-[100px]">
          {/* 四個按鈕 */}
          <article className="flex justify-around items-center w-[60%]">
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/cats">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/cat.png"
                    alt="pic_cat"
                    width={100}
                    height={100}
                  />
                  <div className="mt-[10px] text-[#97C627] font-semibold tracking-widest">
                    貓咪緊急救援
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/dogs">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/dog.png"
                    alt="pic_dog"
                    width={100}
                    height={100}
                  />
                  <div className="mt-[10px] text-[#97C627] font-semibold tracking-widest">
                    狗狗緊急救援
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[20%] rounded-xl shadow-[12px_12px_20px_-10px_rgba(0,0,0,0.3)] border-[2px] border-gray-100 cursor-pointer p-[20px] hover:bg-gray-50 hover:border-gray-300">
              <Link href="/animals">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/animal.png"
                    alt="pic_animal"
                    width={100}
                    height={100}
                  />
                  <div className="mt-[10px] text-[#97C627] font-semibold tracking-widest">
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
                  />
                </div>
                <div className="mt-[10px] text-[#97C627] font-semibold tracking-widest flex justify-center">
                  領養資訊
                </div>
              </Link>
            </div>
          </article>
          {/* 附近需救援動物 */}
          <article className="mt-[100px] w-full flex flex-col items-center">
            <h2 className="text-[36px] flex justify-center text-[#97C627] font-semibold tracking-widest">
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
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#97C627] font-semibold tracking-widest">
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
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#97C627] font-semibold tracking-widest">
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
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#97C627] font-semibold tracking-widest">
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
                  />
                </div>
                <div className="w-full h-[50%] rounded-[50%] -mt-[50px] z-10 relative bg-white flex justify-center items-center">
                  <span className="-mt-[50px] text-[#97C627] font-semibold tracking-widest">
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
                  />
                </div>
                <div className="w-full h-[25%] relative bg-white flex justify-center items-center">
                  <span className=" text-[#97C627] font-semibold tracking-widest">
                    更多需要救援..
                  </span>
                </div>
              </div>
            </div>
          </article>
        </main>
        {/* 頁尾 */}
        <footer className="h-[300px] bg-[#97C627]"></footer>
      </div>
    </>
  );
}
