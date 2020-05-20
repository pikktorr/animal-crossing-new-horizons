//BUILT-IN IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
//CUSTOM IMPORTS
import App from "./Containers/App";
import { allReducers } from "./Redux/reducers";
//STYLING IMPORTS
import "tachyons";
import "./index.css";

const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
