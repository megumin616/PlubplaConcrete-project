import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import AboutUsTop from "./ComponentsAboutUs/AboutUs_Top/AboutUsTop";
import AboutUsContent from "./ComponentsAboutUs/AboutUs_content/AboutUsContent";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsTop/>
      <AboutUsContent/>
      <Footer/>
    </>
  );
}
