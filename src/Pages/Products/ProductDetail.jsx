import React, { useState } from "react";
import "../Products/productdetail.css";
import Navbar from "../../Components/Navbar/Navbar";

// image
import product from "../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png";
import product2 from "../../assets/Images/Products/คอนกรีตผสมเสร็จ-SCG.png";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const decoration = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
};

export default function ProductDetail() {
  const [currentProduct, setCurrentProduct] = useState(1);
  const productPerImg = 1;

  const images = [
    { id: 1, img: product },
    { id: 1, img: product2 },
    { id: 1, img: product },
  ];

  const indexLast = currentProduct * productPerImg;
  const indexFirst = indexLast - productPerImg;

  const currentImages = images.slice(indexFirst, indexLast);

  const totalImg = Math.ceil(images.length / productPerImg);

  const handleLast = () => {
    setCurrentProduct((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFirst = () => {
    setCurrentProduct((prevPage) => Math.min(prevPage + 1, totalImg));
  };
  return (
    <>
      <Navbar />
      <div className="section-productdetail">
        <div className="productdetail-img">
          <img className="img-display" src={product} />
          <img className="img-display" src={product} />
          <img className="img-display" src={product} />
        </div>
        {/* <div className="img-container-responsive"> */}
        {currentImages.map((images) => (
          <img className="img-responsive" src={images.img} key={images.id} />
        ))}
        {/* </div> */}
        <div className="btn-group">
          <button
            className="btn-prev"
            onClick={handleLast}
            disabled={currentProduct === 1}
          >
            Prev
          </button>
          <button
            className="btn-next"
            onClick={handleFirst}
            disabled={currentProduct === totalImg}
          >
            Next
          </button>
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
            <button>
              <Link to="/products" style={decoration}>
                ย้อนกลับ
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
