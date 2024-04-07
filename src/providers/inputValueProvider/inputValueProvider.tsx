import { PropsWithChildren, useState } from "react";
import { InputValueContext } from "../../contexts/inputValueContext";
export function InputValueProvider({ children }: PropsWithChildren) {
  const [values, setValues] = useState<string[]>([]);

  return (
    <InputValueContext.Provider value={{ values, setValues }}>
      {children}
    </InputValueContext.Provider>
  );
}