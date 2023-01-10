import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import planetsReducer from "./planetsReducer";

export default combineReducers({
  characters: charactersReducer,
  planets: planetsReducer,
});
