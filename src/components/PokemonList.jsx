import React from "react";
import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((p, i) => (
        <PokemonCard key={i} />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
