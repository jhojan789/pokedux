import { Col } from "antd";
import "./App.css";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./static/logo.svg";

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
