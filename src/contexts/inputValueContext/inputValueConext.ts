import {  createContext } from "react";

export type InputValueContextValue = {
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const InputValueContext = createContext<InputValueContextValue>({
  values: [],
  setValues: () => {},
});
