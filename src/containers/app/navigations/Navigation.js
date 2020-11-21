import React from "react";
import Home from "../Home/Home";
import Catalog from "../catalog/Catalog";
import {
  MenuStyled,
  MenuItem,
  LogoImage,
  ContainerStyled,
} from "./Navigation.styled";
import logo from "../../../images/logo.svg";
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
        <MenuStyled>
          <LogoImage src={logo} />

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
              catalog
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
        </MenuStyled>
        <Switch>
          <Route path="/category">
            <Catalog />
          </Route>
          <Route path="/card">
            <div>It's card and now there is nothing</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ContainerStyled>
  );
};

export default Navigation;
