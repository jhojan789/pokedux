import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { fetchPokemons } from "./api/fetchPokemons";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      setPokemons(await fetchPokemons());
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
