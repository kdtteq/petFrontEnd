export interface PetFormState {
  [key: string];
  type: string;
  size: string;
  color: string;
  pic: File | undefined | null;
  content: string;
  map: { lat: number; lng: number };
  chineseLocation: string;
  isMapShow: boolean;
}

export interface PetFormAction {
  type: string;
  payload?: { value: any };
}
export interface PetFormContextType {
  petState: PetFormState;
  petDispatch: React.Dispatch<any>;
}
