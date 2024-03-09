import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import webImages from "../../assets/images/websiteImg.png";

export default function MultiScreen() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Bebas Neue"', // Font name in quotes
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container
        sx={{ bgcolor: "#FF6600", my: 10, maxWidth: "unset !important" }}
      >
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
              variant={isSmallScreen ? "body1" : "h3"}
              textAlign={"center"}
              fontWeight="bold"
              sx={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' , textTransform: "uppercase" ,
               background: "linear-gradient(to bottom,#FF6600, #FF9601)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "700",
              textAlign: "center",}}
            >
              Human X AI synergy to <br /> revolutionize the design game
            </Typography>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    </>
  );
}
