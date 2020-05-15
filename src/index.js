import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import * as serviceWorker from "./serviceWorker";

// import Logo from "./Components/Logo/Logo";
import Card from "./Components/Card/Card";
import Logo from "./Components/Logo/Logo";
const villagers = require("./Components/Api/villagers.json");

ReactDOM.render(
  <div className="tc">
    <Logo />
    <Card
      id={villagers.duk09.id}
      name={villagers.duk09.name["name-en"]}
      phrase={villagers.duk09["catch-phrase"]}
    />
    <Card
      id={villagers.ant09.id}
      name={villagers.ant09.name["name-en"]}
      phrase={villagers.ant09["catch-phrase"]}
    />
    <Card
      id={villagers.cat16.id}
      name={villagers.cat16.name["name-en"]}
      phrase={villagers.cat16["catch-phrase"]}
    />
    <Card
      id={villagers.brd11.id}
      name={villagers.brd11.name["name-en"]}
      phrase={villagers.brd11["catch-phrase"]}
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
