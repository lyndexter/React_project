import styled from "styled-components";
import BebasNeue from "../fonts/BebasNeue-Regular.ttf";

export const MenuStyled = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  font-family: ${BebasNeue};
  color: #313943;
  width: 597px;
  height: 52px;
`;

export const MenuItem = styled.li`
  font-size: 17px;
  color: #313943;
  padding-top: 5px;
  padding-bottom: 6px;
  margin-bottom: 22px;
  padding-left: 10px;
  margin-left: 34px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  list-style: none;
`;

export const LogoImage = styled.img`
  display: inline;
  margin-top: 10px;
  width: 100px;
  margin-right: 150px;
`;

export const ContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1366px;
  color: #fff;
  background-color: #fff;
`;
