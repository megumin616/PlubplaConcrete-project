import React, { useEffect, useState } from "react";
import "../AboutUs_Top/aboutustop.css";

// images
import background from "../../../../assets/Images/Background/backgroundHome.png";
import imgvideo from "../../../../assets/Images/Video/video-img1.png"
// video
import video1 from "../../../../assets/Videos/video-1.mp4";


export default function AboutUsTop() {
  const [styleHeight, setStyleHeight] = useState(70)
  const [widthTop, setWidthTop] = useState(760)
  const [heightTop, setHeightTop] = useState("auto")

  useEffect(() => {
    if (window.matchMedia("(min-width: 319px) and (max-width: 431px)").matches) {
      setStyleHeight(50)
      setWidthTop(360)
    }
    if (window.matchMedia("(max-width: 330px)").matches) {
      setStyleHeight(60)
    }
  },[])


  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: `${styleHeight}vh`,
    zIndex: ""
  };
  return (
    <>
      <div className="section-aboutus-top" style={styles}>
        <div className="aboutus-container">
          {/* <img src={video} /> */}
          <video id="1" style={{width: widthTop, height: heightTop, zIndex: "0"}} controls onClick={() => handleVideoPlay(1)}>
            <source src={video1} type="video/mp4"/>
          </video>
          <div className="aboutus-text">
            <h1>ทำไมลูกค้าถึงไว้วางใจ?</h1>
            <p>
              พลับพลาคอนกรีต มุ่งมั่นที่จะนำเสนอบริการ
              และผลิตภัณฑ์ที่มีคุณภาพสูงสุดแก่ลูกค้าเพื่อให้ลูกค้า
              ไว้วางใจและเลือกใช้บริการของเรา ดังนี้:
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
