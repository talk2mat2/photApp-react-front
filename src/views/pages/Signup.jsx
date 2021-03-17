/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Scripts } from "../../script";
import Loginpage from "./LoginPage";
import Singuppage from "./SignUppage";
import { useHistory } from "react-router-dom";
import "./SignupStyle.css";
import { Route, Switch, Link } from "react-router-dom";

const SignUp = (props) => {
  const { match } = props;
  const history = useHistory();
  useEffect(() => {
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);
  const handleSignUpPage = () => {
    history.push(`${match.url}/signup`);
  };
  const handleLoginPage = () => {
    history.push(match.url);
  };
  return (
    <div className="onepage" data-spy="scroll" data-target=".navbar">
      <section id="home" className="pt-0 mt-0">
        <Switch>
          <Route exact path={match.url}>
            <Loginpage handleSignUpPage={handleSignUpPage} />
          </Route>
          <Route path={`${match.url}/signup`}>
            <Singuppage handleLoginPage={handleLoginPage} />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default SignUp;
