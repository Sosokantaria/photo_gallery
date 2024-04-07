import { Outlet } from "react-router-dom";
import { Modal } from "./modal";
import { Footer } from "./footer";
import { Header } from "./header";
import { useContext } from "react";
import { ModalContext } from "../contexts/modalContext";
import "./layout.css";

export function Layout() {
  const { modal } = useContext(ModalContext);
  return (
    <div className="layoutContent">
      <div>
        <Header />
      </div>
      {modal && (
        <div className="modalContent">
          <Modal />
        </div>
      )}
      <div className="outletContent">
        <Outlet />
      </div>
      <div className="footerContent">
        <Footer />
      </div>
    </div>
  );
}
