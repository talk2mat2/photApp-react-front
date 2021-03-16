/* eslint-disable prettier/prettier */
// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authactions";
// import { useDispatch } from 'react-redux';
// import { signOut } from '../actions/authactions';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(signOut());
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
          <a className="nav-link scroll" href="#home">
            <img
              src="media/ogaphotos_favicon.png"
              width="80"
              height="80"
              alt="img"
            />
          </a>

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link scroll"
                href="/"
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
              <Link
                className="nav-link scroll"
                to="/SignUp"
                style={{ color: "#000" }}
              >
                Login/Sign UP
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                href="sign_up.html"
                style={{ color: "#000" }}
              >
                <button className="signup">Hire A Photographer</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
