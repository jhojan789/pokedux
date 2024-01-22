import { combineReducers } from "redux";

import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

export const rootReducers = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
