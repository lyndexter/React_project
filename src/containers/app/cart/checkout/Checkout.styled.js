import styled from "styled-components";
import { Form } from "formik";
import { ButtonStyled } from "../../../../components/cardItem/CardItem.styled";

export const CartContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TitleStyled = styled.h1`
  font-family: "OpenSans-Light";
  font-size: 41px;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #020243;
  text-align: center;
`;

export const FormStyled = styled(Form)`
  padding-bottom: 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 500px;
  font-family: "OpenSans-Light";
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 50px auto;
`;

export const ButtonForm = styled(ButtonStyled)`
  width: 200px;
`;
