import { SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialValue = {
  pokemons: [],
  loading: false,
};

export const pokemonReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
