import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import webImages from "../../assets/images/websiteImg.png";

export default function MultiScreen() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Container sx={{ bgcolor: "#FF6600", my: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={webImages}
            alt=""
            width={isSmallScreen ? "80%" : "70%"}
            style={{ marginTop: isSmallScreen ? "-70px" : "-140px" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ color: "#FFFFFF", bgcolor: "#FF6600", my: 3, mb: 7 }}>
            <Typography
              variant={isSmallScreen ? "body1" : "h4"}
              textAlign={"center"}
              fontWeight="bold"
              sx={{ textTransform: "uppercase" }}
            >
              Human X AI synergy to <br /> revolutionize the design game
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
