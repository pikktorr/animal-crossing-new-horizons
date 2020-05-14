import React from "react";
import logo from "./img/New Horizons Logo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Animal Crossing: New Horizons API</p>
          <a
            className="App-link"
            href="http://acnhapi.com/doc"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://acnhapi.com/doc
          </a>
        </header>
      </div>
    );
  }
}

export default App;
