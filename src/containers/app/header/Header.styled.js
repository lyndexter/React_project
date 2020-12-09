import styled from "styled-components";
import { ButtonStyled } from "../../../components/cardItem/CardItem.styled";

export const StyledHeader = styled.section`
  margin: 0 auto;
  height: 27px;
  width: 1366px;
  color: #fff;

  background-color: #191919;
`;

export const ListStyled = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 22px;
  width: 91px;
  font-size: 14px;
  margin: 0px;
  margin-left: 152px;
  a {
    color: white;
    :hover {
      color: #c59e47;
    }
  }
`;

export const TelephoNumber = styled.div`
  display: inline-block;
  letter-spacing: 1px;
  font-family: "BebasNeue Regular", cursive;
  font-size: 12.7px;
  color: #e7e7e7;
  margin-bottom: 0px;
  padding-left: 26.1%;
`;

export const AuthorizationStyled = styled.ul`
  list-style-type: none;
  display: inline-flex;
  font-family: "BebasNeue Regular";
  font-size: 9pt;
  color: #e7e7e7;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 23%;
`;

export const AuthorisationText = styled.li`
  text-decoration: none;
  font-family: "BebasNeue Regular";
  padding-right: 6px;
  a {
    color: #e7e7e7;
    :hover {
      color: #c59e47;
    }
  }
`;

export const AuthorisationDelimater = styled.div`
  background-color: #fff;
  height: 15px;
  width: 1px;
  margin-right: 5px;
`;

export const ButtonLogOut = styled.button`
  display: inline;
  font-family: "BebasNeue Regular";
  margin-left: 33%;
  color: #e7e7e7;
  background-color: transparent;
  border: none;
  :hover {
    color: #c59e47;
    border: none;
  }
  :active {
    border: none;
  }
`;
