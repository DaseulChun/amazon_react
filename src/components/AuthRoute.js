import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = props => {
  const {
    isAuthenticated = false,
    render,
    component: Component,
    ...restProps
  } = props;

  return (
    <Route
      {...restProps}
      render={routeProps => {
        if (isAuthenticated) {
          // You can use any variable that is assigned a component
          // function and render using JSX as follows:
          //   if (typeof render === "function") {
          //     return render(routeProps);
          //   } else {
          return <Component {...routeProps} />;
          //   }
        } else {
          return <Redirect to="/sign_in" />;
        }
      }}
    />
  );
}

export default AuthRoute;
