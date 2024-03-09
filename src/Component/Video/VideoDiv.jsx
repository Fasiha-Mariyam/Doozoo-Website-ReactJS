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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* video Pic */}
        <div style={{ width: "50%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your video URL
            controls={true} // Show player controls
            width="100%"
            height="400px"
            light={VideoImg} // Specify the thumbnail image
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
            style={{
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
