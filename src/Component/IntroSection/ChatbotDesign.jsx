import React from "react";
import { Box, Typography } from "@mui/material";
import userImg from "../../assets/images/image 75.png";
import Donut from "../../assets/images/o.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Book from "../../assets/images/book.png";
import chatBotBG from "../../assets/images/bot-chat-background.png";
import FieldWithButton from "../EmailField/FieldWithButton";

export default function ChatbotDesign() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "white", // White background color
          backgroundImage: `url(${chatBotBG})`, // Background image
          backgroundSize: "cover", // Adjust as needed
          backgroundRepeat: "no-repeat", // Adjust as needed
          borderRadius: "10px",
          width:"100%"
        }}
      >
        {/* small navbar */}
        <Box
          sx={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            background: `linear-gradient(to bottom, #FD6803 0%, #FFA800 100%)`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box>
              <img src={userImg} alt="" style={{ borderRadius: "50px" }} />
            </Box>
            New User
          </Box>
          <Box>Chat with Doozoo</Box>
        </Box>
        {/* content with picture and typpe something input*/}
        <Box sx={{ bgcolor: "#FF8701", borderRadius: "5px", m: 2, p: 2 }}>
          {/* content with picture */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{ bgcolor: "white", borderRadius: "50px", height: "25px" }}
            >
              <img
                src={Donut}
                alt=""
                style={{ borderRadius: "50px", height: "20px", padding: 3 }}
              />
            </Box >
            <Box sx={{textAlign:"left"}}>Hey there! I'm the Doozoo intelligence. I'm here to give you a hand
            with anything you need to know about our AI-powered design tool.
            What can I help you with</Box>
          </Box>
          <br />
          {/* input field */}
          <Box sx={{ width: "100%" }}>
            <TextField
              label="Type something..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img src={Book} alt="" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                outline: "none",
                width: "100%",
              }}
            />
          </Box>
        </Box>
        <br />
        <FieldWithButton/>
      </Box>
    </>
  );
}
