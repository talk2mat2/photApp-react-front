/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import languageJson from "../../config/language";
import AlertDialog from "../../components/AlertDialog";
import { clearSignupError, signUp } from "../../actions/authactions";
import axios from "axios";
import { LOGINSUCCESS } from "../../redux/action";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  background-color: #f1f0f0;
  min-height: 100vh;
  //   align-items: center;
  //   display: flex;
  //   flex-direction: column;
  //   width: 100%;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  background-color: #ffff;
`;
const SelectContentContainer1 = styled.div`
  min-height: 400px;
  width: 30%;

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
  font-size: 20px;
  font-weight: 600;
  color: grey;
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
  width: 100%;
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
      color: grey;
    }
  }
`;
const VerticalDivider = styled.div`
  height: 400px;
  width: 10px;
  @media (max-width: 630px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 90%;
  border: none;
  color: grey;

  background-color: #ffff;

  border-bottom: 1px solid grey;
  height: 40px;

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
    width: 200px;
    color: #ffff;
    margin-top:20px;
 border-radius:20px;
 &:hover {
    color: rgb(71, 178, 228);
    background-color: white;
    border: 1px solid rgb(71, 178, 228);
  }
`;

const PhotoGrapherSignup = (props) => {
  // const auth = useSelector((state) => state.auth);
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
  const [mylocation, setMylocation] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleFnameChange = (e) => setFname(e.target.value);
  const handleLnameChange = (e) => setLname(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfPasswordChange = (e) => setConfPassword(e.target.value);
  const option = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    if (mylocation === null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMylocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // alert(position.coords.latitude)
        },
        (err) => console.log(err),
        option
      );
    }
  }, []);
  const handleSignup = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/photographer/Register`, values)
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

    if (!email || !password || !fname || !lname || !mobile) {
      return setErrorMessage("Error, all fields are required");
    }
    if (password !== confpass) {
      return setErrorMessage("Both password dont match");
    }
    //  updateMyLocation
    // dispatch(signUp(email, password, mobile, fname, lname));handle
    if (mylocation) {
      handleSignup({
        email,
        password,
        fname,
        lname,
        mobile,
        lat: mylocation.lat,
        lng: mylocation.lng,
      });
    } else {
      handleSignup({ email, password, fname, lname, mobile });
    }
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
      <Margin />

      <div
        style={{
          backgroundColor: "#ffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Margin />
        <BigText>
          Lest know Your kind of{" "}
          <BigText style={{ color: "rgb(71, 178, 228)" }}>photographer</BigText>
          .
        </BigText>

        <SelectContainer>
          <SelectContentContainer1>
            <Listing>
              <li>
                <small>first Name *</small>
                <br />
                <Input
                  onChange={handleFnameChange}
                  value={fname}
                  type="text"
                  required
                />
              </li>
              <li>
                <small>Last Name *</small>
                <br />
                <Input
                  onChange={handleLnameChange}
                  value={lname}
                  type="text"
                  required
                />
              </li>
              <li>
                <small>Phone Number *</small>
                <br />
                <Input
                  onChange={handleMobileChange}
                  value={mobile}
                  type="tel"
                  required
                />
              </li>
              <li>
                <small>Email *</small>
                <br />
                <Input
                  onChange={handleEmailChange}
                  value={email}
                  type="email"
                  required
                />
              </li>
            </Listing>
          </SelectContentContainer1>
          <VerticalDivider />
          <SelectContentContainer1>
            <Listing>
              <li>
                <small>Password *</small>
                <br />
                <Input
                  onChange={handlePasswordChange}
                  value={password}
                  type="password"
                  required
                />
              </li>
              <li>
                <small>Confirm Password *</small>
                <br />
                <Input
                  onChange={handleConfPasswordChange}
                  value={confpass}
                  type="password"
                  required
                />
              </li>
              <li>
                <small>Instgram</small>
                <br />
                <Input />
              </li>
              <li>
                <small>Website</small>
                <br />
                <Input />
              </li>
            </Listing>
          </SelectContentContainer1>
        </SelectContainer>
        <Buttons variant="outlined" color="secondary" onClick={handleSubmit}>
          {loading ? (
            <CircularProgress
              size={24}
              style={{ fontSize: 20, color: "white" }}
            />
          ) : (
            <small> SignUp</small>
          )}
        </Buttons>
        <Margin />
      </div>
      <AlertDialog open={ErrorMessage} onClose={handleClose}>
        {ErrorMessage}
      </AlertDialog>
    </Container>
  );
};

export default PhotoGrapherSignup;
