import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemons, getPokemonDetails } from "../api/fetchPokemons";
import { setLoading } from "../actions";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  // thunkAPI
  async (_, { dispatch }) => {
    //dispatch loader
    //fetch
    //dispatch loader
    dispatch(setLoading(true));
    const pokemonRes = await fetchPokemons();
    const pokemonDetails = await Promise.all(
      pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetails));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const pokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (pokemonIndex >= 0) {
        const isFavorite = state.pokemons[pokemonIndex].isFavorite;
        state.pokemons[pokemonIndex].isFavorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
