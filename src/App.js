import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { fetchPokemons } from "./api/fetchPokemons";
import { useEffect } from "react";
import { getPokemonWithDetails } from "./actions";
import { Col } from "antd";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const pokemonRes = await fetchPokemons();
      dispatch(getPokemonWithDetails(pokemonRes));
    })();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
