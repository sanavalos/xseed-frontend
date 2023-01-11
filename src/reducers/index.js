import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import planetsReducer from "./planetsReducer";
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
  characters: charactersReducer,
  planets: planetsReducer,
  favorites: favoritesReducer,
});
