import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

export const PokemonCard = ({ name, image, types }) => {
  const typeStrings = types.map((t) => t.type.name).join(", ");

  return (
    <Card
      // style={{ width: 250 }}
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={typeStrings} />
    </Card>
  );
};
