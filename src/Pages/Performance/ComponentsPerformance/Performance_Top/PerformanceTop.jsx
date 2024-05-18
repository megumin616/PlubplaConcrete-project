import React from "react";
import "../Performance_Top/performancetop.css";

// image
import img_performance from "../../../../assets/Images/Background/backgroundPerformance.png";

const styles = {
  backgroundImage: `url(${img_performance})`,
  backgroundSize: "cover",
  height: "50vh",
};

export default function PerformanceTop() {
  return (
    <>
      <div className="section-performance-top" style={styles}>
        <div className="section-performance-top-text">
          <h1>ผลงานของเรา</h1>
          <p>พลับพลาคอนกรีต</p>
          <p>
            บริษัทชั้นนำด้านการผลิตและจำหน่ายผลิตภัณฑ์คอนกรีตเสริมเหล็ก
            ก่อตั้งขึ้นเมื่อปี พ.ศ. 2553
            ด้วยความมุ่งมั่นที่จะนำเสนอผลิตภัณฑ์และบริการที่มีคุณภาพสูง
            ตอบสนองความต้องการของลูกค้าอย่างครบถ้วน ตลอดระยะเวลากว่า 14 ปี
            พลับพลาคอนกรีต มุ่งมั่นพัฒนาเทคโนโลยีการผลิตอย่างต่อเนื่อง
            ควบคู่กับการคัดสรรวัตถุดิบชั้นดี
            เพื่อให้ได้ผลิตภัณฑ์คอนกรีตเสริมเหล็กที่มีคุณภาพแข็งแรง ทนทาน
            ปลอดภัย และเป็นมิตรต่อสิ่งแวดล้อม
          </p>
        </div>
      </div>
    </>
  );
}
