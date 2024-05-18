import React from "react";
import "../AboutUs_Top/aboutustop.css";

// images
import background from "../../../../assets/Images/Background/backgroundHome.png";
import video from "../../../../assets/Images/Video/video-img1.png";

const styles = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  height: "70vh",
};

export default function AboutUsTop() {
  return (
    <>
      <div className="section-aboutus-top" style={styles}>
        <div className="aboutus-container">
          <img src={video} />
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
