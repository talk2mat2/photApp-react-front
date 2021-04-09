/* eslint-disable prettier/prettier */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { Scripts } from "./scriptNew";

function ProtectedRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.auth);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  React.useEffect(() => {
    const loadScript = async () => {
      await Scripts.forEach(async (item) => {
        const script = document.createElement("script");
        script.src = item.src;
        // script.async = true;

        document.body.appendChild(script);
      });
    };
    loadScript();
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        // auth.info
        CurrentUser ? (
          <ResponsiveDrawer>
            <Component {...props} />
          </ResponsiveDrawer>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default ProtectedRoute;
