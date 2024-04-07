import { PropsWithChildren, useState } from "react";
import { ModalContext } from "../../contexts/modalContext";
export function ModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  return (
    <ModalContext.Provider value={{ modal, id, setId, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}
