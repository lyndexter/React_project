import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  StyledFooter,
  LogoStyled,
  ContactContainer,
  ContactText,
  HorizontLine,
  ListStyled,
  BottomPanel,
  TextCopyRight,
  TextDesigned,
  BrandStuff,
} from "./Footer.styles";
import logo from "../../../images/collectionlogo1.png";

const Footer = () => {
  return (
    <StyledFooter>
      <LogoStyled src={logo} />
      <ContactContainer>
        <ContactText>about us</ContactText>
        <ContactText>categoties</ContactText>
        <ContactText>Preorder</ContactText>
        <ContactText>contact us</ContactText>
        <ContactText>recieve our news</ContactText>
      </ContactContainer>
      <BrandStuff>
        "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
        incididunt
        <br />
        eiusmod tempor incididunt
      </BrandStuff>
      <HorizontLine />
      <ListStyled>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faPinterest} />
      </ListStyled>

      <BottomPanel>
        <TextCopyRight>@Copiright 2016 | Privacy | Policy</TextCopyRight>
        <TextDesigned>Designed By WEB Domus Italia - Web Agency</TextDesigned>
      </BottomPanel>
    </StyledFooter>
  );
};

export default Footer;
