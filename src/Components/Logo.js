import React from "react";
import logo from "../img/New Horizons Logo.png";

const Logo = () => {
  return (
    <div className="logo-div">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
};

export default Logo;
