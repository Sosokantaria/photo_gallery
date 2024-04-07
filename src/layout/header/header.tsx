import { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import "./header.css";


export function Header() {
    const location=useLocation()
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        setIsVisible(scrollPosition > currentScrollPosition);
        setScrollPosition(currentScrollPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollPosition]);

  const cls = isVisible ? "visible" : "hidden";
    
  return (
    <div className={`headerContent ${cls}`}>
      <h1>ფოტო გალერია</h1>
      <ul className="listContent">
        <li><Link to="/" className={`links ${location.pathname=="/"&& "active"}`}>მთავარი</Link></li>
        <li><Link to="/history" className={`links ${location.pathname=="/history"&& "active"}`}>ისტორია</Link></li>
      </ul>
    </div>
  );
}
