import axios from "axios";

import { GET_PLANETS } from "../types";

async function setPlanets() {
  try {
    let planets = [];
    let url = `https://swapi.dev/api/planets/?page=1`;
    while (url) {
      const { data } = await axios.get(url);
      planets = planets.concat(data.results);
      url = data.next;
    }
    return planets;
  } catch (error) {
    console.log(error);
  }
}

export function getPlanets() {
  return async function (dispatch) {
    setPlanets().then((planets) =>
      dispatch({ type: GET_PLANETS, payload: planets })
    );
  };
}