import styled from "styled-components";
import { Card, Button } from "antd";

const { Meta } = Card;

export const Footer = styled.div`
  border: 1px solid #c59e47;
  margin: 10px 27px;
  padding: 10px;
  height: 345px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardStyled = styled(Card)`
  width: 683px;
  height: 400px;
  display: flex;
`;

export const ButtonStyled = styled(Button)`
  background: #020243;
  border: 1px solid #020243;
  font-family: "OpenSans Regular";
  text-transform: uppercase;
  text-align: center;
  font-size: 19px;
  line-height: inherit;
  color: #fff;
  letter-spacing: 5px;
  width: 74%;
  height: 36px;
  margin: 0 auto;
`;

export const CardImage = styled.img`
  height: 400px;
  width: 306px;
`;

export const MetaStyled = styled(Meta)`
  font-family: "OpenSans Regular";
  font-size: 12px;
  text-align: center;
  color: #5b5b5b;
  margin-top: 14%;
`;

export const TextStyled = styled.p`
  font-family: "OpenSans Regular";
  font-size: 12.41pt;
  color: #020243;
  text-align: center;
  letter-spacing: 8px;
  margin-top: 36%;
  margin-bottom: 19px;
`;
