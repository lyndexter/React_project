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
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faPinterest} />
      </ListStyled>
      <TelephoNumber>Give us a call : +6666666666</TelephoNumber>

      <AuthorizationStyled>
        <AuthorisationText>LOGIN</AuthorisationText>
        <AuthorisationDelimater />
        <AuthorisationText>REGISTER</AuthorisationText>
      </AuthorizationStyled>
    </StyledHeader>
  );
};

export default Header;
