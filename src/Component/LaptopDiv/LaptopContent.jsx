import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Laptop from "../../assets/images/imageLaptop.png";

export default function LaptopContent() {
  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center", width: "80%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: 5,
            width: "100%",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <img src={Laptop} alt="" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4" sx={{ color: "#FF6600" }}>Doozoo GEN 2</Typography>
            <br />
            <Box sx={{ color: "#595959" }}>
              Doozoo empowers beyond human limits and masters the ‘New world of
              working’ by perfecting a platform that delivers unlimited graphics,
              creative design and imagery with speed and efficiency.
              <br /><br />
              Empowering human potential with intelligent creative output and
              workflow superiority
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
