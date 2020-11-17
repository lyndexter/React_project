import React from "react";
import CardItem from "../../../components/cardItem/CardItem";
import cardImage1 from "../../../images/card_image1.jpg";
import cardImage2 from "../../../images/card_image2.jpg";
import {
  ContainerCards,
  TitleStyled,
  ButtonStyled,
  CatalogContainer,
} from "./Catalog.styled";

const data = [
  {
    title: "Mersedes Benz",
    description:
      "Super ultra fast car can get max spead 200 km per hour. And it is Cool. Yuo know it?",
    priceInUAH: 1000,
    material: "metal",
    ageGroup: 14,
    size: "SMALL",
    color: "Red",
    doorCount: 4,
    lengthInMM: 156,
    image: cardImage1,
  },
  {
    title: "Porshe XV class",
    description:
      "Super ultra fast car can get max spead 200 km per hour. This car looks beauty. Yuo know it?",
    priceInUAH: 1800,
    material: "metal",
    ageGroup: 14,
    size: "SMALL",
    color: "Red",
    doorCount: 4,
    lengthInMM: 156,
    image: cardImage2,
  },
];

const Catalog = () => {
  return (
    <CatalogContainer>
      <TitleStyled>• Features Cars •</TitleStyled>
      <ContainerCards>
        {data.map((toyCar, id) => (
          <CardItem toyCar={toyCar}></CardItem>
        ))}
      </ContainerCards>
      <ButtonStyled>Show More</ButtonStyled>
    </CatalogContainer>
  );
};

export default Catalog;
