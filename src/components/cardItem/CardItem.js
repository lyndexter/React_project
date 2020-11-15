import React from "react";
import { Card, Button } from "antd";
import {} from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title, description, imageSrc, price }) => {
  return (
    <Card
      hoverable
      style={{ width: "350px", borderRadius: "20px" }}
      cover={
        <img style={{ borderRadius: "20px" }} alt="Toy Car" src={imageSrc} />
      }
    >
      <Meta title={title} description={description}>
        <p>${price}</p>
        <Button>Read More</Button>
      </Meta>
    </Card>
  );
};

export default CardItem;
