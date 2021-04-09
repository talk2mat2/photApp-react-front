/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// import Login from "../views/Login";
// import ErrorPage from "../views/ErrorPage";
import Homepage from "../views/pages/HomepageNew";
import LoginNew from "../views/pages/LoginNew";
import PhotoGrapherLoginNew from "../views/pages/PhotoGrapherLoginNew";
// import About from "../views/pages/About";
// import Services from "../views/pages/ServicesPage";
// import Contact from "../views/pages/ContactPage";
// import Blog from "../views/pages/BlogPage";
// import Register from "../views/Register";
// import ForgotPassword from "../views/ForgotPassword";
import Dashboard from "../views/users/Dashboard";
import GuestRoute from "./GuestRoute";
import LoginSignUpNew from "../views/pages/LoginSignUpNew";
import ClientSignUp from "../views/pages/ClientSignUp";
import PhotoGrapherSignup from "../views/pages/PhotoGrapherSignup";
// import Delivery from "../views/users/Delivery";
import Looking from "../views/users/Looking";
import Profile from "../views/users/Profile";
import Promos from "../views/users/Promos";
import TransEat from "../views/users/TransEat";
import Trips from "../views/users/Trips";
import Wallet from "../views/users/Wallet";
import Support from "../views/users/Support";
import FoodOrderHistory from "../views/users/FoodOrderHistory";
import Header from "./headerNew";
// import CourierHistory from "../views/users/CourierHistory";
// import SignUp from "../views/pages/Signup";
// import How_it_works from "../views/pages/how_it_works";
// import Portfolio from "../views/pages/portfolio";
// import PhotoSignUp from "../views/pages/photographSignUP";

function BaseRoute() {
  return (
    <>
      <Switch>
        <ProtectedRoute exact component={Dashboard} path="/dashboard" />
        {/* <ProtectedRoute exact component={Delivery} path="/delivery" /> */}
        <ProtectedRoute exact component={Looking} path="/looking" />
        <ProtectedRoute exact component={Profile} path="/profile" />
        <ProtectedRoute exact component={Promos} path="/promos" />
        <ProtectedRoute component={TransEat} path="/trans_eat" />
        <ProtectedRoute component={Trips} path="/trips" />
        <ProtectedRoute exact component={Wallet} path="/wallet" />
        <ProtectedRoute component={Support} path="/support" />
        <ProtectedRoute component={FoodOrderHistory} path="/eats" />
        {/* <ProtectedRoute exact component={CourierHistory} path="/couriers" /> */}

        {/* <GuestRoute exact component={About} path="/about" /> */}
        {/* <GuestRoute exact component={Services} path="/service" /> */}
        {/* <GuestRoute exact component={Contact} path="/contact" />
        <GuestRoute exact component={How_it_works} path="/How_it_works" /> */}
        {/* <GuestRoute exact component={Blog} path="/blog" /> */}
        {/* <GuestRoute component={Register} path="/register" /> */}
        {/* <GuestRoute component={Login} path='/login' /> */}
        {/* <GuestRoute component={SignUp} path="/SignUp" />
        <GuestRoute component={PhotoSignUp} path="/photographer" /> */}

        {/* <GuestRoute component={Login} path="/Login" /> */}
        {/* <GuestRoute component={Portfolio} path="/Portfolio" />

        <GuestRoute component={ForgotPassword} path="/forgot_password" /> */}
        {/* <GuestRoute exact component={Homepage} path="/" /> */}

        {/* working from this line */}
        <>
          <Header />
          <div style={{ height: "60px" }} />
          <GuestRoute exact component={Homepage} path="/" />
          <GuestRoute exact component={LoginSignUpNew} path="/LoginSignUpNew" />
          <GuestRoute exact component={LoginNew} path="/login" />
          <GuestRoute
            exact
            component={PhotoGrapherLoginNew}
            path="/PhotoGrapherLoginNew"
          />
          <GuestRoute exact component={ClientSignUp} path="/ClientSignUp" />
          <GuestRoute
            exact
            component={PhotoGrapherSignup}
            path="/PhotoGrapherSignup"
          />
          {/* <Route path="*" component={ErrorPage} /> */}
        </>
      </Switch>
    </>
  );
}

export default BaseRoute;
