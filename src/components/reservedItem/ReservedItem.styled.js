import styled from "styled-components";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 160px;
  margin: 0 auto;
  padding-right: 20px;
  border: 1px solid #c59e47;
  margin-bottom: 20px;
  position: relative;
`;

export const CardImage = styled.img`
  height: 160px;
  width: 160px;
`;

export const TextStyled = styled.p`
  font-family: "OpenSans Regular";
  font-size: 24px;
  color: #020243;
  text-align: center;
  width: 200px;
  letter-spacing: 5px;
  margin: 0;
`;

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-left: 100px;
`;

export const PlusStyled = styled(PlusSquareOutlined)`
  font-size: 32px;
  color: #020243;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export const MinusStyled = styled(MinusSquareOutlined)`
  font-size: 32px;
  color: #020243;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export const IconAwasomeStyled = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 25px;
  color: #020243;
`;
