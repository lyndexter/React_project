import React, { useEffect, useState } from "react";
import {
  CardStyled,
  MinusStyled,
  PlusStyled,
  CardImage,
  TextStyled,
  StyledCounter,
  IconAwasomeStyled,
  ButtonSmall,
} from "./ReservedItem.styled";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  updateItem,
} from "../../containers/app/utils/redux/Action";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ReservedItem = ({ value }) => {
  const [element, setElement] = useState(value);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    setElement(value);
  }, [value]);

  const reduceItemNumber = (event) => {
    event.stopPropagation();
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

  const increaseItemNumber = (event) => {
    event.stopPropagation();
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

  const removeElement = (event) => {
    event.stopPropagation();
    dispatch(deleteItem(element));
  };

  const goToItem = () => {
    history.push(`/item?id=${element.id}`);
  };

  return (
    <CardStyled onClick={goToItem}>
      <IconAwasomeStyled onClick={removeElement} icon={faTimes} />
      <CardImage alt="Toy Car" src={element.imageSrc} />
      <TextStyled>{element.title}</TextStyled>
      <StyledCounter>
        <ButtonSmall onClick={increaseItemNumber}>
          <PlusStyled />
        </ButtonSmall>
        <TextStyled>{element.number}</TextStyled>
        <ButtonSmall>
          <MinusStyled onClick={reduceItemNumber} />
        </ButtonSmall>
      </StyledCounter>
      <TextStyled>{element.priceInUAH} UAH</TextStyled>
    </CardStyled>
  );
};

export default ReservedItem;
