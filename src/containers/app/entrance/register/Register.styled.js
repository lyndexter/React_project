import styled from "styled-components";
import { ButtonStyled } from "../../../../components/cardItem/CardItem.styled";
import { Form } from "formik";

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
  width: 500px;
  height: 700px;
  padding-right: 20px;
  border: 1px solid #c59e47;
  margin-bottom: 20px;
  position: relative;
`;

export const TitleStyled = styled.h1`
  font-family: "OpenSans-Light";
  font-size: 41px;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #020243;
  text-align: center;
`;

export const TextStyled = styled.p`
  font-family: "OpenSans Regular";
  font-size: 14px;
  color: #020243;
  text-align: center;
  width: 300px;
  letter-spacing: 5px;
  padding: 5px 0;
  margin: 0;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonAuth = styled(ButtonStyled)`
  margin: 0;
`;

export const SpanStyled = styled.span`
  cursor: pointer;
  color: #c59e47;
`;
