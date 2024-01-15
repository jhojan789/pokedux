import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export const PokemonCard = () => {
  return (
    <Card
      style={{ width: 250 }}
      title="MewTwo"
      cover={
        <img
          src="https://w7.pngwing.com/pngs/993/391/png-transparent-pokemon-character-illustration-pokemon-x-and-y-pokemon-go-pokemon-black-white-mewtwo-pokemon-go-purple-mammal-cat-like-mammal-thumbnail.png"
          alt="MewTwo"
        />
      }
    >
      <Meta description="magic, power" />
    </Card>
  );
};
