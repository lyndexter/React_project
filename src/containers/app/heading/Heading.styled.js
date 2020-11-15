import styled from "styled-components";
import OpenSans from "../fonts/OpenSans-SemiBold.ttf";

export const ImageStyled = styled.img`
  display: block;
  max-width: 1366px;
`;

export const HeadingContainer = styled.div`
  height: 660px;
  width: 1360px;
  margin: 0 auto;
`;

export const FunctionalMenu = styled.div`
  position: absolute;
  bottom: 0px;
  height: 150px;
  width: 1366px;
  padding-bottom: 26px;
  background: rgba(248, 199, 45, 0.8);
  opacity: 90%;
`;

export const Header = styled.div`
  display: block;
  font-family: ${OpenSans};
  font-size: 22pt;
  color: rgb(255, 255, 255);
  margin-top: 14px;
  margin-bottom: 14px;
  margin-left: 50px;
  padding-left: 15px;
  max-width: 1349px;
`;

export const InputsStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  align-content: center;
  margin-left: 25px;
`;

export const Input = styled.input`
  font-family: ${OpenSans};
  font-size: 16pt;
  margin-right: 50px;
  height: 30px;
  width: 250px;
  background: transparent;
  border: solid 2px #fff;
`;
