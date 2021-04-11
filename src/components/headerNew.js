/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authactions";
import PersonIcon from "@material-ui/icons/Person";
import { LOGINOUTUSER } from "../redux/action";
import styled from "styled-components";
import { Scripts } from "../scriptNew";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { useHistory } from "react-router-dom";

// import { useDispatch } from 'react-redux';
// import { signOut } from '../actions/authactions';
const LogoDiv = styled.div`
  img {
    max-height: 50px;
    object-fit: contain;
    margin-left: 20px;
    margin-top: 5px;
  }
`;
const MenuIconDiv = styled.div`
  margin-right: 20px;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const Listing = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0;

  flex-direction: column;
  align-items: flex-start;
  width: 98%;
  li {
    display: flex;
    font-size: 16px;
    border-bottom: 0.1px solid silver;
    width: 100%;
    color: black;
    padding: 10px;
  }
`;
const SideNav = styled.div`
  z-index: 7;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  background-color: white;
  right: 0;
  top: 0;
  animation: apper 1s ease;
  animation-iteration-count: 1;
  p {
    font-size: 14px;
    color: #686868;
    font-weight: 600;
    height: 80px;
  }
  @keyframes apper {
    from {
      opacity: 0;
    }
    to {
      top: 1;
    }
  }
`;
const Filter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  position: absolute;
  z-index: 1;
  opacity: 0.6;
  top: 0;
  left: 0;
`;
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userData = CurrentUser && CurrentUser.userData;

  const LogOut = () => {
    dispatch(LOGINOUTUSER());
  };

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
  const history = useHistory();
  const handleOpenSideBar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <nav
      style={{
        zIndex: 200,
        position: "fixed",
        backgroundColor: "#ffff",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      // className="menu-classic menu-transparent menu-fixed menu-one-page align-r5ight"
      data-menu-anima="fade-bottom"
      data-scroll-detect="true"
    >
      {sidebarVisible ? <Filter onClick={handleOpenSideBar} /> : null}
      <LogoDiv>
        <a
          href="./#"
          // onClick={() => {
          //   history.push("/#");
          //   window.location.reload(true);
          // }}
        >
          {" "}
          <img src="media/OgaLogo.png" alt="logo" />
        </a>
      </LogoDiv>
      <div className="container">
        {/* <div className="menu-brand">
          <a href="#">
            <img
              className="logo-default"
              src="media/logo-dark.svg"
              alt="logo"
            />
            <img className="logo-retina" src="media/logo-dark.svg" alt="logo" />
          </a>
        </div> */}

        {!sidebarVisible ? (
          <i
            className="menu-btn"
            onClick={() => {
              handleOpenSideBar();
            }}
          />
        ) : null}
        <div className="menu-cnt">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#reviews">Reviews</a>
            </li>
          </ul>
          <div className="menu-right">
            <div className="menu-custom-area">
              {!CurrentUser ? (
                <>
                  <Link
                    to="/login"
                    className="btn btn-border btn-login btn-xs"
                    href="#"
                  >
                    Login
                  </Link>
                  <Link
                    to="/LoginSignUpNew"
                    className="btn btn-border btn-xs btn-circle"
                    href="#"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <Link
                  to="/"
                  onClick={LogOut}
                  className="btn btn-border btn-login btn-xs"
                >
                  Log out
                </Link>
              )}
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>

      {sidebarVisible ? (
        <SideNav>
          <ClearIcon
            onClick={() => {
              handleOpenSideBar();
            }}
            style={{ alignSelf: "flex-end", margin: "10px" }}
            size={20}
          />

          {/* <Listing>
            <li>WHY NOTES</li>
            <li>
              FEATURES <ArrowDropDownIcon size={14} />
            </li>
            <li>
              PLANS <ArrowDropDownIcon size={14} />
            </li>
            <li>
              {!CurrentUser ? (
                <Link to="/Login">Login </Link>
              ) : (
                <Link to="/">{userdata.Email}</Link>
              )}
            </li>
          </Listing> */}

          <Listing>
            <li onClick={setSidebarVisible.bind(this, false)}>
            <a href="/#">Home</a>
            </li>
            <li onClick={setSidebarVisible.bind(this, false)}>
            <a href="/#pricing">Pricing</a>
            </li>
            <li onClick={setSidebarVisible.bind(this, false)}>
            <a href="/#features">Features</a>
            </li>
            <li onClick={setSidebarVisible.bind(this, false)}>
              <a href="#team">Team</a>
            </li>
            <li onClick={setSidebarVisible.bind(this, false)}>
              <a href="#reviews">Reviews</a>
            </li>
            {!CurrentUser ? (
              <>
                <li>
                  <Link
                    onClick={setSidebarVisible.bind(this, false)}
                    to="/login"
                    className="btn btn-border btn-login btn-xs"
                    href="#"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={setSidebarVisible.bind(this, false)}
                    to="/LoginSignUpNew"
                    className="btn btn-border btn-xs btn-circle"
                    href="#"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setSidebarVisible.bind(false);

                    LogOut();
                  }}
                  className="btn btn-border btn-login btn-xs"
                >
                  Log out
                </Link>
              </li>
            )}
          </Listing>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </SideNav>
      ) : null}
    </nav>
  );
};

export default Header;
