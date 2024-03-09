import React from "react";
import Box from "@mui/material/Box";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";

export default function SocialButtons() {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, ml: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Connect with Doozoo
        </Box>
        <Box>
          <img src={insta} alt="logo" height={15} />
        </Box>
        <Box>
          <img src={twitter} alt="logo" height={15} />
        </Box>
      </Box>
      <br />
      <Box
       id="footer"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          alignContent: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, ml: 3, fontSize: "12px" , mb:1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            Doozoo Privacy Statement
          </Box>
          <Box>Terms of use</Box>
        </Box>
        <Box sx={{ mr: 3 }}>@ Doozoo inc 2023.</Box>
      </Box>
    </>
  );
}
