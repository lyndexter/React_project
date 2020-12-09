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
  ButtonLogOut,
} from "./Header.styled";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  let isAuth = false;
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (username != null && password != null) {
    isAuth = true;
  }

  const goToResource = (name) => {
    history.push(`/${name}`);
  };

  const logout = () => {
    localStorage.clear();
    history.push("/login");
    history.go(0);
  };

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
      {isAuth ? (
        <ButtonLogOut onClick={logout}>Log out</ButtonLogOut>
      ) : (
        <AuthorizationStyled>
          <AuthorisationText>
            <a onClick={() => goToResource("login")}>LOGIN</a>
          </AuthorisationText>
          <AuthorisationDelimater />
          <AuthorisationText>
            <a onClick={() => goToResource("register")}>REGISTER</a>
          </AuthorisationText>
        </AuthorizationStyled>
      )}
    </StyledHeader>
  );
};

export default Header;
