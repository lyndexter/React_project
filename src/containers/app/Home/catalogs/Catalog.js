import React, { useState } from "react";
import {
  ContainerCards,
  TitleStyled,
  ButtonStyled,
  CatalogContainer,
} from "./Catalog.styled";
import ContainerItem from "../../catalog/container/ContainerItem";
import { data as source } from "./Source";

const Catalog = () => {
  const [data, setData] = useState(source.slice(0, 2));
  const [isShowMore, setIsShowMore] = useState(false);

  const showMore = () => {
    setData(source);
    setIsShowMore(true);
  };

  const showLess = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
    console.log(window);

    setData(source.slice(0, 2));
    setIsShowMore(false);
  };

  return (
    <CatalogContainer>
      <TitleStyled>• Features Cars •</TitleStyled>
      <ContainerCards>
        <ContainerItem toys={data} currentView="card" />
      </ContainerCards>
      {!isShowMore && (
        <ButtonStyled onClick={() => showMore()}>Show More</ButtonStyled>
      )}
      {isShowMore && <ButtonStyled onClick={showLess}>Show Less</ButtonStyled>}
    </CatalogContainer>
  );
};

export default Catalog;
