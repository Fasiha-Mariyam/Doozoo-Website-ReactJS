import React from "react";
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
        variant={isSmallScreen ? "body1" : "h3"}
        textAlign={"center"}
        color={"#FF6600"}
        marginTop={"-60px"}
        fontFamily={"outfit"}
        fontWeight={"bold"}
      >
        Join the waitlist for early <br /> access to DOOZOO GEN 2
      </Typography>
      <br />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 10,
          mt: 3,
          ml: -5,
        }}
      >
        <Box sx={{ width: "400px" }}>
          <FieldWithButton />
        </Box>
      </Box>
    </>
  );
}
