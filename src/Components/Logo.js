import React from "react";
import logo from "../img/new-horizons-logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <header>
        <img src={logo} className="h-60" alt="logo" />
      </header>
    </div>
  );
};

export default Logo;
