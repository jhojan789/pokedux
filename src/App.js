import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { fetchPokemons } from "./api/fetchPokemons";
import { useEffect } from "react";
import { getPokemonWithDetails, setLoading } from "./actions";
import { Col, Spin } from "antd";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      const pokemonRes = await fetchPokemons();
      dispatch(getPokemonWithDetails(pokemonRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
