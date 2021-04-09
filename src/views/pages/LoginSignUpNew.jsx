/* eslint-disable prettier/prettier */

import React from "react";
import styled from "styled-components";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
const SelectContentContainer = styled.div`
  min-height: 400px;
  width: 48%;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  text-align: center;

  @media (max-width: 630px) {
    width: 100vw;
  }
`;
const VerticalDivider = styled.div`
  height: 400px;
  width: 1px;
  background-color: silver;
  @media (max-width: 630px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  max-height: 400px;
  #image1 {
    max-height: 80%;
    object-fit: contain;
    border-radius: 10px;
    margin: 4px;
  }
  @media (max-width: 545px) {
    #image1 {
      max-height: 200px;
      object-fit: contain;
      border-radius: 10px;
      margin: 4px;
    }
  }
`;
const BigText = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: black;
`;
const SmallText = styled.p`
  font-size: 15px;
  font-weight: 200;
  color: grey;
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
    color: rgb(71, 178, 228);
    background-color: white;
    border: 1px solid rgb(71, 178, 228);
  }
`;
const Margin = styled.div`
  height: 30px;
`;
const LoginSignUpNew = () => {
  return (
    <Container>
      <SelectContainer>
        <SelectContentContainer>
          <Margin />
          <BigText>I am a client</BigText>
          <SmallText>and I want to order a shoot</SmallText>
          <Link to="/ClientSignUp">
            <Buttons variant="outlined" color="secondary">
              <small> SignUp</small>
            </Buttons>
          </Link>
          <Margin />
          <Margin />
          <ImageContainer>
            <img id="image1" src="media/model7.jpg" alt="model" />
            <img id="image1" src="media/family1.jpg" alt="model" />
          </ImageContainer>
        </SelectContentContainer>
        <VerticalDivider />
        <SelectContentContainer>
          <Margin />
          <BigText>I am a photographer</BigText>
          <SmallText>and I'm looking for assignments</SmallText>
          <Link to="/PhotoGrapherSignup">
            <Buttons variant="outlined" color="secondary">
              <small> SignUp</small>
            </Buttons>
          </Link>
          <Margin />
          <Margin />
          <ImageContainer>
            <img id="image1" src="media/family3.jpg" alt="model" />
            <img id="image1" src="media/photographer.jpg" alt="model" />
          </ImageContainer>
        </SelectContentContainer>
      </SelectContainer>
    </Container>
  );
};

export default LoginSignUpNew;
