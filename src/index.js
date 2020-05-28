//BUILT-IN IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
import * as serviceWorker from "./serviceWorker";
//CUSTOM IMPORTS
import App from "./Containers/App";
import { allReducers } from "./Redux/reducers";
//STYLING IMPORTS
import "tachyons";
import "./index.css";

// const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
