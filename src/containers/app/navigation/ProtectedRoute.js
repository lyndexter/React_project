import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component,
  path,
  exact = false,
  redirect = null,
}) => {
  let isAuth = false;
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (username != null && password != null) {
    isAuth = true;
  }

  return (
    <Route path={path} exact={exact}>
      {isAuth ? component : redirect ? redirect : <Redirect to="/login" />}
    </Route>
  );
};

export default ProtectedRoute;
