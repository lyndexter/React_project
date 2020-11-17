import React from "react";
import Heading from "./../heading/Heading";
import Catalog from "./../catalog/Catalog";
import CatalogNews from "./../catalog/SecondCatalog";
import {
  MenuStyled,
  MenuItem,
  LogoImage,
  ContainerStyled,
} from "./Navigation.styled";
import logo from "../../../images/logo.png";
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
        </MenuStyled>
        <Switch>
          <Route path="/category">
            <div>It's category and now there is nothing</div>
          </Route>
          <Route path="/card">
            <div>It's card and now there is nothing</div>
          </Route>
          <Route path="/">
            <Heading />
            <Catalog />
            <CatalogNews />
          </Route>
        </Switch>
      </Router>
    </ContainerStyled>
  );
};

export default Navigation;
