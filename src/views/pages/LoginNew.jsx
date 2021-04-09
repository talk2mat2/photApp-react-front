/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
// import { Scripts } from "../../scriptNew";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AlertDialog from "../../components/AlertDialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { LOGINSUCCESS } from "../../redux/action";
const Container = styled.div`
  min-height: 100vh;
  background-color: #ffff;
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
  color: black;
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
  width: 75%;
  padding: 0px;
  align-items: center;

  li {
    padding: 0px;
    list-style: none;
    width: 100%;
    margin-bottom: 13px;
    text-align: left;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #ffff;
  height: 50px;
  border-bottom: 1px solid grey;
  &:focus {
    border-bottom: 1px solid blue;
    outline: none;
  }
`;
const Buttons = styled(Button)`
  && {
      border:none;
    background-color: rgb(71, 178, 228);
    margin-top: 8px;
    width: 100px;
    color: #ffff;
    margin-top:20px;
 border-radius:20px;
 &:hover {
    // color: rgb(71, 178, 228);
    // background-color: white;
    // border: 1px solid rgb(71, 178, 228);
    background-color: rgb(71, 178, 228);
    color: #ffff;
  }
`;
const PhotoGrapherLoginNew = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/Login`, values)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        // setIsregistered(true)
        // history.push('/dashboard')
        dispatch(LOGINSUCCESS(res.data));
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          setErrorMessage(err.response.data.message);
          console.log(err.response.data.message);
          // err.response.data.message &&

          // err.response.data.error && setIsregistered(false)
        } else {
          setErrorMessage(
            "An error occured ,make sure you have a working network"
          );
        }
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setErrorMessage("Both fields are required");
    }

    handleLogin({ email, password });
    // dispatch(signIn(email, password));
    console.log(email, password);
  };
  const handleClose = () => {
    setEmail("");
    setPassword("");
    setErrorMessage("");
    // dispatch(clearLoginError())
  };
  return (
    <Container>
      <SelectContainer>
        <SelectContentContainer1>
          <Margin />
          <BigText> Client Log in</BigText>
          <Listing>
            <li>
              <small>Email</small>
              <br />
              <Input
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
            </li>
            <li>
              <small>Password</small>
              <br />
              <Input
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </li>
            <li style={{ textAlign: "center" }}>
              <Buttons
                variant="outlined"
                color="secondary"
                onClick={handleSubmit}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    style={{
                      fontSize: 20,
                      color: "white",
                    }}
                  />
                ) : (
                  <small> Login</small>
                )}
              </Buttons>
            </li>
            <li style={{ textAlign: "center" }}>
              <small style={{ color: "rgb(71, 178, 228)" }}>
                <Link to="/LoginSignUpNew"> Not Yet Registered ?</Link>
              </small>
            </li>
            <li style={{ textAlign: "left" }}>
              <p style={{ color: "grey" }}>
                <Link to="/PhotoGrapherLoginNew"> I am a photographer ?</Link>
              </p>
            </li>
          </Listing>
          <AlertDialog open={ErrorMessage} onClose={handleClose}>
            {ErrorMessage}
          </AlertDialog>
        </SelectContentContainer1>
        <SelectContentContainer2>
          <img loginImage src="media/v10.jpg" alt="img" />
        </SelectContentContainer2>
      </SelectContainer>
    </Container>
  );
};

export default PhotoGrapherLoginNew;
