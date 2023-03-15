import { dropDownReducer } from "../reducers/dropDownReducer";
import { DropDownState } from "../types/dropDown";
import { useReducer } from "react";
import { DropDownContext } from ".";
const initialState: DropDownState = {
  type: false,
  size: false,
  color: false,
  pic: false,
  content: false,
  map: false,
};
export const DropDownProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dropDownState, dropDownDispatch] = useReducer(
    dropDownReducer,
    initialState
  );
  return (
    <DropDownContext.Provider value={{ dropDownState, dropDownDispatch }}>
      {children}
    </DropDownContext.Provider>
  );
};
