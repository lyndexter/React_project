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

import { Flipper, Flipped } from "react-flip-toolkit";
import { data } from "./Source";
import ImageItem from "../../../components/imageItem/ImageItem";

const CatalogNews = () => {
  const [toys, setToys] = useState([...data]);

  const comparator = (a, b, standard) => {
    switch (standard) {
      case "Highest Price":
        if (a.priceInUAH > b.priceInUAH) return -1;
        else if (a.priceInUAH < b.priceInUAH) return 1;
        else return 0;
      case "Alphabetical":
        if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
      case "Lowest Price":
        if (a.priceInUAH > b.priceInUAH) return 1;
        else if (a.priceInUAH < b.priceInUAH) return -1;
        else return 0;
      case "By Material":
        if (a.material > b.material) return 1;
        else if (a.material < b.material) return -1;
        else return 0;
    }
  };

  const sortBy = (standard) => {
    let result = [...toys].sort((a, b) => comparator(a, b, standard));
    setToys(result);
    console.log(toys);
  };

  return (
    <CatalogContainer>
      <TitleStyled>• Latest Cars •</TitleStyled>
      <SortingPanel>
        <SortingText color>Sort By:</SortingText>
        <SortingText onClick={() => sortBy("Highest Price")}>
          Highest Price
        </SortingText>
        <SortingText onClick={() => sortBy("Alphabetical")}>
          Alphabetical
        </SortingText>
        <SortingText onClick={() => sortBy("Lowest Price")}>
          Lowest Price
        </SortingText>
        <SortingText onClick={() => sortBy("By Material")}>
          By Material
        </SortingText>
      </SortingPanel>

      <Flipper flipKey={toys}>
        <ContainerImages>
          {toys.map((toyCar) => (
            <Flipped key={toyCar.id} flipId={toyCar.id}>
              <div>
                <ImageItem toyCar={toyCar} />
              </div>
            </Flipped>
          ))}
        </ContainerImages>
      </Flipper>
    </CatalogContainer>
  );
};

export default CatalogNews;
