import React, { useContext } from "react";
import { DropDownContext } from "@/store/contexts";
import { PetFormContext } from "@/store/contexts";
import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import DropDown from "@/components/dropDown";
import { useRef, useState, useEffect } from "react";
import { PassPosition } from "@/types/passPositionType";
import roller from "../../../public/css/roller.module.css";

const GoogleMap = dynamic(() => import("@/components/googleMap"), {
  ssr: false,
});
const Image = dynamic(() => import("next/image"), { ssr: false });

const typeOptions: string[] = ["狗狗", "貓貓", "其他"];
const sizeOptions: string[] = ["小型", "中型", "大型"];
const colorOptions: string[] = [
  "黑色",
  "白色",
  "黃色",
  "棕色",
  "灰色",
  "橘色",
  "其他",
];

export default function DogRescue() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const infoInputRef = useRef<HTMLInputElement>(null);
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  const { petState, petDispatch } = useContext(PetFormContext);
  const [loadingBar, setLoadingBar] = useState<boolean>(false);
  const [picFileName, setPicFileName] = useState<string>("");

  const handlePicUpload = (e: any) => {
    e.preventDefault();

    if (e.target.files) {
      setPicFileName(e.target.files[0].name);
    }
    if (fileInputRef.current?.files) {
      console.log(1);
      petDispatch({
        type: "pic",
        payload: { value: fileInputRef.current.files[0] },
      });
    }
  };
  const handleInfoInput = () => {
    dropDownDispatch({ type: "content" });
  };
  const handleInfoInputChange = () => {
    if (infoInputRef.current) {
      petDispatch({
        type: "content",
        payload: { value: infoInputRef.current.innerText },
      });
    }
  };
  useEffect(() => {
    if (dropDownState.content) {
      infoInputRef.current?.focus();
    }
  }, [dropDownState.content]);
  const handleUpload = async () => {
    setLoadingBar(true);
    const formData = new FormData();
    formData.append("animal_type", petState.type);
    formData.append("info_content", petState.content);
    formData.append("color", petState.color);
    formData.append("size", petState.size);
    formData.append("coordinate", JSON.stringify(petState.map));
    if (petState.pic) {
      formData.append("image_file", petState.pic);
    }

    try {
      const response = await fetch("https://pethelp-api.store/animal", {
        method: "POST",
        body: formData,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setLoadingBar(false);
    petDispatch({ type: "reset" });
    dropDownDispatch({ type: "reset" });
    if (infoInputRef.current) {
      infoInputRef.current!.innerHTML = "";
    }
  };
  return (
    <div className="text-[1.39vw] text-[#3A3A3A]">
      <Header />
      <NavBar />
      <div className="w-full flex justify-center">
        <div className="flex w-[88vw] justify-between py-[8vw]">
          <form className="w-[38.4vw] max-w-[38.4vw] shrink-0 rounded-[50px] border-[5px] border-[#5DAC81] border-dashed p-8 relative">
            <div className="text-[3.61vw]">救援回報</div>
            <div className="">
              <DropDown
                title="動物種類"
                options={typeOptions}
                storeType="type"
              />
              <DropDown
                title="動物體型"
                options={sizeOptions}
                storeType="size"
              />
              <DropDown
                title="動物顏色"
                options={colorOptions}
                storeType="color"
              />
              {/* 發現地點 */}
              <div
                className={`mt-[20px] shadow-[12px_12px_20px_-15px_rgba(0,0,0,0.3)] rounded-2xl  border-[#5DAC81] border-[3px] w-full px-5`}
              >
                <div
                  className="min-h-[34px] leading-[34px] w-full flex cursor-pointer"
                  onClick={() => {
                    petDispatch({
                      type: "isMapShow",
                      payload: { value: !petState.isMapShow },
                    });
                  }}
                >
                  <div className="flex justify-between items-center w-full min-h-[45px]">
                    <div>發現地點</div>
                  </div>
                </div>
                <div
                  className={`outline-none cursor-text caret-[#A8D8B9] w-full ${
                    petState.chineseLocation ? "" : "hidden"
                  } min-h-[32px] pb-[10px] text-[18px] font-light tracking-tight text-[#3A3A3A]/[.6] `}
                >
                  {petState.chineseLocation}
                </div>
              </div>
              {/* 照片上傳區  */}
              <div
                className={`mt-[20px] shadow-[12px_12px_20px_-15px_rgba(0,0,0,0.3)] rounded-2xl  border-[#5DAC81] border-[3px] w-full px-5`}
              >
                <label htmlFor="fileUpload" className="w-full cursor-pointer">
                  <div className="flex justify-between">
                    <div className="min-h-[45px] leading-[45px]">照片上傳</div>
                  </div>
                  <input
                    type="file"
                    name="fileUpload"
                    id="fileUpload"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handlePicUpload}
                  />
                  <div
                    className={`truncate min-h-[45px] text-[18px] font-light tracking-tight text-[#3A3A3A]/[.6] ${
                      petState.pic ? "" : "hidden"
                    }`}
                  >
                    {picFileName}
                  </div>
                </label>
              </div>

              {/* 其他補充內容 */}
              <div
                className={`mt-[20px] shadow-[12px_12px_20px_-15px_rgba(0,0,0,0.3)] rounded-2xl  border-[#5DAC81] border-[3px] w-full px-5 `}
              >
                <div
                  className="min-h-[34px] leading-[34px] w-full flex cursor-pointer"
                  onClick={handleInfoInput}
                >
                  <div className="flex justify-between items-center w-full min-h-[45px]">
                    <div>其他補充內容</div>
                    {/* <div className="truncate max-w-[40%] text-[18px] font-light tracking-tight text-[#3A3A3A]/[.6]">
                      {petState.content}
                    </div> */}
                  </div>
                  {/* <div className="border">{infoInputRef.current?.value}</div> */}
                </div>
                <div
                  className={`outline-none cursor-text caret-[#A8D8B9] w-full ${
                    dropDownState.content ? "" : "hidden"
                  } min-h-[32px] pb-[10px] text-[18px] font-light tracking-tight text-[#3A3A3A]/[.6] `}
                  contentEditable
                  ref={infoInputRef}
                  onInput={handleInfoInputChange}
                ></div>
              </div>
              {/* 確認按鈕 */}
              <div className="w-full flex justify-center mt-[2vw]">
                <div
                  className={` w-[8vw] h-[8vw] border-[3px] border-rose-900 cursor-pointer bg-[#A8D8B9] rounded-[50%] flex justify-center items-center`}
                  onClick={handleUpload}
                >
                  確認送出
                </div>
              </div>
            </div>
          </form>
          <div className="w-[40vw] relative">
            <div
              className={`w-[40vw] h-[53.26vw] absolute ${
                !petState.isMapShow && "hidden"
              }`}
            >
              <GoogleMap />
            </div>
            <Image
              src="/images/貓狗.png"
              alt="貓狗"
              fill
              sizes="(max-width:768px) 40vw,
              (max-width:768px) 40vw,40vw"
              className={`object-contain ${petState.isMapShow && "hidden"}`}
              priority={true}
            />
          </div>
        </div>
      </div>
      {/* 轉圈圈動畫 */}
      <div
        className={`bg-[#3A3A3A]/[.06] w-full h-full ${
          loadingBar || "hidden"
        } fixed top-0`}
      ></div>
      <div className=" fixed top-[50vh] left-[50vw] -translate-x-[50%] -translate-y-[50%]">
        <div className={`${loadingBar ? roller.roller : ""}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
