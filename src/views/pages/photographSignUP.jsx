/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Scripts } from "../../script";
import Loginpage from "./LoginPage";
import Singuppage from "./SignUppage";
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import "./SignupStyle.css";
import { Route, Switch, Link } from "react-router-dom";
import PhotographysignUppage from "./photography_sign-up_page";
import PhotographerLoginpage from './PhotographerLoginPage'

const PhotoSignUp = (props) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const { match } = props;
  const history = useHistory();
  useEffect(() => {
    CurrentUser&&history.push('/dashboard')
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, [CurrentUser]);
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
            <PhotographerLoginpage handleSignUpPage={handleSignUpPage} />
          </Route>
          <Route path={`${match.url}/signup`}>
            <PhotographysignUppage handleLoginPage={handleLoginPage} />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default PhotoSignUp;
