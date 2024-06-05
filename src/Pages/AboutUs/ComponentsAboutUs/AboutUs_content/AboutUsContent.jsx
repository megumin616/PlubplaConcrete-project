import React, { useEffect, useState } from "react";
import "../AboutUs_content/aboutuscontent.css";
import "../AboutUs_Top/aboutustop.css";

// images
import background from "../../../../assets/Images/Background/backgroundHome.png";
import imgvideo from "../../../../assets/Images/Video/video-img1.png";
import video2 from "../../../../assets/Images/Video/video-img2.png";
import video3 from "../../../../assets/Images/Video/video-img3.png";
import video4 from "../../../../assets/Images/Video/video-img4.png";

// videos
import video_1 from "../../../../assets/Videos/video-AD-1.mp4";
import video_2 from "../../../../assets/Videos/video-AD-2.mp4";
import video_3 from "../../../../assets/Videos/video-AD-3.mp4";
import video_4 from "../../../../assets/Videos/video-AD-4.mp4";

export default function AboutUsContent() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState("auto");
  const [marginTopVideo, setMarginTopVideo] = useState("4");
  const [currentVideo, setCurrentVideo] = useState(null);

  const [styleHeight, setStyleHeight] = useState(70);
  const [widthTop, setWidthTop] = useState(760);
  const [heightTop, setHeightTop] = useState("auto");

  useEffect(() => {
    if (
      window.matchMedia("(min-width: 319px) and (max-width: 431px)").matches
    ) {
      setStyleHeight(60);
      setWidthTop(360);
    }
    if (window.matchMedia("(max-width: 330px)").matches) {
      setStyleHeight(80);
    }
    if (window.matchMedia("(min-width: 1020px) and (max-width: 1376px)").matches) {
      setStyleHeight(40);
      setWidthTop(540)
      setWidth(400)
    }
    if (window.matchMedia("(min-width: 810px) and (max-width: 1020px)").matches) {
      setStyleHeight(40);
      setWidthTop(400)
      setWidth(300)
    }
    if (window.matchMedia("(min-width: 760px) and (max-width: 810px)").matches) {
      setStyleHeight(40);
      setWidthTop(380)
      setWidth(300)
    }
  }, []);

  useEffect(() => {
    if (
      window.matchMedia("(min-width: 319px) and (max-width: 431px)").matches
    ) {
      setWidth(360);
      setMarginTopVideo("6")
    }
    if (window.matchMedia("(min-width: 1020px) and (max-width: 1376px)").matches) {
      setMarginTopVideo("6")
    }
  }, []);

  const handleVideoPlay = (id) => {
    if (currentVideo && currentVideo !== id) {
      const currentVideoElement = document.getElementById(currentVideo);
      if (currentVideoElement) {
        currentVideoElement.pause();
      }
    }
    setCurrentVideo(id);
  };

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "auto",
    zIndex: "",
  };
  return (
    <>
      <div className="section-aboutus-top" style={styles}>
        <div className="aboutus-container">
          {/* <img src={video} /> */}
          <video
            id="1"
            style={{ width: widthTop, height: heightTop, zIndex: "0", marginTop: `${marginTopVideo}rem`}}
            controls
            onClick={() => handleVideoPlay(1)}
          >
            <source src={video_1} type="video/mp4" />
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
      <div className="section-aboutus-content">
        <div className="aboutus-content-box-set">
          <h2>บริการครบวงจร</h2>
          <p>
            - <span>บริการผลิต:</span> พลับพลาคอนกรีต
            ผลิตแผ่นพื้นคอนกรีตเสริมเหล็กด้วยเทคโนโลยีที่ทันสมัย
            ควบคุมคุณภาพอย่างเข้มงวด ด้วยระบบ QC ที่มีประสิทธิภาพ <br />-{" "}
            <span>บริการจำหน่าย:</span> เรามีทีมขายมืออาชีพ พร้อมให้คำปรึกษา
            แนะนำ และตอบคำถามเกี่ยวกับผลิตภัณฑ์ของเรา <br />
            บริการจัดส่งถึงหน้างาน: พลับพลาคอนกรีต
            มีบริการจัดส่งสินค้าถึงหน้างานลูกค้า โดยทีมงานมืออาชีพ ตรงเวลา
            ตรงตามกำหนด <br />- <span>บริการติดตั้ง:</span>
            เรามีบริการติดตั้งแผ่นพื้นคอนกรีตเสริมเหล็กโดยทีมช่างผู้เชี่ยวชาญ
            มีประสบการณ์สูง ทำงานได้อย่างรวดเร็ว ปลอดภัย และถูกต้องตามมาตรฐาน
          </p>
        </div>

        <div className="aboutus-content-box-1">
          <div className="content-text-box-1">
            <h2>มาตรฐานการผลิตที่สูง</h2>
            <p>
              QC ตรวจเช็คคุณภาพ: พลับพลาคอนกรีต มีระบบ QC
              ตรวจสอบคุณภาพแผ่นพื้นคอนกรีตเสริมเหล็กอย่างละเอียด
              ทุกขั้นตอนการผลิต
              เพื่อให้มั่นใจว่าลูกค้าจะได้รับสินค้าที่มีคุณภาพสูงสุด <br />
              ปฏิบัติตามมาตรฐาน CPAC:
              พนักงานของเราปฏิบัติตามกระบวนการผลิตตามแผนการควบคุมของ CPAC
              และได้รับการฝึกอบรมการทำงานตามเอกสารปฏิบัติงานอย่างสม่ำเสมอ <br />
              รางวัลคุณภาพยอดเยี่ยม: พลับพลาคอนกรีต
              ได้รับรางวัลคุณภาพยอดเยี่ยมจาก CPAC การันตีมาตรฐานการผลิตที่สูง
            </p>
          </div>
          {/* <img src={video2} /> */}
          <video
            id="2"
            style={{ width: width, height: height, margin: "1rem 0" }}
            controls
            onClick={() => handleVideoPlay(2)}
          >
            <source src={video_2} type="video/mp4" />
          </video>
        </div>

        <div className="aboutus-content-box-2">
          {/* <img src={video3} /> */}
          <video
            id="3"
            style={{ width: width, height: height, margin: "1rem 0" }}
            controls
            onClick={() => handleVideoPlay(3)}
          >
            <source src={video_3} type="video/mp4" />
          </video>
          <div className="content-text-box-2">
            <h2>ประสิทธิภาพการผลิต</h2>
            <p>
              อัตราการผลิตสูง: พลับพลาคอนกรีต
              มีอัตราการผลิตแผ่นพื้นคอนกรีตเสริมเหล็กสูงที่สุดในจังหวัดจันทบุรีและตราด{" "}
              <br />
              การจัดส่งที่รวดเร็ว: เรามีระบบการจัดส่งสินค้าที่มีประสิทธิภาพ
              จัดส่งสินค้าตรงเวลา ตรงตามกำหนด
            </p>
          </div>
        </div>

        <div className="aboutus-content-box-1">
          <div className="content-text-box-1">
            <h2>บริการหลังการขาย</h2>
            <p>
              พลับพลาคอนกรีต มีทีมบริการลูกค้าที่พร้อมให้บริการลูกค้าทุกท่าน
              ให้คำปรึกษา <br /> แก้ไขปัญหา และตอบคำถามต่างๆ อย่างรวดเร็ว
              ประทับใจ
              และมุ่งมั่นที่จะสร้างความพึงพอใจสูงสุดให้กับลูกค้าด้วยบริการและผลิตภัณฑ์ที่มีคุณภาพ
              ในราคาที่เหมาะสม <br />
              และบริการหลังการขายที่ประทับใจ
            </p>
          </div>
          {/* <img src={video4} /> */}
          <video
            id="4"
            style={{ width: width, height: height, margin: "1rem 0" }}
            controls
            onClick={() => handleVideoPlay(4)}
          >
            <source src={video_4} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
