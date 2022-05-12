import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameReducer from "./gameReducer";

const allReducers = combineReducers({
  games: gamesReducer,
  detail: gameReducer,
});

export default allReducers;
