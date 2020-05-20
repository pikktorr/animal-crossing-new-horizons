import {
  INPUT_TEXT,
  REQUEST_API_PENDING,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILED,
} from "../constants";

export const inputTextAction = (text) => ({
  type: INPUT_TEXT,
  payload: text,
});

export const requestApiAction = () => (dispatch) => {
  dispatch({ type: REQUEST_API_PENDING });
  fetch("https://acnhapi.com/villagers")
    .then((response) => response.json())
    .then((result) => dispatch({ type: REQUEST_API_SUCCESS, payload: result }))
    .catch((error) => dispatch({ type: REQUEST_API_FAILED, payload: error }));
};
