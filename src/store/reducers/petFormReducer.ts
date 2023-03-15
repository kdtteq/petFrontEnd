import { PetFormAction, PetFormState } from "../types/petForm";
import { initialState } from "../contexts/PetFormProvider";
export const petFormReducer = (
  state: PetFormState,
  action: PetFormAction
): PetFormState => {
  switch (action.type) {
    case "type":
      return {
        ...state,
        type: action.payload!.value,
      };
    case "size":
      return {
        ...state,
        size: action.payload!.value,
      };
    case "color":
      return {
        ...state,
        color: action.payload!.value,
      };
    case "pic":
      return {
        ...state,
        pic: action.payload!.value,
      };
    case "content":
      return {
        ...state,
        content: action.payload!.value,
      };
    case "map":
      return {
        ...state,
        map: action.payload!.value,
      };
    case "chineseLocation":
      return {
        ...state,
        chineseLocation: action.payload!.value,
      };
    case "isMapShow":
      return {
        ...state,
        isMapShow: action.payload!.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
