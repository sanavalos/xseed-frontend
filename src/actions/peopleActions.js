import axios from "axios";

import { GET_PEOPLE } from "../types";

export function getPeople() {
  return async (dispatch) => {
    try {
      let people = [];
      let url = `https://swapi.dev/api/people/`;
      while (url) {
        const { data } = await axios.get(url);
        people = people.concat(data.results);
        dispatch(setPeople(people));
        url = data.next;
      }
      return people;
    } catch (error) {
      console.log(error);
    }
  };
}

function setPeople(people) {
  return function (dispatch) {
    dispatch({ type: GET_PEOPLE, payload: people });
  };
}
