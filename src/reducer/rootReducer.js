import { combineReducers } from "redux-immutable";
import { pokemonReducer } from "./pokemonReducer";
import { uiReducer } from "./uiReducer";

export const rootReducers = combineReducers({
  data: pokemonReducer,
  ui: uiReducer,
});
