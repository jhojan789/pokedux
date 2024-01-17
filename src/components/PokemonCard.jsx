import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export const PokemonCard = (pokemon) => {
  return (
    <Card
      // style={{ width: 250 }}
      title={pokemon.name}
      cover={<img src={pokemon.image} alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Meta description="magic, power" />
    </Card>
  );
};
