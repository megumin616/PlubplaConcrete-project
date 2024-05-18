import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import PerformanceAll from "./ComponentsPerformance/PerformanceAll";
import PerformanceTop from "./ComponentsPerformance/Performance_Top/PerformanceTop";

export default function Performance() {
  return (
    <>
      <Navbar />
      <PerformanceTop/>
      <PerformanceAll/>
      <Footer/>
    </>
  );
}
