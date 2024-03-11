import React from "react";
import { useSpring, animated } from 'react-spring';
import Navbar from "../Component/Navbar/Navbar";
import IntroSection from "../Component/IntroSection/IntroSection";
import Footer from "../Component/Footer/Footer";
import VideoDiv from "../Component/Video/VideoDiv";
import LaptopContent from "../Component/LaptopDiv/LaptopContent";
import Gen2Section from "../Component/Gen2/Gen2Section";
import MultiScreen from "../Component/MultiScreen/MultiScreen";

export default function LandingPage() {
  const introAnimation = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
    config: { duration: 1000 }
  });

  const videoAnimation = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -100 },
    config: { duration: 1000, delay: 500 }
  });

  const multiScreenAnimation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0)" },
    config: { duration: 1000, delay: 1000 }
  });

  const laptopAnimation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.5)" },
    config: { duration: 1000, delay: 1500 }
  });

  const gen2Animation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(1.5)" },
    config: { duration: 1000, delay: 2000 }
  });

  return (
    <>
      <Navbar />
      <animated.div style={introAnimation}><IntroSection /></animated.div>
      <br />
      <animated.div style={videoAnimation}><VideoDiv /></animated.div>
      <br />
      <animated.div style={multiScreenAnimation}><MultiScreen /></animated.div>
      <br />
      <animated.div style={laptopAnimation}><LaptopContent /></animated.div>
      <br />
      <animated.div style={gen2Animation}><Gen2Section /></animated.div>
      <br />
      <Footer />
    </>
  );
}
