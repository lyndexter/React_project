import React, { useState } from "react";
import { SortingPanel, SortingText } from "./SecondCatalog.styled";
import { TitleStyled, CatalogContainer } from "./Catalog.styled";
import { data } from "../../utils/Source";
import ContainerItem from "../../../../components/container/ContainerItem";

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

      <ContainerItem toys={toys} currentView="image" />
    </CatalogContainer>
  );
};

export default CatalogNews;
