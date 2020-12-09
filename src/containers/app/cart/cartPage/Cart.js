import React from "react";
import ReservedItem from "../../../../components/reservedItem/ReservedItem";
import {
  CartContainer,
  TitleStyled,
  TotalPriceSyled,
  ButtonOnCart,
  Footer,
} from "./Cart.styled";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  let history = useHistory();
  const select = useSelector((state) => state);

  return (
    <CartContainer>
      <TitleStyled>Shopping Cart</TitleStyled>
      {select.orders.map((value) => {
        return <ReservedItem value={value} />;
      })}

      <TotalPriceSyled>Total Price: {select.totalPrice} UAH</TotalPriceSyled>
      <Footer>
        <ButtonOnCart onClick={history.goBack}>Go Back</ButtonOnCart>
        <ButtonOnCart onClick={() => history.push("/checkout")}>
          Continue
        </ButtonOnCart>
      </Footer>
    </CartContainer>
  );
};

export default Cart;
