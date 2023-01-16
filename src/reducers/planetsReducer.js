import { GET_PLANETS, SET_PLANETS_ERROR } from "../types";

const initialState = {
  planets: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    case SET_PLANETS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
