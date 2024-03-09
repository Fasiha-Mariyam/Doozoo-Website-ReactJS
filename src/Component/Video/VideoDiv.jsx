import React from "react";
import { Box } from "@mui/material";
import Torus from "../../assets/images/Torus3.png";
import Cube from "../../assets/images/RoundCube3.png";
import VideoImg from "../../assets/images/Image.png";
import ReactPlayer from "react-player";
import LOGO from "../../assets/images/logo.png";

export default function VideoDiv() {
  // Check if the viewport width exceeds 900px
  const isViewportWide = window.innerWidth > 900;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        {/* video Pic */}
        <div style={{ width: "50%" }}>
          <ReactPlayer
            url="https://firebasestorage.googleapis.com/v0/b/qr-app-a4a86.appspot.com/o/DOOZOO%20-%20NEXT%20GEN%20-%20FINAL%20HORIZONTAL.mp4?alt=media&token=c7a62121-971a-4651-bd9b-a68e8f432ff5" // Replace with your video URL
            controls={true} 
            width="100%"
            height="400px"
            light={VideoImg} 
          />
        </div>
        <Box sx={{ position: "relative", mt: 2 }}>
          <img
            src={LOGO}
            alt="Logo"
            style={{ position: "absolute", top: 0, left: isViewportWide ? -600 : -400 }}
            height={20}
          />
        </Box>
        {isViewportWide && (
          <Box 
            sx={{
              position: "absolute",
              transform: "translate(350px, 180px)",
              zIndex: -1,
            }}
          >
            <img src={Cube} height={"150px"} />
          </Box>
        )}
      </Box>
      <Box>
        <img src={Torus} height={"300px"} style={{ marginTop: "-150px" }} />
      </Box>
    </>
  );
}
