import { SET_FAVORITE } from "../types";

export function setFavorite(character) {
  return function (dispatch) {
    dispatch({ type: SET_FAVORITE, payload: character });
  };
}
