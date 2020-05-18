import React from "react";
import logo from "../img/new-horizons-logo.png";

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
