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
import * as Yup from "yup";
import InputComponent from "../../../../components/inputComponent/InputComponent";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  let history = useHistory();

  const OrderSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(
        /^((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))$/g,
        "Invalid phone number"
      )
      .required("address"),
    address: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    cardNumber: Yup.string()
      .matches(/^(\d{16})$/g, "invalid card number")
      .required("Required"),
    expiresDate: Yup.date().required("Required"),
    cvv2: Yup.string()
      .matches(/^(\d{3})$/g, "invalid card cvv")
      .required("Required"),
  });

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
