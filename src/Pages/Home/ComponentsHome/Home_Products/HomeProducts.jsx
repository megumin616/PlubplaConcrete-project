import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../Home_Products/homeproducts.css";

// images
import img1 from "../../../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png";
import img2 from "../../../../assets/Images/Products/เสาเข็มคอนกรีตอัดแรง.png";
import img3 from "../../../../assets/Images/Products/คอนกรีตผสมเสร็จ-SCG.png";
import img4 from "../../../../assets/Images/Products/อิฐบล็อกคอนกรีตบล็อก​.png";

export default function HomeProducts() {
  const navigate = useNavigate();

  const id1 = "2KuI5e81lUJ9WjnVN2g4"
  const id2 = "wabTmPdoFOMN5BctnrZ8"
  const id3 = "DyH41b2AQgrwJeDwDRuO"
  const id4 = "1IwQosojMer0AHc6lJBp"

  const handle1 = () => {
    navigate(`/productdetail/${id1}`);
  }
  const handle2 = () => {
    navigate(`/productdetail/${id2}`);
  }
  const handle3 = () => {
    navigate(`/productdetail/${id3}`);
  }
  const handle4 = () => {
    navigate(`/productdetail/${id4}`);
  }

  return (
    <>
      <div className="section-home-products">
        <h1>สินค้าขายดี</h1>

        <div className="section-home-products-items">
          
          <div className="products-item">
            <img src={img1} alt="แผ่นพื้นคอนกรีต"/>
            <h2>แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค</h2>
            <p>
              แผ่นพื้นคอนกรีตอัดแรง ตราซีแพค(CPAC) <br />
              โดย หจก. ไลับพลาคอนกรีตเฟรนส์ไซส์เจ้าเดียวในจันทบุรีและตราด <br />
              ตราดได้รับรองมาตรฐาน มอก. 828-2546
            </p>
            <button onClick={handle1}>รายละเอียด</button>
          </div>

          <div className="products-item">
            <img src={img2} alt="เสาเข็มคอนกรีต"/>
            <h2>เสาเข็มคอนกรีตอัดแรง ซีแพค (เสาเข็มใหญ่)</h2>
            <p>
              เสาเข็มอัดแรง ตราซีแพค(CPAC) <br />
              โดย หจก.พลับพลาคอนกรีตเป็นแฟรนส์ไชส์เช่นเดียวกัน <br />
              ได้รับรองมาตรฐาน มอก.396-2549
            </p>
            <button onClick={handle2}>รายละเอียด</button>
          </div>

          <div className="products-item">
            <img src={img3} alt="คอนกรีตผสมเสร็จ"/>
            <h2>คอนกรีตผสมเสร็จ SCG</h2>
            <p>
              คอนกรีตผสมเสร็จ เอสซีจี ได้รับรองเครื่องหมาย ใช้ปูนเอสซีจี <br />
              และได้รับรองมาตรฐาน มอก. 213-2560
            </p>
            <button onClick={handle3}>รายละเอียด</button>
          </div>

          <div className="products-item">
            <img src={img4} alt="คอนกรีตบล็อก​"/>
            <h2>อิฐบล็อก คอนกรีตบล็อก​</h2>
            <p>
              อิฐบล็อกคุณภาพผลิตจากเครื่องจักรอัตโนมัต ได้รับรองเครื่องหมาย
              <br />
              ใช้ปูนเอสซีจี
            </p>
            <button onClick={handle4}>รายละเอียด</button>
          </div>
        </div>
      </div>
    </>
  );
}
