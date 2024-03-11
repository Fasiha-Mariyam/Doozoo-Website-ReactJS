import React from "react";
import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Container,
  useMediaQuery,
} from "@mui/material";
import Hand from "../../assets/images/Hand1.png";
import ChatbotDesign from "./ChatbotDesign";
import "@fontsource/bebas-neue";

export default function IntroSection() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue"],
    },
  });
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* hello part  */}
      <Box sx={{ textAlign: "center", marginTop: "70px" }}>
        <Box sx={{ color: "#ff7e00" }}>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            fontWeight={"bold"}
            fontFamily={"outfit"}
            fontSize={"50px"}
          >
            The evolutionary gateway for <br /> design productivity
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <img src={Hand} alt="logo" height={60} />
        </Box>
        <Box
          sx={{ color: "grey", fontSize: "22px", fontWeight: "bold", mb: 2 }}
        >
          let's chat with <span style={{ color: "#ff7e00" }}>Doozoo</span>
        </Box>
      </Box>

      <br />
      {/* intro sectionn */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#fc7f02",
          width: "90%",
          color: "white",
          borderRadius: "20px",
          alignItems: "flex-start",
          p: isSmallScreen ? 1 : 10,
          gap: isSmallScreen ? 0 : isMiddleScreen ? 5 : 15,
          mb: 8,
          flexDirection: isSmallScreen ? "column" : "row",
          textAlign: isSmallScreen ? "center" : "left", // Center text for smaller screens
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? "100%" : undefined,
            mb: isSmallScreen ? 2 : 0,
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              variant={isSmallScreen ? "h3" : "h2"}
              fontWeight={isMiddleScreen ? "0px" : "20px"}
              fontSize={
                isSmallScreen ? "50px" : isMiddleScreen ? "70px" : "80px"
              }
              textTransform={"uppercase"}
              pl={isSmallScreen ? 0 : isMiddleScreen ? 0 : 15}
            >
              Chat with <br /> Intelligent <br /> Doozoo AI & <br /> Discover
              <br /> the Future <br />
              of Design
              <br /> Workflow
            </Typography>
          </ThemeProvider>
        </Box>
        <Box
          sx={{
            borderRadius: "25px",
            background: "linear-gradient(to bottom,#fdd698, #fd7a13)",
            p: isSmallScreen ? 4 : 5,
            ml: isSmallScreen ? 1 : 8,
            mb: isSmallScreen ? 2 : 0,
            m: isSmallScreen ? 0.7 : 0,
            width: isSmallScreen ? "80%" : "40%",
          }}
        >
          <ChatbotDesign />
        </Box>
      </Container>
    </>
  );
}
