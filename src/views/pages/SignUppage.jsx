/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn, clearLoginError } from "../../actions/authactions";
import languageJson from "../../config/language";
import AlertDialog from "../../components/AlertDialog";
import { clearSignupError, signUp } from "../../actions/authactions";
import axios from "axios"
import {LOGINSUCCESS} from "../../redux/action"
import CircularProgress from '@material-ui/core/CircularProgress'

const Singuppage = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [confpass, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('')



  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleFnameChange = (e) => setFname(e.target.value);
  const handleLnameChange = (e) => setLname(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfPasswordChange = (e) => setConfPassword(e.target.value);

const handleSignup=(values)=>{
  setLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/Register`, values)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          history.push("/dashboard");
          dispatch(LOGINSUCCESS(res.data));
        })
        .catch((err) => {
          setLoading(false);
          if (err.response) {
            console.log(err.response.data.message);
            err.response.data.message &&
              setErrorMessage(err.response.data.message);
          }
          console.log(err);
        })
}

  const handleSubmit = (e) => {
    e.preventDefault();
 if(password !==confpass){
   return setErrorMessage('Both password dont match')}
    // dispatch(signUp(email, password, mobile, fname, lname));handle
    handleSignup({email,password,fname,lname,mobile})
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setConfPassword("");
    setFname("");
    setLname("");
    setMobile("");
    // dispatch(clearSignupError());
    setErrorMessage('')
  };
  return (
    <div className="form-wrap" id="sign-up">
      {/* <p style="text-align:center; font-size: 20px; color: #fff;"><a href="index.html " style="color: #fff;">Ogaphotos</a></p>  */}
      <Link
        className="nav-link scroll"
        to="/"
        style={{
          textAlign: "center",
          marginTop: "-10p",
          marginBottom: "-20px",
        }}
      >
        <img
          src="/media/ogaphotos_favicon.png"
          width={80}
          height={80}
          alt="img"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-heading">
          <h4 className="headings">
            <Link href="#sign-up" className="su" id="sup" onclick="signUp()">
              {" "}
              SIGN UP{" "}
            </Link>
          </h4>
          <h4 className="heading">
            <Link onClick={() => props.handleLoginPage()} id="log" onclick="login()">
              {" "}
              LOGIN
            </Link>{" "}
          </h4>
          {loading? <CircularProgress size={24} style={{fontSize:20,color:"white",position:"absolute",zIndex:3,marginLeft:"auto",marginRight:"auto",top:4}} />:null}
        </div>
        <input
          onChange={handleFnameChange}
          value={fname}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          onChange={handleLnameChange}
          value={lname}
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          onChange={handleMobileChange}
          value={mobile}
          type="tel"
          placeholder="Phone No."
          required
        />
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <input
          onChange={handleConfPasswordChange}
          value={confpass}
          type="password"
          placeholder="Confirm Password"
          required
        />
        <input onch type="submit" defaultValue="Sign Up" />
        <p style={{ color: "#fff" }}>
          Already have an account?{" "}
          <Link onClick={() => props.handleLoginPage()}>Sign in </Link>
        </p>
        <Link to="photographer/signup"><small>
         Sign Up as A photographer{" "}
         
        </small></Link>
      </form>
      <AlertDialog open={ErrorMessage} onClose={handleClose}>
      {ErrorMessage}
      </AlertDialog>
    </div>
  );
};

export default Singuppage;
