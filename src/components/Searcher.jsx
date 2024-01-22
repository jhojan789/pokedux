import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../slices/dataSlice";

export const Searcher = () => {
  const dispatch = useDispatch();

  return (
    <Input.Search
      placeholder="Search..."
      style={{ marginBottom: 20 }}
      onSearch={(value, event) => dispatch(searchPokemons(value))}
    ></Input.Search>
  );
};

// import React from 'react';
// import { Input } from 'antd';

// const { Search } = Input;

// const App: React.FC = () => (
//   <>
//     <Search placeholder="input search loading default" loading />
//     <br />
//     <br />
//     <Search placeholder="input search loading with enterButton" loading enterButton />
//     <br />
//     <br />
//     <Search placeholder="input search text" enterButton="Search" size="large" loading />
//   </>
// );

// export default App;
