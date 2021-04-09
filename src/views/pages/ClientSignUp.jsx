/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn, clearLoginError } from "../../actions/authactions";
import languageJson from "../../config/language";
import AlertDialog from "../../components/AlertDialog";
import { clearSignupError, signUp } from "../../actions/authactions";
import axios from "axios";
import { LOGINSUCCESS } from "../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  background-color: rgb(71, 178, 228);
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
const SelectContentContainer1 = styled.div`
  min-height: 400px;
  width: 39%;

  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  //   background-color: #ffff;
  text-align: center;

  @media (max-width: 630px) {
    width: 100vw;
  }
`;
const BigText = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #ffff;
`;
const SelectContentContainer2 = styled.div`
  background-color: #ffff;
  min-height: 400px;
  width: 60%;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  //   background-color: #ffff;
  text-align: center;

  @media (max-width: 630px) {
    display: none;
  }

  #loginImage {
    max-height: 95%;
    object-fit: contain;
    border-radius: 10px;
    margin: 4px;
  }
`;
const Margin = styled.div`
  height: 30px;
`;
const Listing = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 0px;
  align-items: center;
  @media (max-width: 630px) {
    width: 95%;
  }

  li {
    padding: 0px;
    list-style: none;
    width: 100%;
    margin-bottom: 13px;
    text-align: left;
    small {
      color: #fef0db;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  color: #ffff;
  background-color: rgb(71, 178, 228);
  height: 30px;
  border-bottom: 1px solid #ffff;
  &:focus {
    border-bottom: 1px solid blue;
    outline: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px rgb(71, 178, 228) inset !important;
  }
`;
const Buttons = styled(Button)`
  && {
    border: none;
    background-color: #ffff;
    margin-top: 8px;
    width: 300px;
    color: rgb(71, 178, 228);
    margin-top: 20px;
    border-radius: 20px;
    small {
      color: rgb(71, 178, 228);
    }
    &:hover {
      color: rgb(71, 178, 228);
      background-color: white;
      border: 1px solid rgb(71, 178, 228);
    }
  }
`;
const ClientSignUp = (props) => {
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
  const [ErrorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleFnameChange = (e) => setFname(e.target.value);
  const handleLnameChange = (e) => setLname(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfPasswordChange = (e) => setConfPassword(e.target.value);

  const handleSignup = (values) => {
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
        setErrorMessage(
          "An error occured ,make sure you have a working network"
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confpass) {
      return setErrorMessage("Both password dont match");
    }
    if (!email || !password || !fname || !lname || !mobile) {
      return setErrorMessage("Error, all fields are required");
    }
    // dispatch(signUp(email, password, mobile, fname, lname));handle
    handleSignup({ email, password, fname, lname, mobile });
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setConfPassword("");
    setFname("");
    setLname("");
    setMobile("");
    // dispatch(clearSignupError());
    setErrorMessage("");
  };

  return (
    <Container>
      <Listing>
        <BigText>I am a client</BigText>
        <li>
          <small>First Name</small>
          <br />
          <Input
            autoComplete="off"
            onChange={handleFnameChange}
            value={fname}
            type="text"
            placeholder="First Name"
            required
          />
        </li>
        <li>
          <small>Last Name</small>
          <br />
          <Input
            autoComplete="off"
            onChange={handleLnameChange}
            value={lname}
            type="text"
            placeholder="Last Name"
            required
          />
        </li>
        <li>
          <small>Email</small>
          <br />
          <Input
            autoComplete="off"
            onChange={handleEmailChange}
            value={email}
            type="email"
            placeholder="Email"
            required
          />
        </li>
        <li>
          <small>Mobile</small>
          <br />
          <Input
            autoComplete="off"
            onChange={handleMobileChange}
            value={mobile}
            type="tel"
            placeholder="Phone No."
            required
          />
        </li>
        <li>
          <small>Password</small>
          <br />
          <Input
            onChange={handlePasswordChange}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
        </li>
        <li>
          <small>Confirm Password</small>
          <br />
          <Input
            onChange={handleConfPasswordChange}
            value={confpass}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </li>
        <li style={{ textAlign: "center" }}>
          <Buttons variant="outlined" color="secondary" onClick={handleSubmit}>
            {loading ? (
              <CircularProgress
                size={24}
                style={{
                  fontSize: 20,
                  color: " rgb(71, 178, 228)",
                }}
              />
            ) : (
              <small> Sign-Up</small>
            )}
          </Buttons>
        </li>
        <li style={{ textAlign: "center" }}>
          <small style={{ color: "#fffff" }}> Already registered?</small>
        </li>
      </Listing>
      <AlertDialog open={ErrorMessage} onClose={handleClose}>
        {ErrorMessage}
      </AlertDialog>
    </Container>
  );
};

export default ClientSignUp;
