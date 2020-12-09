import styled from "styled-components";
import { Menu, AutoComplete } from "antd";

export const ViewComponent = styled.section`
  max-width: 1360px;
  margin: 0 auto;
`;

export const AutoCompleteStyled = styled(AutoComplete)``;

export const MenuStyled = styled(Menu)`
  display: flex;
  width: auto;
  margin-top: 10px;
  color: #020243;
  li:nth-child(8) {
    right: -600px;
  }
`;

export const MenuItemStyled = styled(Menu.Item)``;
