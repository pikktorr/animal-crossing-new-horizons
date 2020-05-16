import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import * as serviceWorker from "./serviceWorker";

// import Card from "./Components/Cards/Card";
import Logo from "./Components/Logo/Logo";
import CardList from "./Components/Cards/CardList";
const villagers = require("./Components/Api/villagers.json");

ReactDOM.render(
  <div className="tc">
    <Logo />
    <CardList villagers={villagers} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
