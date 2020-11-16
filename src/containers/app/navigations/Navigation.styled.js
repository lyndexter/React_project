import styled from "styled-components";

export const MenuStyled = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "BebasNeue-Regular";
  color: #313943;
  width: 1297px;
  height: 100px;
  margin: 0 auto;
  padding-right: 300px;
  padding-left: 300px;
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
  position: absolute;
  left: 50px;
  top: 0px;
  display: inline;
  width: 100px;
  z-index: 3;
`;

export const ContainerStyled = styled.section``;
