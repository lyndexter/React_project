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
import logo from "../../../images/logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <LogoStyled src={logo} />
      <ContactContainer>
        <ContactText>
          {" "}
          <a href="#">about us</a>
        </ContactText>
        <ContactText>
          <a href="http://localhost:3000/catalog">catalog</a>
        </ContactText>
        <ContactText>
          <a href="#">Preorder</a>
        </ContactText>
        <ContactText>
          <a href="#">contact us</a>
        </ContactText>
        <ContactText>
          <a href="#">recieve our news</a>
        </ContactText>
      </ContactContainer>
      <BrandStuff>
        "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
        incididunt
        <br />
        eiusmod tempor incididunt
      </BrandStuff>
      <HorizontLine />
      <ListStyled>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/?lang=uk">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.google.com/">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="https://www.pinterest.com/">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </ListStyled>

      <BottomPanel>
        <TextCopyRight>@Copiright 2016 | Privacy | Policy</TextCopyRight>
        <TextDesigned>Designed By WEB Domus Italia - Web Agency</TextDesigned>
      </BottomPanel>
    </StyledFooter>
  );
};

export default Footer;
