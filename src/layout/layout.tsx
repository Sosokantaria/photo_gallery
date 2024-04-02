import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import "./layout.css";

export function Layout() {
  return (
    <div className="layoutContent">
      <div>
        <Header />
      </div>
      <div className="outletContent">
        <Outlet />
      </div>
      <div className="footerContent">
        <Footer />
      </div>
    </div>
  );
}
