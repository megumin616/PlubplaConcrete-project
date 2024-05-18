import React from "react";
import "../Products/productdetail.css";
import Navbar from "../../Components/Navbar/Navbar";

// image
import product from "../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const decoration = {
  textDecoration: "none",
  color: 'white',
  fontSize: '18px'
};

export default function ProductDetail() {
  return (
    <>
      <Navbar />
      <div className="section-productdetail">
        <div className="productdetail-img">
          <img src={product} />
          <img src={product} />
          <img src={product} />
        </div>
        <div className="productdetail-content">
          <div className="box-content1">
            <h2>แผ่นพื้นตันแผ่นคอนกรีตอัดแรงซีแพค</h2>
            <p>
              แผ่นพื้นคอนกรีตอัดแรง ตราซีแพค(CPAC) โดย
              หจก.พลับพลาคอนกรีตเป็นแฟรนส์ไชส์เจ้าเดียวในจันทบุรี-ตราดได้รับรองมาตรฐาน
              มอก.828-2546
            </p>
            <button>
              <Link to="/products" style={decoration}>
                ย้อนกลับ
              </Link>
            </button>
          </div>
          <div className="box-content2">
            <h2>รายละเอียด</h2>
            <p>
              แผ่นพื้นตันคอนกรีตอัดแรง ซีแพค สมาร์ทสตรัคเจอร์ แข็งแรงทนทาน
              ท้องเรียบ ช่วยประหยัดเวลาและแรงงาน
              ควบคุมคุณภาพทุกขั้นตอนโดยทีมงานมืออาชีพ
              ​ แข็งแรง: ผลิตจากคอนกรีตที่มีกำลังอัดสูงถึง400 กก./ตร.ซม.
              ทรงลูกบาศก์ จึงทำให้แผ่นพื้นมีความแข็งแรง ทนทาน
              และมีคุณภาพสูงกว่าแผ่นพื้นสำเร็จรูปทั่วไป คุ้มค่า: ผลิตจากโรงงาน
              ช่วยประหยัดเวลาในการทำงานและลดจำนวนแรงงานลงได้ ตลอดระยะเวลากว่า50
              ปีที่ซีแพคได้สั่งสมประสบการณ์ ความรู้ ความชำนาญ
              รวมถึงระบบงานและทีมงานที่มีประสิทธิภาพ
              จนเป็นที่ยอมรับถึงความเป็นมืออาชีพของซีแพคตั้งแต่อดีตจนถึงปัจจุบัน
              ทำให้ลูกค้ามั่นใจได้ว่าจะได้รับสินค้าและบริการที่มีความคุ้มค่าอย่างแน่นอน มาตรฐานซีแพค:: ควบคุมทุกขั้นตอนโดยทีมงานมืออาชีพ
              ทั้งเรื่องความแข็งแรงและความสวยงาม
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
