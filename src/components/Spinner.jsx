import { Box, styled } from "@mui/material";
import React from "react";

const SpinnerComponent = () => {
  return (
    <Block>
      <Spinner />
      <SpinnerERs />
    </Block>
  );
};

export default SpinnerComponent;

const Block = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.45)",
  position: "absolute",
  zIndex: "9999",
  top: "0",
}));

const Spinner = styled(Box)(() => ({
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  position: "absolute",
  border: "10px solid green",
  animation: "spinX 5s linear infinite",
  top: "35%",
  left: "40%",
  transform: "translate(-50%,-50%)",
  "@keyframes spinX": {
    "0%": {
      transform: "rotateX(0deg)",
    },
    "100%": {
      transform: "rotateX(360deg)",
    },
  },
}));

const SpinnerERs = styled(Box)(() => ({
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  position: "absolute",
  border: "10px solid green", 
  animation: "spinYReverse 5s linear infinite",
  top: "35%",
  left: "40%",
  transform: "translate(-50%,-50%)",
  "@keyframes spinYReverse": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(-360deg)", 
    },
  },
}));
