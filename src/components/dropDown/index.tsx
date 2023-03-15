import React from "react";
import { useContext } from "react";
import { DropDownContext } from "@/store/contexts";
import { PetFormContext } from "@/store/contexts";
import {
  DropDownProps,
  DropDownOptionsProps,
} from "@/types/formType/dropDownProps";

export default function DropDown({ title, options, storeType }: DropDownProps) {
  const { dropDownState, dropDownDispatch } = useContext(DropDownContext);
  const { petState, petDispatch } = useContext(PetFormContext);
  const Options = ({ data, lastOption, nowOption }: DropDownOptionsProps) => {
    return (
      <div
        onClick={() => {
          dropDownDispatch({ type: storeType });
          petDispatch({ type: storeType, payload: { value: data } });
        }}
        className={`h-[36px] leading-[36px] hover:bg-slate-200 px-5 ${
          lastOption === nowOption ? "rounded-b-2xl" : ""
        } `}
      >
        {data}
      </div>
    );
  };
  return (
    <div className="mt-[20px] shadow-[12px_12px_20px_-15px_rgba(0,0,0,0.3)] rounded-2xl text-[#3A3A3A] ">
      <div
        className={`h-[50px] border-[3px] border-[#5DAC81] w-full cursor-pointer ${
          dropDownState[storeType] ? "rounded-t-2xl border-b-0" : "rounded-2xl"
        } flex items-center justify-between px-5`}
        onClick={() => {
          dropDownDispatch({ type: storeType });
        }}
      >
        <span>{title}</span>
        <span>{petState[storeType]}</span>
      </div>
      {dropDownState[storeType] && options && (
        <div className="border-[3px] border-t-0 border-[#5DAC81] rounded-b-2xl">
          {options.map((option, index) => {
            return (
              <Options
                data={option}
                key={index}
                lastOption={options.length - 1}
                nowOption={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
