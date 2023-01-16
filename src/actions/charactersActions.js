import { GET_CHARACTERS, SET_CHARACTERS_ERROR } from "../types";

export function getCharacters() {
  return async (dispatch) => {
    try {
      let characters = [];
      let url = `https://swapi.dev/api/people/`;
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        characters = [...characters, ...data.results];
        dispatch(setCharacters(characters));
        url = data.next;
      }
    } catch (error) {
      dispatch(setCharactersError(error + ""));
    }
  };
}

function setCharacters(characters) {
  return function (dispatch) {
    dispatch({ type: GET_CHARACTERS, payload: characters });
  };
}

function setCharactersError(error) {
  return function (dispatch) {
    dispatch({ type: SET_CHARACTERS_ERROR, payload: error });
  };
}
