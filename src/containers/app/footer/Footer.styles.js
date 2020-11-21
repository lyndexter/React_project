import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 1360px;
  height: 300px;
  margin: 0 auto;
`;

export const LogoStyled = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  margin: 50px auto -40px auto;
`;

export const ContactContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 1188px;
  padding-top: 49px;
  padding-left: 0px;
  margin: 0 auto;
`;

export const ContactText = styled.li`
  font-family: "OpenSans Regular";
  font-size: 17px;
  letter-spacing: 4px;
  color: #191919;
  text-transform: uppercase;
  list-style: none;
  padding: 0px;
  a {
    color: #191919;
    :hover {
      color: #333;
      text-shadow: #595959 4px 0 10px;
    }
  }
`;

export const HorizontLine = styled.div`
  margin-top: 30px;
  height: 2px;
  background-color: black;
`;

export const ListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 200px;
  margin: 0 auto;
  padding-top: 20px;
  font-size: 20px;
  a {
    color: #c59e47;
    :hover {
      color: black;
    }
  }
`;

export const BrandStuff = styled.p`
  text-align: center;
  font-family: "OpenSans Regular";
  font-size: 13px;
  color: #707070;
  padding-top: 105px;
  margin: 0 0 10px;
`;

export const BottomPanel = styled.div`
  background-color: #191919;
  color: #fff;
  font-family: "Roboto Light";
  font-size: 12px;
  width: 100%;
  height: 30px;
  margin-top: 30px;
`;

export const TextCopyRight = styled.div`
  float: left;
  padding-left: 10%;
  padding-top: 5px;
  color: #fff;
  font-family: "Roboto Light";
  font-size: 12px;
`;

export const TextDesigned = styled.div`
  float: right;
  padding-right: 10%;
  padding-top: 5px;
  text-decoration: none;
  color: #fff;
  font-family: "Roboto Light";
  font-size: 12px;
`;
