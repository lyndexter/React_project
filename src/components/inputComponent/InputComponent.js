import React from "react";
import {
  ErrorStyled,
  InputContainer,
  InputStyled,
} from "./InputComponent.styled";
import { Field, ErrorMessage } from "formik";

const InputComponent = ({ title, name, type }) => {
  return (
    <InputContainer>
      {title}:
      <Field id={name} name={name} type={type} as={InputStyled} />
      <ErrorStyled>
        <ErrorMessage name={name} />
      </ErrorStyled>
    </InputContainer>
  );
};

export default InputComponent;
