import styled from "styled-components";
import OpenSans from "../../fonts/OpenSans-Semibold.ttf";

export const HeadingContainer = styled.div`
  position: relative;
  height: 630px;
  width: 1360px;
  margin: 0 auto;
  background-size: cover;
  overflow: hidden;
`;

export const FunctionalMenu = styled.div`
  position: absolute;
  bottom: 0px;
  height: 150px;
  width: 1360px;

  background: rgba(248, 199, 45, 0.8);
  opacity: 95%;
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

export const DescriptionStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  align-content: center;
  margin-left: 25px;
`;

export const TextStyled = styled.p`
  font-family: ${OpenSans};
  font-size: 16pt;
  color: white;
  margin-right: 50px;
  height: 30px;
  width: 850px;
  background: transparent;
`;
