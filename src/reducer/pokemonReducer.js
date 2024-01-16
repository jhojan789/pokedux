import { SET_POKEMONS } from "../actions/types";

const initialValue = {
  pokemons: [],
};

export const pokemonReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
