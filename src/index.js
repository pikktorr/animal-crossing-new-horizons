//BUILT-IN IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
//CUSTOM IMPORTS
import App from "./Containers/App";
import { allReducers } from "./reducers";
//STYLING IMPORTS
import "tachyons";
import "./index.css";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
