import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import IntroSection from "../Component/IntroSection/IntroSection";
import Footer from "../Component/Footer/Footer";
import VideoDiv from "../Component/Video/VideoDiv";

import LaptopContent from "../Component/LaptopDiv/LaptopContent";

import Gen2Section from "../Component/Gen2/Gen2Section";
import MultiScreen from "../Component/MultiScreen/MultiScreen";

export default function LandingPage() {

  return (
    <>
      <Navbar />
      <IntroSection />
      <br />
      <VideoDiv/>
      <br />
      <MultiScreen/>
      <br />
      <LaptopContent />
      <br />
      <Gen2Section/>
      <br />
      <Footer />
    </>
  );
}
