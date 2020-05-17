import React, { Component } from "react";

import Logo from "../Components/Logo/Logo";
import CardList from "../Components/Cards/CardList";
import SearchBox from "../Components/SearchBox/SearchBox";

const villagersJSON = require("../Components/Api/villagers.json");
const villagers = Object.entries(villagersJSON).map((villager) => villager[1]);

class App extends Component {
  constructor() {
    super();
    this.state = {
      villagers: villagers,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredVillagers = this.state.villagers.filter((villager) => {
      const animalName = villager.name["name-en"];
      return animalName
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <Logo />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList villagers={filteredVillagers} />
      </div>
    );
  }
}

export default App;
