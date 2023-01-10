import axios from "axios";

import { GET_PLANETS } from "../types";

export function getPlanets() {
  return async (dispatch) => {
    try {
      let planets = [];
      let url = `https://swapi.dev/api/planets/`;
      while (url) {
        const { data } = await axios.get(url);
        planets = planets.concat(data.results);
        dispatch(setPlanets(planets));
        url = data.next;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function setPlanets(planets) {
  return function (dispatch) {
    dispatch({ type: GET_PLANETS, payload: planets });
  };
}
