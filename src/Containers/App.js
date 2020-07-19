// BUILT-IN IMPORTS
import React, { Component } from "react";
import { connect } from "react-redux";
// CUSTOM IMPORTS
import MainPage from "../Components/MainPage";
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
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
