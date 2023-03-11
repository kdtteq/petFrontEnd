import React from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Footer from "@/components/footer";
import { useRef, useState } from "react";
export default function DogRescue() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showAnimalType, setShowAnimalType] = useState<boolean>(false);
  const handleUpload = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", "string");
    formData.append("name", "string");
    formData.append("animal_type", "string");
    formData.append("breed", "string");
    formData.append("age", "0");
    formData.append("shelter_location", "string");
    formData.append("marking", "string");
    formData.append("color", "string");
    formData.append("size", "string");
    formData.append("last_known_location", "string");
    formData.append("coordinate", "string");
    if (fileInputRef.current?.files) {
      formData.append("file", fileInputRef.current.files[0]);
    }
    // console.log("file", formData.get("file"));
    // fetch("https://pethelp-api.store/animal", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => {
    //   console.log("res", res);
    // });
    fetch("https://pethelp-api.store", {
      method: "GET",
    }).then((res) => {
      console.log("res", res);
    });
  };
  return (
    <>
      <Header />
      <NavBar />

      <div className="w-full flex">
        <div className="h-[600px]">
          <div>
            <div
              className="w-[200px] border border-[#5DAC81]"
              onClick={() => {
                setShowAnimalType(!showAnimalType);
              }}
            >
              動物種類
            </div>
            {showAnimalType && (
              <div>
                <div>狗狗</div>
                <div>貓貓</div>
                <div>其他</div>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="1">特徵</label>
            <input type="text" name="1" id="1" />
          </div>
          <div>
            <label htmlFor="1">dddd</label>
            <input type="text" name="1" id="1" />
          </div>
          <div>
            <label htmlFor="1">dddd</label>
            <input type="text" name="1" id="1" />
          </div>
          <div>
            <label htmlFor="1">dddd</label>
            <input type="text" name="1" id="1" />
          </div>
          <div>
            <label htmlFor="1">dddd</label>
            <input type="text" name="1" id="1" />
          </div>
        </div>
        <form onSubmit={handleUpload}>
          <div>
            <label htmlFor="2">fileTest</label>
            <input
              type="file"
              name="1"
              id="2"
              ref={fileInputRef}
              accept="image/*"
            />
          </div>
          <button type="submit">upload</button>
        </form>
        <div className="relative w-[800px]">
          <Image
            src="/images/dog_rescue.jpg"
            alt="pic_dog"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
