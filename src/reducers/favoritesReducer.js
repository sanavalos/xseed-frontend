import { SET_FAVORITE, SEARCH_FAVORITE } from "../types";

const initialState = {
  favorites: [],
  filteredFavorites: [],
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
        filteredFavorites: newFavorites,
      };

    case SEARCH_FAVORITE:
      let filterFavorites = state.favorites.filter((favorite) =>
        favorite.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      filterFavorites = filterFavorites.length
        ? filterFavorites
        : state.favorites;
      return {
        ...state,
        filteredFavorites: filterFavorites,
      };

    default:
      return state;
  }
}
