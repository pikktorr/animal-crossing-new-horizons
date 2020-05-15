import React from "react";
import logo from "../../img/New Horizons Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
};

export default Logo;
