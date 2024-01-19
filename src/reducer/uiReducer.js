import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialValue = fromJS({
  loading: false,
});

export const uiReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("loading", action.payload);
    default:
      return state;
  }
};
