import { Col } from "antd";
import "./App.css";
import { Searcher } from "./components/Searcher";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
    </div>
  );
}

export default App;
