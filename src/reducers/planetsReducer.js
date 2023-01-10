import { GET_PLANETS } from "../types";

const initialState = {
  planets: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    default:
      return state;
  }
}
