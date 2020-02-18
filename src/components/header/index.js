import React from "react";
import "./styles.scss";
import logo from "./../../assets/graphics/logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
