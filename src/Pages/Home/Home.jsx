import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HomeTop from "./ComponentsHome/Home_Top/HomeTop";
import HomeProducts from "./ComponentsHome/Home_Products/HomeProducts";
import HomeSeminar from "./ComponentsHome/Home_Seminar/HomeSeminar";
import HomePerformance from "./ComponentsHome/Home_Performance/HomePerformance";
import HomeDetail from "./ComponentsHome/Home_DetailShouldKnow/HomeDetail";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeTop/>
      <HomeProducts/>
      <HomeSeminar/>
      <HomePerformance/>
      <HomeDetail/>
      <Footer/>
    </>
  );
}
