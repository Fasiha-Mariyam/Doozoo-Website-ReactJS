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

export default function IntroSection() {
  const theme = createTheme({
    typography: {
      fontFamily: `'your-font-family', sans-serif`,
    },
  });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* hello part  */}
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ color: "#ff7e00", fontSize: "50px" }}>
            <Typography variant={isSmallScreen ? "h5" : "h3"}>
              The evolutionary gateway for <br /> design productivity
            </Typography>
          </Box>
          <Box>
            <img src={Hand} alt="logo" height={50} />
          </Box>
          <Box sx={{ color: "grey" }}>
            Let's chat with <span style={{ color: "#ff7e00" }}>Doozoo</span>
          </Box>
        </Box>
        <br />
        {/* intro sectionn */}
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#f99b04",
            width: "80%",
            color: "white",
            borderRadius: "20px",
            alignItems: "center",
            p: 4,
            gap: 5,
            mb: 8,
            flexDirection: isSmallScreen ? "column" : "row",
            textAlign: isSmallScreen ? "center" : "center", // Center text for smaller screens
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? "100%" : undefined,
              mb: isSmallScreen ? 2 : 0,
            }}
          >
            <Typography variant={isSmallScreen ? "h4" : "h3"}>
              Chat with <br /> Intelligent <br /> Doozoo AI & <br /> Discover
              <br /> the Future <br />
              of Design
              <br /> Workflow
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              background: "linear-gradient(to bottom,#fdd698, #fda64a)",
              p: 2,
              ml: isSmallScreen ? 0 : 8,
              width: isSmallScreen ? "100%" : "40%",
            }}
          >
            <ChatbotDesign />
          </Box>
        </Container>
      </>
    </ThemeProvider>
  );
}
