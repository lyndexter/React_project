import React from "react";
import { Card } from "antd";
import {
  Footer,
  CardStyled,
  ButtonStyled,
  CardImage,
  MetaStyled,
  TextStyled,
} from "./CardItem.styled";
import "antd/dist/antd.css";

const CardItem = ({ title, description, imageSrc, price }) => {
  return (
    <div>
      <CardStyled hoverable cover={<CardImage alt="Toy Car" src={imageSrc} />}>
        <Footer>
          <MetaStyled title={title} description={description} />
          <TextStyled>Price: ${price}UAH</TextStyled>
          <ButtonStyled>Read More</ButtonStyled>
        </Footer>
      </CardStyled>
    </div>
  );
};

export default CardItem;
