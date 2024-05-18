import React from "react";
import { Link } from "react-router-dom";
import "../Home_Top/hometop.css";

// image
import Background from "../../../../assets/Images/Background/backgroundHome.png";

const styles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
};

export default function HomeTop() {
  return (
    <>
      <div className="section-home" style={styles}>
        {/* section-home top  */}
        <div className="section-home-top">
          <div className="section-home-top-box1">
            <h1>
              พลับพลาคอนกรีต <br />
              ยินดีต้อนรับ
            </h1>

            <p>
              ผู้ผลิตและจำหน่ายผลิตภัณฑ์คอนกรีต SCG แผ่นพื้นสำเร็จรูป <br />
              และเสาเข็มตราCPAC ด้รับรองมาตรฐาน มอก. ทุกผลิตภัณฑ์ <br />
              พร้อมด้วยกำลังการผลิตสูงที่สุดในจังหวัดจันทบุรีและตราด <br />
              ด้วยคุณภาพที่ลูกค้าไว้วางใจ เราใส่ใจในการผลิตและบริการ <br />
              มุ่งมั่นที่จะเป็นพาร์ทเนอร์ที่ซื่อสัตย์และเชื่อถือได้ <br />
              สั่งด่วน 088-622-3030
            </p>

            <p>บริการเซ็นต์รับรองรายการคำนวณโดยสามัญวิศวกร cpac ฟรี</p>

            <button>
              <Link to="/products" className="white-link">
                ดูสินค้า
              </Link>
            </button>
          </div>

          <div className="section-home-top-box2">
            <p>เกี่ยวกับบริษัทเรา</p>
            <img
              src="https://images.unsplash.com/photo-1715604723666-866e18a5d257?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </>
  );
}
