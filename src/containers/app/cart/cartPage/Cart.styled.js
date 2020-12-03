import styled from "styled-components";
import { ButtonStyled } from "../../../../components/cardItem/CardItem.styled";

export const CartContainer = styled.section`
  max-width: 1366px;
  margin: 0 auto;
`;

export const TitleStyled = styled.h1`
  font-family: "OpenSans-Light";
  font-size: 41px;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-top: 100px;
  padding-bottom: 50px;
  color: #020243;
  text-align: center;
`;

export const TotalPriceSyled = styled.p`
  font-family: "OpenSans-Light";
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 30px;
  margin-right: 120px;
  color: #020243;
  text-align: end;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
  max-width: 1160px;
`;

export const ButtonOnCart = styled(ButtonStyled)`
  width: 200px;
  margin: 0px;
`;
