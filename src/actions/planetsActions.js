import { GET_PLANETS, SET_PLANETS_ERROR } from "../types";

export function getPlanets() {
  return async (dispatch) => {
    try {
      let planets = [];
      let url = `https://swapi.dev/api/planets/?page=1`;
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        planets = [...planets, ...data.results];
        url = data.next;
      }
      return dispatch(setPlanets(planets));
    } catch (error) {
      dispatch(setPlanetsError(error + ""));
    }
  };
}

export function setPlanets(planets) {
  return function (dispatch) {
    dispatch({ type: GET_PLANETS, payload: planets });
  };
}

function setPlanetsError(error) {
  return function (dispatch) {
    dispatch({ type: SET_PLANETS_ERROR, payload: error });
  };
}
