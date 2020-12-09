import React from "react";
import {
  ErrorStyled,
  InputContainer,
  InputStyled,
} from "./InputComponent.styled";
import { Field, ErrorMessage } from "formik";

const InputComponent = ({ title, name, type, autocomplete = null }) => {
  return (
    <InputContainer>
      {title}:
      <Field
        id={name}
        name={name}
        type={type}
        as={InputStyled}
        autoComplete={autocomplete ? autocomplete : name}
      />
      <ErrorStyled>
        <ErrorMessage name={name} />
      </ErrorStyled>
    </InputContainer>
  );
};

export default InputComponent;
