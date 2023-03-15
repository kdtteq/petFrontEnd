import { DropDownState, DropDownAction } from "../types/dropDown";
export const dropDownReducer = (
  state: DropDownState,
  action: DropDownAction
): DropDownState => {
  switch (action.type) {
    case "type":
      return {
        type: !state.type,
        size: false,
        color: false,
        pic: false,
        map: false,
        content: false,
      };
    case "size":
      return {
        type: false,
        size: !state.size,
        color: false,
        pic: false,
        map: false,
        content: false,
      };
    case "color":
      return {
        type: false,
        size: false,
        color: !state.color,
        pic: false,
        map: false,
        content: false,
      };
    case "pic":
      return {
        type: false,
        size: false,
        color: false,
        pic: !state.pic,
        map: false,
        content: false,
      };
    case "map":
      return {
        type: false,
        size: false,
        color: false,
        pic: false,
        map: !state.map,
        content: false,
      };
    case "content":
      return {
        type: false,
        size: false,
        color: false,
        pic: false,
        map: false,
        content: !state.content,
      };
    case "reset":
      return {
        type: false,
        size: false,
        color: false,
        pic: false,
        map: false,
        content: false,
      };
    default:
      return state;
  }
};
