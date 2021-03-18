/* eslint-disable prettier/prettier */
// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authactions";
import PersonIcon from '@material-ui/icons/Person';
import {LOGINOUTUSER} from '../redux/action'


// import { useDispatch } from 'react-redux';
// import { signOut } from '../actions/authactions';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;

  const LogOut = () => {
    dispatch(LOGINOUTUSER());
  };
  return (
    <nav
      className="navbar transparent absolute nav-wrapper-dark inverse-text navbar-expand-lg text-uppercase"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">
            <a href="index.html">
              <img
                src="#"
                srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-hamburger ml-auto d-lg-none d-xl-none">
            <button
              className="hamburger animate"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse">
          <Link className="nav-link scroll" to="/">
            <img
              src="media/ogaphotos_favicon.png"
              width="80"
              height="80"
              alt="img"
            />
          </Link>

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link scroll"
                to="/"
                style={{ color: "#000" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scroll"
                to="about"
                style={{ color: "#000" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scroll"
                to="/How_it_works"
                style={{ color: "#000" }}
              >
                How It Works
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link scroll dropdown-toggle"
                to="/Portfolio"
                style={{ color: "#000" }}
              >
                Portfolio
              </Link>
              <ul className="dropdown-menu dropdown-menu-left">
                <li className="nav-item">
                  <a className="dropdown-item scroll" href="#portfolio">
                    Portrait Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item scroll" href="#portfolio2">
                    Advertorial Portfolio
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link scroll"
                to="/contact"
                style={{ color: "#000" }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
           {!CurrentUser?<Link
                className="nav-link scroll"
                to="/SignUp"
                style={{ color: "#000" }}
              >
                Login/Sign UP
              </Link>:<Link style={{ color: "#000" }} className="nav-link scroll" to="/dashboard">{`${userData.fname||userData.Email}`}</Link>}
            </li>
            <li className="nav-item">
              <Link
                className="nav-link scroll"
                to="/signUp"
                style={{ color: "#000" }}
              >
                <button className="signup">Hire A Photographer</button>
              </Link>
            </li>
            {CurrentUser?<li className="nav-item">
              <Link onClick={LogOut}
                className="nav-link scroll"
                to="/"
                style={{ color: "#000" }}
              >
                logout
              </Link>
            </li>
            :null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
