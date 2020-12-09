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
import Login from "../entrance/login/Login";
import Register from "../entrance/register/Register";
import Header from "../header/Header";
import ProtectedRoute from "./ProtectedRoute";
import Heading from "../home/heading/Heading";

const Navigation = () => {
  return (
    <ContainerStyled>
      <Router>
        <Header />
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
          <ProtectedRoute component={<Catalog />} path={"/catalog"} />
          <ProtectedRoute component={<Cart />} path={"/cart"} />
          <ProtectedRoute component={<Item />} path={"/item"} />

          <ProtectedRoute
            component={
              <div>
                contact us <br /> in this page is info how to contact with us
              </div>
            }
            path={"/contact"}
          />
          <ProtectedRoute
            component={
              <div>
                about us <br /> in this page is info about us
              </div>
            }
            path={"/about"}
          />
          <ProtectedRoute
            component={
              <div>
                news <br /> in this page is info
              </div>
            }
            path={"/news"}
          />
          <ProtectedRoute component={<Checkout />} path={"/checkout"} />
          <ProtectedRoute component={<Success />} path={"/success"} />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute
            component={<Home />}
            path={"/"}
            exact
            redirect={<Heading />}
          />
        </Switch>
        <Footer />
      </Router>
    </ContainerStyled>
  );
};

export default Navigation;
