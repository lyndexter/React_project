import React, { useState } from "react";
import {
  CardStyled,
  MinusStyled,
  PlusStyled,
  CardImage,
  TextStyled,
  StyledCounter,
  IconAwasomeStyled,
} from "./ReservedItem.styled";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  updateItem,
} from "../../containers/app/utils/redux/Action";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ReservedItem = ({ value }) => {
  const [element, setElement] = useState(value);
  const dispatch = useDispatch();

  const reduceItemNumber = () => {
    if (element.number === 1) {
      return;
    }
    const newElement = {
      ...element,
      number: element.number - 1,
      priceInUAH: (element.priceInUAH / element.number) * (element.number - 1),
    };
    setElement(newElement);
    dispatch(updateItem(newElement));
  };

  const increaseItemNumber = () => {
    if (element.number === 20) {
      return;
    }
    const newElement = {
      ...element,
      number: element.number + 1,
      priceInUAH: (element.priceInUAH / element.number) * (element.number + 1),
    };
    setElement(newElement);
    dispatch(updateItem(newElement));
  };

  const removeElement = () => {
    dispatch(deleteItem(element));
  };

  return (
    <CardStyled>
      <IconAwasomeStyled onClick={removeElement} icon={faTimes} />
      <CardImage alt="Toy Car" src={element.imageSrc} />
      <TextStyled>{element.title}</TextStyled>
      <StyledCounter>
        <PlusStyled onClick={increaseItemNumber} />
        <TextStyled>{element.number}</TextStyled>
        <MinusStyled onClick={reduceItemNumber} />
      </StyledCounter>
      <TextStyled>{element.priceInUAH} UAH</TextStyled>
    </CardStyled>
  );
};

export default ReservedItem;
