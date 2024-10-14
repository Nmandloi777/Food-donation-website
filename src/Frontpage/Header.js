import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
export default function Header() {
 const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const ourcenter = () => {
    navigate("/getsupport");
  };
  return (
    <div>

<nav>
    <div className="navbar">
      <div className="logo"><a href="/"> Meal Rescue India </a></div>
      <ul className="menu">
        <li><a onClick={()=>{navigate("/")}}>Home</a></li>
        <li><a onClick={ourcenter}>Our Centers</a></li>
        <li><a onClick={()=>{navigate("/donatelogin")}}>Donate</a></li>
        <li><a onClick={()=>{navigate("/contact")}}>Contact Us </a></li>
        <li><a onClick={()=>{navigate("/admin")}}>Administrator Panel</a></li>
      </ul>
    </div>
  </nav>
  
  <div className="button">
    <button onClick={scrollToTop}>↑</button>
  </div>
    </div>
  )
}
