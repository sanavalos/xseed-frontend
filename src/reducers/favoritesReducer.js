import { SET_FAVORITE } from "../types";

const initialState = {
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE:
      let newFavorites = [];
      state.favorites.find((favorite) => favorite.url === action.payload.url)
        ? (newFavorites = state.favorites.filter(
            (favorite) => favorite.url !== action.payload.url
          ))
        : (newFavorites = [...state.favorites, action.payload]);
      return {
        ...state,
        favorites: newFavorites,
      };
    default:
      return state;
  }
}
