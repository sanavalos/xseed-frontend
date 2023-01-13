import { GET_CHARACTERS } from "../types";

export function getCharacters() {
  return async (dispatch) => {
    try {
      let characters = [];
      let url = `https://swapi.dev/api/people/`;
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
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
