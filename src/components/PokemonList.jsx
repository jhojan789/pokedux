import React, { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i} name={pokemon.name} />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
