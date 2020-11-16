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
    price: "1000",
    image: cardImage1,
  },
  {
    title: "Porshe XV class",
    description:
      "Super ultra fast car can get max spead 200 km per hour. This car looks beauty. Yuo know it?",
    price: "1800",
    image: cardImage2,
  },
];

const Catalog = () => {
  return (
    <CatalogContainer>
      <TitleStyled>• Features Cars •</TitleStyled>
      <ContainerCards>
        {data.map(({ title, description, image, price }, id) => (
          <CardItem
            title={title}
            description={description}
            price={price}
            imageSrc={image}
          ></CardItem>
        ))}
      </ContainerCards>
      <ButtonStyled>Show More</ButtonStyled>
    </CatalogContainer>
  );
};

export default Catalog;
