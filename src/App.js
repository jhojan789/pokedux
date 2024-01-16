import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";
import { fetchPokemons } from "./api/fetchPokemons";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import "./App.css";
import { setPokemons as setPokemonsAction } from "./actions";

function App({ pokemons, setPokemons }) {
  // const [pokemons, setPokemons] = useState([]);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
