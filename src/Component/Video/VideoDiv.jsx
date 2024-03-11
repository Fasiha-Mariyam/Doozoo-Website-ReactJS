import React from "react";
import { Box, useMediaQuery, Avatar } from "@mui/material";
import Torus from "../../assets/images/Torus3.png";
import Cube from "../../assets/images/RoundCube3.png";
import VideoImg from "../../assets/images/Image.png";
import ReactPlayer from "react-player";
import LOGO from "../../assets/images/logo.png";
import playBtn from "../../assets/images/playButton.png";

export default function VideoDiv() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: "20px",
          marginBottom: "90px",
        }}
      >
        <ReactPlayer
          url="https://firebasestorage.googleapis.com/v0/b/qr-app-a4a86.appspot.com/o/DOOZOO%20-%20NEXT%20GEN%20-%20FINAL%20HORIZONTAL.mp4?alt=media&token=c7a62121-971a-4651-bd9b-a68e8f432ff5"
          controls={true}
          height="504px"
          width="800px"
          light={VideoImg}
          playIcon={
            <Avatar
              alt="PlayBtn"
              src={playBtn}
              sx={{
                borderRadius: "0px",
                color: "#f37c41",
                height: 70,
                width: 65,
              }}
            />
          }
        />

        <Avatar
          alt="Logo"
          src={LOGO}
          sx={{
            position: "absolute",
            transform: "translate(-300px, -200px)",
            borderRadius: "0px",
            height: 20,
            width: 90,
          }}
        />
        {/* cube */}

        {!isSmallScreen && (
          <Avatar
            alt="RoundCube3"
            src={Cube}
            sx={{
              position: "absolute",
              height: 200,
              width: 225,
              borderRadius: "0px",
              transform: "translate(450px, 70px)",
              zIndex: -1, // To make it behind VidImg
            }}
          />
        )}
        {/* torus */}
        <Avatar
          alt="Torus3"
          src={Torus}
          sx={{
            position: "absolute",
            height: 360,
            width: 200,
            left: 0,
            borderRadius: "0px",
            transform: "translateY(280px)",
            zIndex: -1, // To make it behind VidImg
          }}
        />
      </Box>
    </>
  );
}
