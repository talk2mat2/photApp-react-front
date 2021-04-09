/* eslint-disable prettier/prettier */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function GuestRoute({ component: Component, ...rest }) {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;
  const history = useHistory();

  React.useEffect(() => {
    if (userData) history.push("/dashboard");
  }, [userData]);
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
}

export default GuestRoute;
