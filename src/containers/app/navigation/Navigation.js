import React from "react";
import Home from "../home/Home";
import Catalog from "../catalog/catalogView/Catalog";
import Item from "../catalog/itemView/Item";
import Cart from "../cart/cartPage/Cart";
import Footer from "../footer/Footer";
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
import Checkout from "../cart/checkout/Checkout";
import Success from "../cart/success/Success";

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
              to="/catalog"
              activeClassName="selected"
              style={{ textDecoration: "none", color: "#313943" }}
            >
              catalog
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              exact
              to="/cart"
              activeClassName="selected"
              style={{ textDecoration: "none", color: "#313943" }}
            >
              CART
            </NavLink>
          </MenuItem>
          <NavLink
            exact
            to="/category"
            activeClassName="selected"
            style={{ textDecoration: "none", color: "#313943" }}
          ></NavLink>
        </MenuStyled>
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/contact">
            <div>
              contact us <br /> in this page is info how to contact with us
            </div>
          </Route>
          <Route path="/about">
            <div>
              about us <br /> in this page is info about us
            </div>
          </Route>
          <Route path="/news">
            <div>
              news <br /> in this page is info
            </div>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContainerStyled>
  );
};

export default Navigation;
