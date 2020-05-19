import { combineReducers } from "redux";

const initialState = {
  searchField: "",
};

const searchVillagers = (state = initialState, action = {}) => {
  switch (action.type) {
    case "INPUT_TEXT_CONSTANT":
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  searchVillagers,
});

export default allReducers;
