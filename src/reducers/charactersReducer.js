import { GET_CHARACTERS, SET_CHARACTERS_ERROR } from "../types";

const initialState = {
  characters: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case SET_CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
