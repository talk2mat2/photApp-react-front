/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";
import "./SignupStyle.css";

const SignUp = () => {
  useEffect(() => {
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);
  return (
    <div className="onepage" data-spy="scroll" data-target=".navbar">
      <section id="home" className="pt-0 mt-0">
        <div className="form-wrap" id="sign-up">
          {/* <p style="text-align:center; font-size: 20px; color: #fff;"><a href="index.html " style="color: #fff;">Ogaphotos</a></p>  */}
          <a
            className="nav-link scroll"
            href="index.html"
            style={{
              textAlign: "center",
              marginTop: "-10p",
              marginBottom: "-20px",
            }}
          >
            <img
              src="media/ogaphotos_favicon.png"
              width={80}
              height={80}
              alt="img"
            />
          </a>
          <form>
            <div className="sign-up-heading">
              <h4 className="headings">
                <a href="#sign-up" className="su" id="sup" onclick="signUp()">
                  {" "}
                  SIGN UP{" "}
                </a>
              </h4>
              <h4 className="heading">
                <a href="#login" id="log" onclick="login()">
                  {" "}
                  LOGIN
                </a>{" "}
              </h4>
            </div>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone No." required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="submit" defaultValue="Sign Up" />
            <p style={{ color: "#fff" }}>
              Already have an account?{" "}
              <a href="#login" onclick="login()">
                Sign in{" "}
              </a>
            </p>
          </form>
        </div>
        <div className="form-wrap" id="login">
          <a
            className="nav-link scroll"
            href="index.html"
            style={{
              textAlign: "center",
              marginTop: "-10p",
              marginBottom: "-20px",
            }}
          >
            <img
              src="media/ogaphotos_favicon.png"
              width={80}
              height={80}
              alt="img"
            />
          </a>
          <form>
            <div className="sign-up-heading">
              <h4 className="headings">
                <a href="#sign-up" className="su" onclick="signUp()" id="sup2">
                  {" "}
                  SIGN UP{" "}
                </a>
              </h4>
              <h4 className="headings">
                <a href="#login" id="log2" onclick="login()">
                  {" "}
                  LOGIN
                </a>{" "}
              </h4>
            </div>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="submit" defaultValue="Login" />
            <p style={{ color: "#fff" }}>
              Don't have an account? <a href="sign_up.html">Sign Up </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
