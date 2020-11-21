import styled from "styled-components";
import { Menu, AutoComplete } from "antd";

export const ViewComponent = styled.section`
  max-width: 1360px;
  margin: 0 auto;
`;

export const EntityContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const AutoCompleteStyled = styled(AutoComplete)`
  /* margin-left: auto;
  margin-right: 0; */
  /* margin: auto 0 auto auto; */
`;

export const MenuStyled = styled(Menu)`
  display: flex;
  width: auto;
  margin-top: 10px;
`;

export const MenuItemStyled = styled(Menu.Item)`
  margin-left: 400px;
`;
