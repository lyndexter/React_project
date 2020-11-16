import styled from "styled-components";
import { Button } from "antd";

export const SortingPanel = styled.ul`
  width: 700px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const SortingText = styled.li`
  font-family: "OpenSans Regular";
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => (props.color ? props.color : "#6D6D6D")};
  list-style: none;
  a {
    color: ${(props) => (props.color ? props.color : "#6D6D6D")};
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ImageCard = styled.div`
  position: relative;
`;

export const InfoContainer = styled.div`
  position: absolute;
  background-color: black;
  opacity: 80%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #f6f6fb;
`;

export const InfoHeader = styled.div`
  width: 222px;
  color: white;
  font-size: 8px;
  text-align: center;
  border-bottom: 2px solid #f6f6fb;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 12px;
`;

export const MainInfo = styled.div`
  text-align: center;
  border-top: 1px solid #f6f6fb;
  border-bottom: 1px solid #f6f6fb;
  margin-top: 2px;
  margin-left: 58px;
  margin-right: 58px;
  padding-top: 40px;
`;

export const TitleInfo = styled.h3`
  font-family: "OpenSans Semibold";
  font-size: 13.6px;
  color: #e7e7e7;
  margin: 0px;
`;

export const InfoDescription = styled.p`
  font-family: "OpenSans Regular";
  font-size: 11.2px;
  color: #e7e7e7;
  padding-top: 7px;
`;

export const InfoPrice = styled.h4`
  font-family: "OpenSans Regular";
  font-size: 11.3px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  padding-bottom: 25px;
`;

export const ButtonStyled = styled(Button)`
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  letter-spacing: 5px;
  background: none;
  border: 1px solid #fff;
  font-family: "OpenSans Regular";
  margin-bottom: 14px;
`;

export const InfoFooter = styled.div`
  width: 222px;
  color: white;
  font-size: 8px;
  text-align: center;
  border-top: 2px solid #f6f6fb;
  margin: 0 auto;
  margin-top: 2px;
  margin-bottom: 50px;
  padding-top: 12px;
`;
