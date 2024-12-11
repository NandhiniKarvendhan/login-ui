import React from "react";
import "./Header.css";
import logo from "../assets/images/demo_logo.jpg"

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo"
        className="header-logo"
      />
    </header>
  );
};

export default Header;
