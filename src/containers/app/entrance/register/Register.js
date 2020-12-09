import React from "react";
import {
  ButtonAuth,
  ContainerStyled,
  FormStyled,
  SpanStyled,
  TextStyled,
  TitleStyled,
} from "./Register.styled";
import { Formik } from "formik";
import { RegisterSchema } from "../utils/ValidationSchema";
import InputComponent from "../../../../components/inputComponent/InputComponent";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();

  const goToLogIn = () => {
    history.push("/login");
  };

  const submitForm = (values) => {
    localStorage.setItem("username", values["username"]);
    localStorage.setItem("email", values["email"]);
    localStorage.setItem("password", values["password"]);
    history.push("/");
  };

  return (
    <ContainerStyled>
      <TitleStyled>sign up</TitleStyled>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          checkPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={submitForm}
      >
        {({ handleSubmit }) => (
          <FormStyled>
            <InputComponent
              title="UserName/Email"
              name="username"
              type="text"
            />
            <InputComponent title="Email" name="email" type="email" />
            <InputComponent title="Password" name="password" type="password" />
            <InputComponent
              title="Check Password"
              name="checkPassword"
              type="password"
            />
            <TextStyled>
              Not a member? <SpanStyled onClick={goToLogIn}>Sign In</SpanStyled>
            </TextStyled>
            <ButtonAuth onClick={handleSubmit}>Register Me</ButtonAuth>
          </FormStyled>
        )}
      </Formik>
    </ContainerStyled>
  );
};

export default Register;
