import React from "react";
import '../Home_Performance/homeperformance.css'

// image 
import imgPer from '../../../../assets/Images/Performance/performance.jpeg'
import { useNavigate } from "react-router-dom";

export default function HomePerformance() {
  const navigate = useNavigate();
  return (
    <>
      <div className="section-home-performance">
        <h1>ผลงานของเรา</h1>

        <div className="section-home-performance-detail">
          <img src={imgPer} />

          <div>
            <h2>ด้วยประสบการณ์ที่มากกว่า 13 ปี</h2>
            <p>
              เป็นผู้ผลิตแผ่นพื้นตัน แผ่นพื้นสำเร็จรูป คอนกรีตอัดแรง
              <br />
              ที่ได้รับการยอมรับจาก CPAC ในเรื่องมาตรฐานคุณภาพผลิตภัณฑ์ <br />
              และได้รับลูกค้าไว้วางใจจากลูกค้าทั้งในจังหวัดจันทบุรีและในภาคตะวันออก{" "}
              <br />
              ด้วยความใส่ใจในคุณภาพและบริการ
            </p>
            <button onClick={() => navigate("/performance")}>ผลงานอื่นๆ</button>
          </div>
        </div>
      </div>
    </>
  );
}
