import { combineReducers } from "redux";

import dataReducer from "../slices/dataSlice";

export const rootReducers = combineReducers({
  data: dataReducer,
});
