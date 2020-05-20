import { combineReducers } from "redux";
import {
  INPUT_TEXT,
  REQUEST_API_PENDING,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILED,
} from "../constants";

const initialStateSearch = {
  searchField: "",
};

const searchFieldReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case INPUT_TEXT:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateApi = {
  isPending: false,
  apiData: [],
  error: "",
};

const requestApiReducer = (
  state = initialStateApi,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_API_PENDING:
      return { ...state, isPending: true };
    case REQUEST_API_SUCCESS:
      return { ...state, apiData: action.payload, isPending: false };
    case REQUEST_API_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  searchFieldReducer,
  requestApiReducer,
});

export default allReducers;
