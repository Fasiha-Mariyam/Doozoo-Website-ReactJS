import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-scroll"; 
import LOGO from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <Box fontFamily={"outfit"}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={LOGO} alt="logo" height={30} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "black",fontSize:"12px" }} fontFamily={"outfit"}>
              Have access already?
            </Typography>
            <Button sx={{ color: "black", fontSize: "12px", textTransform: "none" , fontFamily:"outfit" }}>Sign in</Button>
            <Button sx={{ color: "#f9a004", fontSize: "12px" , textTransform: "none" , fontFamily:"outfit" }}>
            <Link
              to="footer" 
              smooth={true}
              duration={500}
            >
              Join the waitlist
            </Link>
            </Button>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
