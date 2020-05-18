import React, { Component } from "react";

import Logo from "../Components/Logo/Logo";
import CardList from "../Components/Cards/CardList";
import SearchBox from "../Components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      villagers: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://acnhapi.com/villagers")
      .then((response) => response.json())
      .then((result) => {
        const villagers = Object.entries(result).map((villager) => villager[1]);
        this.setState({ villagers: villagers });
      })
      .catch((error) => console.log(error.message));
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
