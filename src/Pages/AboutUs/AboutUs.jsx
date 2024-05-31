import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import AboutUsTop from "./ComponentsAboutUs/AboutUs_Top/AboutUsTop";
import AboutUsContent from "./ComponentsAboutUs/AboutUs_content/AboutUsContent";

export default function AboutUs() {
  // const [currentVideo, setCurrentVideo] = useState(null)

  // const handleVideoPlay = (id) => {
  //   if (currentVideo && currentVideo !== id) {
  //     const currentVideoElement = document.getElementById(currentVideo);
  //     if (currentVideoElement) {
  //       currentVideoElement.pause();
  //     }
  //   }
  //   setCurrentVideo(id)
  //   console.log(`Video ${id} is played.`);
  // }
  return (
    <>
      <Navbar />
      {/* <AboutUsTop/> */}
      <AboutUsContent/>
      <Footer/>
    </>
  );
}
