import React from "react";
import "../Products_List/productslist.css";

// images 
import product_1 from '../../../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png'
import product_2 from '../../../../assets/Images/Products/เสาเข็มคอนกรีตอัดแรง.png'
import product_3 from '../../../../assets/Images/Products/คอนกรีตผสมเสร็จ-SCG.png'
import product_4 from '../../../../assets/Images/Products/อิฐบล็อกคอนกรีตบล็อก​.png'

export default function ProductsList() {
  return (
    <>
      <div className="section-products-popular">
        <h1>สินค้าหลัก</h1>

        <div className="section-products-popular-list">
          {/* product 1  */}
          <div className="product-popular">
            <img src={product_1} />
            <div className="product-popular-text">
              <h2>แผ่นพื้นตันแผ่นพื้นคอนกรีต <br/>อัดแรงซีแพค</h2>
              <p>
                แผ่นพื้นคอนกรีตอัดแรง ตราซีแพค(CPAC) <br />
                โดย หจก.พลับพลาคอนกรีตเป็นแฟรนส์ไชส์เจ้าเดียวในจันทบุรี-ตราด{" "}
                <br />
                ได้รับรองมาตรฐาน มอก.828-2546
              </p>
              <button>รายละเอียด</button>
              <p className="text-p">ประเมินค่าจัดส่ง โทรด่วน 088-622-3030</p>
            </div>
          </div>
          {/* product 2  */}
          <div className="product-popular-2">
            <div className="product-popular-text">
            <h2>เสาเข็มคอนกรีตอัดแรง ซีแพค <br/> (เสาเข็มใหญ่)</h2>
              <p>
              เสาเข็มคอนกรีตอัดแรง เป็นส่วนประกอบของโครงสร้าง <br/> 
              ที่อยู่ใต้สุดของอาคาร ทำหน้าที่รับน้ำหนักอาคารทั้งหลัง <br/> 
              จากฐานราก แล้วถ่ายลงสู่ดิน
              </p>
              <button>รายละเอียด</button>
              <p className="text-p">ประเมินค่าจัดส่ง โทรด่วน 088-622-3030</p>
            </div>
            <img src={product_2}/>
          </div>
          {/* product 3  */}
          <div className="product-popular">
            <img src={product_3} />
            <div className="product-popular-text">
              <h2>คอนกรีตผสมเสร็จมาตรฐาน <br/> SCG เทง่าย ได้กำลังอัด</h2>
              <p>
              มิตรแท้โครงการก่อสร้าง คอนกรีต ในเมืองจันทบุรีและตราด <br/> 
              วิศวกรและผู้รับเหมาไว้วางใจ คอนกรีตคุณภาพ <br/>
              จากพลับพลาคอนกรีต
              </p>
              <button>รายละเอียด</button>
              <p className="text-p">ประเมินค่าจัดส่ง โทรด่วน 088-622-3030</p>
            </div>
          </div>
          {/* product 4  */}
          <div className="product-popular-2">
            <div className="product-popular-text">
            <h2>อิฐบล็อกคุณภาพผลิตจาก <br/> เครื่องจักรอัตโนมัติ</h2>
              <p>
              อิฐบล็อก คอนกรีตบล็อก พลับพลาคอนกรีตผลิตเอง <br/> 
              ตรวจตามมาตรฐานตลอดกระบวนการ ส่งถึงหน้างานลูกค้า <br/>
              ตรงตามเวลาที่ลูกค้าต้องการ
              </p>
              <button>รายละเอียด</button>
              <p className="text-p">ประเมินค่าจัดส่ง โทรด่วน 088-622-3030</p>
            </div>
            <img src={product_4}/>
          </div>
        </div>
      </div>
    </>
  );
}
