import { File } from "buffer";
import { createContext } from "react";
import { DropDownContextType } from "../types/dropDown";
import { PetFormContextType } from "../types/petForm";
export const DropDownContext = createContext<DropDownContextType>({
  dropDownState: {
    type: false,
    size: false,
    color: false,
    pic: false,
    content: false,
    map: false,
  },
  dropDownDispatch: () => {},
});

export const PetFormContext = createContext<PetFormContextType>({
  petState: {
    type: "",
    size: "",
    color: "",
    pic: null,
    content: "",
    map: { lat: 0, lng: 0 },
    chineseLocation: "",
    isMapShow: false,
  },
  petDispatch: () => {},
});
