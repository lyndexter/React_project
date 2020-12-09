import React, { useState } from "react";
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
import { Modal } from "antd";
const Login = () => {
  let history = useHistory();

  const goToSignUp = () => {
    history.push("/register");
  };

  const submitForm = (values) => {
    const user = {
      username: localStorage.getItem("username-register", values["username"]),
      email: localStorage.getItem("email-register", values["email"]),
      password: localStorage.getItem("password-register", values["password"]),
    };

    if (
      (user.username === values["username"] ||
        user.email === values["email"]) &&
      user.password === values["password"]
    ) {
      localStorage.setItem("username", values["username"]);
      localStorage.setItem("password", values["password"]);
      history.push("/");
      history.go(0);
    } else {
      Modal.error({
        title: "Your username or password is invalid",
        content: "please try again or register if you not register now",
      });
    }
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
            <InputComponent
              title="Password"
              name="password"
              type="password"
              autocomplete="current-password"
            />
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
