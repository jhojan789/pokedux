import { Input } from "antd";
import React from "react";

export const Searcher = () => {
  return (
    <Input.Search
      placeholder="Search..."
      style={{ marginBottom: 20 }}
    ></Input.Search>
  );
};
