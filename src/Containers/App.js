// BUILT-IN IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";
// CUSTOM IMPORTS
import Logo from "../Components/Logo";
import SearchBox from "../Components/SearchBox";
import CardList from "../Components/CardList";
import { inputText } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchVillagers.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(inputText(event.target.value));
    },
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      villagers: [],
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

  render() {
    // STATE
    const { villagers } = this.state;
    // PROPS
    console.log(this.props);
    const { searchField, onSearchChange } = this.props;

    // FILTER VILLAGERS
    const filteredVillagers = villagers.filter((villager) => {
      const animalName = villager.name["name-en"];
      return animalName.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!villagers.length) {
      return (
        <h1 className="tc pa3 bg-light-yellow mid-gray">Hold on a sec...</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
