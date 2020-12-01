import styled from "styled-components";
import { Divider, Rate, Select, Statistic } from "antd";
import { ButtonStyled } from "../../../../components/cardItem/CardItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1366px;
  height: 700px;
  margin: 0 auto;
  padding-top: 30px;
  padding-left: 50px;
`;

export const TopPart = styled.div`
  width: auto;
  display: flex;
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
  height: auto;
  padding-left: 60px;
`;

export const TagContainer = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;
export const DividerStyled = styled(Divider)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const TitleStyled = styled.h3`
  display: inline;
  font-family: "OpenSans Semibold";
  font-size: 24px;
  font-weight: 600;
  color: #313943;
  margin-left: 30px;
`;

export const RateStyled = styled(Rate)`
  float: right;
  margin-right: 50px;
`;

export const DescriptionStyled = styled.p`
  font-family: "OpenSans Regular";
  font-size: 14px;
  color: #313943;
  padding-top: 7px;
  max-width: 600px;
`;

export const OptionTextStyled = styled.h3`
  display: inline-block;
  font-family: "OpenSans Regular";
  font-size: 18px;
  color: #313943;
  padding-top: 45px;
  max-width: 600px;
  margin-right: 20px;
`;

export const SelectStyled = styled(Select)`
  width: 200px;
`;

export const StatisticContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 auto 30px;
`;

export const StatisticStyled = styled(Statistic)`
  margin-right: 50px;
`;

export const BottomPart = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledPrice = styled.p`
  margin-right: auto;
  font-family: "OpenSans Regular";
  text-transform: uppercase;
  text-align: center;
  font-size: 19px;
  letter-spacing: 5px;
  color: #020243;
  border-bottom: 1px solid #020243;
`;

export const ButtonItemStyled = styled(ButtonStyled)`
  width: 250px;
  margin-right: 30px;
  margin-bottom: 20px;
`;

export const IconOnButton = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
