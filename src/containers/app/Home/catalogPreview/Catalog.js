import React, { useState, useContext, useEffect } from "react";
import {
  ContainerCards,
  TitleStyled,
  ButtonStyled,
  CatalogContainer,
} from "./Catalog.styled";
import ContainerItem from "../../../../components/container/ContainerItem";
import ElementsContext from "../../utils/Context";
import LoadPrewiew from "../../../../components/loading/LoadPreview";

const Catalog = () => {
  const { source } = useContext(ElementsContext);
  useEffect(() => {
    setData(source.slice(0, 2));
  }, [source]);

  const [data, setData] = useState(source.slice(0, 2));
  const [isShowMore, setIsShowMore] = useState(false);
  const showMore = () => {
    setData(source.slice(0, 4));
    setIsShowMore(true);
  };

  const showLess = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });

    setData(source.slice(0, 2));
    setIsShowMore(false);
  };

  return (
    <CatalogContainer>
      <TitleStyled>• Features Cars •</TitleStyled>
      <ContainerCards>
        {data.length === 0 ? (
          <LoadPrewiew />
        ) : (
          <ContainerItem toys={data} currentView="card" />
        )}
      </ContainerCards>
      {!isShowMore && (
        <ButtonStyled onClick={() => showMore()}>Show More</ButtonStyled>
      )}
      {isShowMore && <ButtonStyled onClick={showLess}>Show Less</ButtonStyled>}
    </CatalogContainer>
  );
};

export default Catalog;
