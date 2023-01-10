import axios from "axios";

import { GET_CHARACTERS } from "../types";

export function getCharacters() {
  return async (dispatch) => {
    try {
      let characters = [];
      let url = `https://swapi.dev/api/people/`;
      while (url) {
        const { data } = await axios.get(url);
        characters = characters.concat(data.results);
        dispatch(setCharacters(characters));
        url = data.next;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function setCharacters(characters) {
  return function (dispatch) {
    dispatch({ type: GET_CHARACTERS, payload: characters });
  };
}
