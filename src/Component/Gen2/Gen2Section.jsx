import React from 'react'
import { useMediaQuery } from "@mui/material";
import { Box, Typography } from "@mui/material";
import FieldWithButton from "../EmailField/FieldWithButton";
import Gen2 from "../../assets/images/gen.png";

export default function Gen2Section() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
    <Box sx={{ marginTop: "-20px" }}>
        <img
          src={Gen2}
          height={"auto"}
          style={{ width: "100%" }}
          alt="Description of your image"
        />
      </Box>
      <br />

      <Typography
        variant={isSmallScreen ? "body1" : "h4"}
        textAlign={"center"}
        color={"#FF6600"}
        marginTop={"-60px"}
      >
        {" "}
        Join the waitlist for early <br /> access to DOOZOO GEN 2
      </Typography>
      <br />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <FieldWithButton />
      </Box>
    </>
  )
}
