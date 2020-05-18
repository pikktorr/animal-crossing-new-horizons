import React, { Component } from "react";

import Logo from "../Components/Logo";
import SearchBox from "../Components/SearchBox";
// import Scroll from "../Components/Scroll";
import CardList from "../Components/CardList";

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
    const { villagers, searchfield } = this.state;
    const filteredVillagers = villagers.filter((villager) => {
      const animalName = villager.name["name-en"];
      return animalName.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!villagers.length) {
      return (
        <h1 className="tc pa3 bg-light-yellow mid-gray">Hold on a sec...</h1>
      );
    } else {
      return (
        <div className="tc">
          <Logo />
          <SearchBox searchChange={this.onSearchChange} />
            <CardList villagers={filteredVillagers} />
          {/* <Scroll>
          </Scroll> */}
        </div>
      );
    }
  }
}

export default App;
