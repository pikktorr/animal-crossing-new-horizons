// BUILT-IN IMPORTS
import React, { Component } from "react";
// CUSTOM IMPORTS
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { ElementClass } from "enzyme";

class MainPage extends Component {
  componentDidMount() {
    // if (process.env.NODE_ENV === "production") {
    //   do this
    //   do that
    // }
    console.log(process.env.REACT_APP_SAY_HI);
    this.props.onRequestVillagers();
  }

  render() {
    // PROPS
    const { searchField, onSearchChange, apiData, isPending } = this.props;
    // FILTER VILLAGERS
    const villagers = Object.entries(apiData).map((villager) => villager[1]);
    const filteredVillagers = villagers.filter((villager) => {
      const animalName = villager.name["name-EUen"];
      return animalName.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
      return (
        <h1 className="tc pa3 bg-light-yellow mid-gray">
          Hold on just a sec, OK?
        </h1>
      );
    } else {
      return (
        <div className="tc">
          <Logo />
          <SearchBox searchChange={onSearchChange} />
          <CardList villagers={filteredVillagers} />
        </div>
      );
    }
  }
}

export default MainPage;
