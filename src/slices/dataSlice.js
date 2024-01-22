import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemons, getPokemonDetails } from "../api/fetchPokemons";
import { setLoading } from "../slices/uiSlice";

const initialState = {
  pokemons: [],
  searchPokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  // thunkAPI
  async (_, { dispatch }) => {
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
        const isFavorite = state.pokemons[pokemonIndex].favorite;
        state.pokemons[pokemonIndex].favorite = !isFavorite;
      }

      if (state.searchPokemons.length > 0) {
        const pokemonIndex = state.searchPokemons.findIndex((pokemon) => {
          return pokemon.id === action.payload.pokemonId;
        });
        if (pokemonIndex >= 0) {
          const isFavorite = state.searchPokemons[pokemonIndex].favorite;
          state.searchPokemons[pokemonIndex].favorite = !isFavorite;
        }
        console.log(state.searchPokemons.length);
      }
    },
    searchPokemons: (state, action) => {
      if (action.payload.length === 0) state.searchPokemons = [];
      else
        state.searchPokemons = state.pokemons.filter((pokemon) => {
          return pokemon.name.includes(action.payload);
        });
    },
  },
});

export const { setPokemons, setFavorite, searchPokemons } = dataSlice.actions;

export default dataSlice.reducer;
