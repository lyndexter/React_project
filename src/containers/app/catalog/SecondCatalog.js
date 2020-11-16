import React from "react";
import {
  SortingPanel,
  SortingText,
  ContainerImages,
} from "./SecondCalalog.styled";
import { TitleStyled, CatalogContainer } from "./Catalog.styled";
import { Image } from "antd";
import car1 from "../../../images/car1.jpg";
import car2 from "../../../images/car2.jpg";
import car3 from "../../../images/car3.jpg";
import car4 from "../../../images/car4.jpg";
import car5 from "../../../images/car5.jpg";
import car6 from "../../../images/car6.jpg";
import car7 from "../../../images/car7.jpg";
import car8 from "../../../images/car8.jpg";

const data = [
  {
    title: "Mersedes Benz",
    description:
      "Super ultra fast car can get max spead 200 km per hour. And it is Cool. Yuo know it?",
    price: "1000",
    image: car1,
  },
  {
    title: "Porshe XV class",
    description:
      "Super ultra fast car can get max spead 200 km per hour. This car looks beauty. Yuo know it?",
    price: "1800",
    image: car2,
  },
  {
    title: "Mersedes Benz",
    description:
      "Super ultra fast car can get max spead 200 km per hour. And it is Cool. Yuo know it?",
    price: "1000",
    image: car3,
  },
  {
    title: "Porshe XV class",
    description:
      "Super ultra fast car can get max spead 200 km per hour. This car looks beauty. Yuo know it?",
    price: "1800",
    image: car4,
  },
  {
    title: "Mersedes Benz",
    description:
      "Super ultra fast car can get max spead 200 km per hour. And it is Cool. Yuo know it?",
    price: "1000",
    image: car5,
  },
  {
    title: "Porshe XV class",
    description:
      "Super ultra fast car can get max spead 200 km per hour. This car looks beauty. Yuo know it?",
    price: "1800",
    image: car6,
  },
  {
    title: "Mersedes Benz",
    description:
      "Super ultra fast car can get max spead 200 km per hour. And it is Cool. Yuo know it?",
    price: "1000",
    image: car7,
  },
  {
    title: "Porshe XV class",
    description:
      "Super ultra fast car can get max spead 200 km per hour. This car looks beauty. Yuo know it?",
    price: "1800",
    image: car8,
  },
];

const CatalogNews = () => {
  return (
    <CatalogContainer>
      <TitleStyled>• Latest Cars •</TitleStyled>
      <SortingPanel>
        <SortingText color="#333">Sort By:</SortingText>
        <SortingText>Highest Price</SortingText>
        <SortingText>Alphabetical</SortingText>
        <SortingText>Lowest Price</SortingText>
        <SortingText>By Material</SortingText>
      </SortingPanel>
      <ContainerImages>
        {data.map(({ image }) => (
          <Image src={image} />
        ))}
      </ContainerImages>
    </CatalogContainer>
  );
};

export default CatalogNews;
