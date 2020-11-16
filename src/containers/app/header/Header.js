import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  StyledHeader,
  ListStyled,
  TelephoNumber,
  AuthorizationStyled,
  AuthorisationText,
  AuthorisationDelimater,
} from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
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
      <TelephoNumber>Give us a call : +6666666666</TelephoNumber>

      <AuthorizationStyled>
        <AuthorisationText>
          <a href="#">LOGIN</a>
        </AuthorisationText>
        <AuthorisationDelimater />
        <AuthorisationText>
          <a href="#">REGISTER</a>
        </AuthorisationText>
      </AuthorizationStyled>
    </StyledHeader>
  );
};

export default Header;
