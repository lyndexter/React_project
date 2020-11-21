import styled from "styled-components";
import { Card, Button } from "antd";

const { Meta } = Card;

export const Footer = styled.div`
  border: 1px solid #c59e47;
  margin: 10px 27px;
  padding: 10px;
  height: 345px;
  width: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardStyled = styled(Card)`
  width: 680px;
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
  width: 78%;
  height: 36px;
  margin: 0 auto;
  margin-left: 30px;
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
  letter-spacing: 5px;
  margin-top: 36%;
  margin-bottom: 0px;
`;

export const MoreInfo = styled.div`
  top: 20px;
  left: 360px;
  width: 262px;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 30px;
  height: ${(props) => (props.height ? "322px" : "0px")};
  max-width: 290px;
  transition: 0.6s;
`;

export const ButtonLessStyled = styled(ButtonStyled)`
  margin-bottom: 10px;
`;
