import React, {useState, useEffect} from "react";
import "../Home_Products/homeproducts.css";

// images
import img1 from "../../../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png";
import img2 from "../../../../assets/Images/Products/เสาเข็มคอนกรีตอัดแรง.png";
import img3 from "../../../../assets/Images/Products/คอนกรีตผสมเสร็จ-SCG.png";
import img4 from "../../../../assets/Images/Products/อิฐบล็อกคอนกรีตบล็อก​.png";
import { useNavigate } from "react-router-dom";

export default function HomeProducts() {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/products");
  }
  return (
    <>
      <div className="section-home-products">
        <h1>สินค้าขายดี</h1>

        <div className="section-home-products-items">
          
          <div className="products-item">
            <img src={img1} />
            <h2>แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค</h2>
            <p>
              แผ่นพื้นคอนกรีตอัดแรง ตราซีแพค(CPAC) <br />
              โดย หจก. ไลับพลาคอนกรีตเฟรนส์ไซส์เจ้าเดียวในจันทบุรีและตราด <br />
              ตราดได้รับรองมาตรฐาน มอก. 828-2546
            </p>
            <button onClick={handlePage}>รายละเอียด</button>
          </div>

          <div className="products-item">
            <img src={img2} />
            <h2>เสาเข็มคอนกรีตอัดแรง ซีแพค (เสาเข็มใหญ่)</h2>
            <p>
              เสาเข็มอัดแรง ตราซีแพค(CPAC) <br />
              โดย หจก.พลับพลาคอนกรีตเป็นแฟรนส์ไชส์เช่นเดียวกัน <br />
              ได้รับรองมาตรฐาน มอก.396-2549
            </p>
            <button onClick={handlePage}>รายละเอียด</button>
          </div>

          <div className="products-item">
            <img src={img3} />
            <h2>คอนกรีตผสมเสร็จ SCG</h2>
            <p>
              คอนกรีตผสมเสร็จ เอสซีจี ได้รับรองเครื่องหมาย ใช้ปูนเอสซีจี <br />
              และได้รับรองมาตรฐาน มอก. 213-2560
            </p>
            <button onClick={handlePage}>รายละเอียด</button>
          </div>

          <div className="products-item">
            <img src={img4} />
            <h2>อิฐบล็อก คอนกรีตบล็อก​</h2>
            <p>
              อิฐบล็อกคุณภาพผลิตจากเครื่องจักรอัตโนมัต ได้รับรองเครื่องหมาย
              <br />
              ใช้ปูนเอสซีจี
            </p>
            <button onClick={handlePage}>รายละเอียด</button>
          </div>
        </div>
      </div>
    </>
  );
}
