export interface DropDownState {
  type: boolean;
  size: boolean;
  color: boolean;
  pic: boolean;
  content: boolean;
  map: boolean;
  [key: string]: boolean;
}
export interface DropDownAction {
  type: string;
  payload?: {};
}
export interface DropDownContextType {
  dropDownState: DropDownState;
  dropDownDispatch: React.Dispatch<any>;
}
