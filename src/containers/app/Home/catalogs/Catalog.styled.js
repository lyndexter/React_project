import styled from "styled-components";
import { Button } from "antd";

export const CatalogContainer = styled.section`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCards = styled.section`
  background-color: white;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export const TitleStyled = styled.h1`
  font-family: "OpenSans-Light";
  font-size: 41px;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-top: 146px;
  padding-bottom: 50px;
  color: #020243;
  text-align: center;
`;

export const ButtonStyled = styled(Button)`
  background: #020243;
  border: 1px solid #020243;
  font-family: "OpenSans Regular";
  text-transform: uppercase;
  font-size: 19px;
  color: #fff;
  letter-spacing: 5px;
  text-align: center;
  width: 200px;
  height: 50px;

  margin-top: 86px;
  margin-bottom: 100px;
  :hover {
    border: 1px solid #020243;
    color: #020243;
  }
`;
