import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const typeStrings = types.map((t) => t.type.name).join(", ");
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      // style={{ width: 250 }}
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleFavorite} />}
    >
      <Meta description={typeStrings} />
    </Card>
  );
};
