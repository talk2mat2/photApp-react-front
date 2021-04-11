/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  min-width: 250px;
  height: 300px;
  background-color: white;
  cursor: pointer;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;

  @media (max-width: 768px) {
    // width: 200px;
    // height: 250px;
    width: 180px;
    height: 220px;
  }
`;
const H3 = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  position: absolute;
  top: 0;
  z-index: 1;
`;
const ImgDiv = styled.div`
  height: 90%;
  width: 90%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const P = styled.p`
  color: grey;
  font-size: 14px;
  margin-bottom: 0.3px;
  font-weight: 600;
`;

export const CardProductLanding = (props) => {
  return (
    <Div>
      {/* <ImgDiv> */}
      <img
        src={props.imagesrc}
        style={{
          objectFit: "cover",

          height: "100%",
        }}
        alt="img"
      />
      {/* </ImgDiv> */}
    </Div>
  );
};

export default CardProductLanding;
