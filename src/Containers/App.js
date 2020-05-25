// BUILT-IN IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";
// CUSTOM IMPORTS
import Logo from "../Components/Logo";
import SearchBox from "../Components/SearchBox";
import CardList from "../Components/CardList";
import { inputTextAction, requestApiAction } from "../Redux/actions";

const mapStateToProps = (state) => {
  // return all state from reducers
  return {
    searchField: state.searchFieldReducer.searchField,
    isPending: state.requestApiReducer.isPending,
    apiData: state.requestApiReducer.apiData,
    error: state.requestApiReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(inputTextAction(event.target.value));
    },
    onRequestVillagers: () => dispatch(requestApiAction()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestVillagers();
  }

  render() {
    // PROPS
    const { searchField, onSearchChange, apiData, isPending } = this.props;

    // FILTER VILLAGERS
    const villagers = Object.entries(apiData).map((villager) => villager[1]);
    const filteredVillagers = villagers.filter((villager) => {
      const animalName = villager.name["name-en"];
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
