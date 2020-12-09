import React from "react";
import {
  ButtonAuth,
  ContainerStyled,
  FormStyled,
  SpanStyled,
  TextStyled,
  TitleStyled,
} from "./Login.styled";
import { Formik } from "formik";
import { LoginSchema } from "../utils/ValidationSchema";
import InputComponent from "../../../../components/inputComponent/InputComponent";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const goToSignUp = () => {
    history.push("/register");
  };

  const submitForm = (values) => {
    for (let value in values) {
      localStorage.setItem(value, values[value]);
    }
    history.push("/");
    history.go(0);
  };

  return (
    <ContainerStyled>
      <TitleStyled>log in</TitleStyled>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={submitForm}
      >
        {({ handleSubmit }) => (
          <FormStyled>
            <InputComponent
              title="UserName/Email"
              name="username"
              type="text"
            />
            <InputComponent title="Password" name="password" type="password" />
            <TextStyled>
              Not a member?{" "}
              <SpanStyled onClick={goToSignUp}>Sign Up</SpanStyled>
            </TextStyled>
            <ButtonAuth onClick={handleSubmit}>Log Me</ButtonAuth>
          </FormStyled>
        )}
      </Formik>
    </ContainerStyled>
  );
};

export default Login;
