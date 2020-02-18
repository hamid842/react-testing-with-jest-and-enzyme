import React from "react";
import "./styles.scss";
import logo from "./../../assets/graphics/logo.png";

const Header = () => {
  return (
    <header className="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img className="logoIMG" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
