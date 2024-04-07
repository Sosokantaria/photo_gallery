import { createContext } from "react";

export type ModalContextValue = {
  modal: boolean;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextValue>({
  modal: false,
  id: "",
  setId: () => {},
  setModal: () => {},
});
