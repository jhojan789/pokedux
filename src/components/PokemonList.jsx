import React from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(() => (
        <PokemonCard />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
