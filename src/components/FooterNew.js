/* eslint-disable prettier/prettier */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h4>Company and team</h4>
              <div className="menu-inner menu-inner-vertical">
                <ul>
                  <li>
                    <a href="#">Company details and team</a>
                  </li>
                  <li>
                    <a href="#">News and blog</a>
                  </li>
                  <li>
                    <a href="#">Press area</a>
                  </li>
                  <li>
                    <a href="#">Affiliates and marketing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Help and support</h4>
              <div className="menu-inner menu-inner-vertical">
                <ul>
                  <li>
                    <a href="#">Help centre</a>
                  </li>
                  <li>
                    <a href="#">Feedbacks</a>
                  </li>
                  <li>
                    <a href="#">Request new features</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Learn more</h4>
              <div className="menu-inner menu-inner-vertical">
                <ul>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Privacy and terms</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Follow us</h4>
              <div className="icon-links icon-social icon-links-grid social-colors">
                <a className="facebook">
                  <i className="icon-facebook" />
                </a>
                <a className="twitter">
                  <i className="icon-twitter" />
                </a>
                <a className="linkedin">
                  <i className="icon-linkedin" />
                </a>
                <a className="youtube">
                  <i className="icon-youtube" />
                </a>
                <a className="instagram">
                  <i className="icon-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container">
            <span>© 2021 OGAPHOTOS. ALL RIGHTS RESERVED.</span>
            <span>{/* <img src="media/logo-light.svg" alt="" /> */}</span>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="themekit/media/icons/iconsmind/line-icons.min.css"
        />
      </footer>
    </div>
  );
};

export default Footer;
