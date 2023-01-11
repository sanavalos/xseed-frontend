import { SET_FAVORITE, SEARCH_FAVORITE } from "../types";

export function setFavorite(character) {
  return function (dispatch) {
    dispatch({ type: SET_FAVORITE, payload: character });
  };
}

export function searchFavorite(input) {
  return function (dispatch) {
    dispatch({ type: SEARCH_FAVORITE, payload: input });
  };
}
