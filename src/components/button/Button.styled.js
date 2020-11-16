import styled from "styled-components";
import { Button } from "antd";

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
