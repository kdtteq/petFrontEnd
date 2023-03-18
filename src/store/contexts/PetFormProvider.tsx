import { PetFormState } from "../types/petForm";
import { petFormReducer } from "../reducers/petFormReducer";
import { useReducer } from "react";
import { PetFormContext } from ".";
export const initialState: PetFormState = {
  type: "",
  size: "",
  color: "",
  pic: undefined,
  content: "",
  map: { lat: 0, lng: 0 },
  chineseLocation: "",
  isMapShow: false,
  cityName: "",
};
export const PetFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [petState, petDispatch] = useReducer(petFormReducer, initialState);
  return (
    <PetFormContext.Provider value={{ petState, petDispatch }}>
      {children}
    </PetFormContext.Provider>
  );
};
