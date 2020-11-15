import React from "react";
import {
  MenuStyled,
  MenuItem,
  LogoImage,
  ContainerStyled,
} from "./Navigation.styled";
import logo from "../../../icons/logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Navigation = () => {
  return (
    <ContainerStyled>
      <Router>
        <LogoImage src={logo} />

        <MenuStyled>
          <MenuItem>
            <NavLink
              exact
              to="/"
              activeClassName="selected"
              style={{ textDecoration: "none", color: "#313943" }}
            >
              HOME
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              exact
              to="/category"
              activeClassName="selected"
              style={{ textDecoration: "none", color: "#313943" }}
            >
              CATEGORIES
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              exact
              to="/card"
              activeClassName="selected"
              style={{ textDecoration: "none", color: "#313943" }}
            >
              CART
            </NavLink>
          </MenuItem>

          <Switch>
            <Route path="/category">
              <div>It's category and now there is nothing</div>
            </Route>
            <Route path="/card">
              <div>It's card and now there is nothing</div>
            </Route>
            <Route path="/"></Route>
          </Switch>
        </MenuStyled>
      </Router>
    </ContainerStyled>
  );
};

export default Navigation;
