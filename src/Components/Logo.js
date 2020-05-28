import React, { Component } from "react";
import logo from "../img/new-horizons-logo.png";

class Logo extends Component {
  constructor() {
    super();
    this.state = {
      hasLogo: true,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hasLogo !== nextState.hasLogo) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="logo-div">
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Logo;
