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
import { useHistory } from "react-router-dom";

const Footer = () => {
  let history = useHistory();

  const goToResource = (name) => {
    history.push(`/${name}`);
  };

  return (
    <StyledFooter>
      <LogoStyled src={logo} />
      <ContactContainer>
        <ContactText>
          <button onClick={() => goToResource("about")}>about us</button>
        </ContactText>
        <ContactText>
          <button onClick={() => goToResource("catalog")}>catalog</button>
        </ContactText>
        <ContactText>
          <a href="#">Preorder</a>
        </ContactText>
        <ContactText>
          <button onClick={() => goToResource("contact")}>contact us</button>
        </ContactText>
        <ContactText>
          <button onClick={() => goToResource("news")}>recieve our news</button>
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
