import React from "react";
import {
  CartContainer,
  TitleStyled,
  FormStyled,
  ButtonForm,
  InputContainer,
  ButtonContainer,
} from "./Checkout.styled";
import { Formik } from "formik";

import InputComponent from "../../../../components/inputComponent/InputComponent";
import { useHistory } from "react-router-dom";
import { OrderSchema } from "./ValidationSchema";
import { fetchDataById, patchData } from "../../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { resetItems } from "../../utils/redux/Action";

const Checkout = () => {
  let history = useHistory();
  const select = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <CartContainer>
      <TitleStyled>Checkout</TitleStyled>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          cardNumber: "",
          expiresDate: "",
          cvv2: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={(values) => {
          history.push("/success");
          select.orders.forEach((item) => {
            fetchDataById(item.id).then(([foundItem]) => {
              foundItem.bought++;
              patchData(foundItem);
            });
          });

          dispatch(resetItems);
        }}
      >
        {({ handleSubmit }) => (
          <FormStyled onSubmit={handleSubmit}>
            <InputContainer>
              <InputComponent title="First Name" name="firstName" type="text" />
              <InputComponent title="Last Name" name="lastName" type="text" />
              <InputComponent title="Email" name="email" type="email" />
              <InputComponent
                title="Phone Number"
                name="phoneNumber"
                type="text"
              />
              <InputComponent title="Address" name="address" type="text" />
              <InputComponent
                title="Card Number"
                name="cardNumber"
                type="text"
              />
              <InputComponent
                title="Expires Date"
                name="expiresDate"
                type="text"
              />
              <InputComponent title="cvv2/cvc2" name="cvv2" type="text" />
            </InputContainer>
            <ButtonContainer>
              <ButtonForm>Go Back</ButtonForm>

              <ButtonForm onClick={handleSubmit}>Continue</ButtonForm>
            </ButtonContainer>
          </FormStyled>
        )}
      </Formik>
    </CartContainer>
  );
};

export default Checkout;
