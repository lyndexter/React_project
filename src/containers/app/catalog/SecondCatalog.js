import React, { useState } from "react";
import {
  SortingPanel,
  SortingText,
  ContainerImages,
  InfoContainer,
  InfoHeader,
  ImageCard,
  InfoDescription,
  ButtonStyled,
  InfoPrice,
  MainInfo,
  TitleInfo,
  InfoFooter,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
  const [isShown, setIsShown] = useState(-1);

  return (
    <CatalogContainer>
      <TitleStyled>• Latest Cars •</TitleStyled>
      <SortingPanel>
        <SortingText color="#333">Sort By:</SortingText>
        <SortingText>
          <a href="#">Highest Price</a>
        </SortingText>
        <SortingText>
          <a href="#">Alphabetical</a>
        </SortingText>
        <SortingText>
          <a href="#">Lowest Price</a>
        </SortingText>
        <SortingText>
          <a href="#">By Material</a>
        </SortingText>
      </SortingPanel>
      <ContainerImages>
        {data.map(({ image }, id) => (
          <ImageCard>
            <Image
              src={image}
              onMouseEnter={() => setIsShown(id)}
              onMouseLeave={() => setIsShown(-1)}
            />
            {isShown === id && (
              <InfoContainer
                onMouseEnter={() => setIsShown(id)}
                onMouseLeave={() => setIsShown(-1)}
              >
                <InfoHeader>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </InfoHeader>
                <MainInfo>
                  <TitleInfo>Mersedess</TitleInfo>
                  <InfoDescription>
                    "Super ultra fast car can get max spead 200 km per hour.
                    This car looks beauty. Yuo know it?",
                  </InfoDescription>
                  <InfoPrice>1000UAH</InfoPrice>
                  <ButtonStyled>Read More</ButtonStyled>
                </MainInfo>
                <InfoFooter>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </InfoFooter>
              </InfoContainer>
            )}
          </ImageCard>
        ))}
      </ContainerImages>
    </CatalogContainer>
  );
};

export default CatalogNews;
