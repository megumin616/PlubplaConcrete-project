import React, { useEffect, useState } from "react";
import "../Products_All/productsall.css";

// images
import backgroundImg from "../../../../assets/Images/Background/backgroundHome.png";

import product_1 from "../../../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png";
import product_2 from "../../../../assets/Images/Products/เสาเข็มคอนกรีตอัดแรง.png";
import product_3 from "../../../../assets/Images/Products/คอนกรีตผสมเสร็จ-SCG.png";
import product_4 from "../../../../assets/Images/Products/อิฐบล็อกคอนกรีตบล็อก​.png";

const styles = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",
};

export default function ProductsAll() {
  const [currentPage, setCurrentPage] = useState(1); //ตั้งจำนวนหน้าปัจจุบัน
  const productsPerPage = 4; //จำนวนสินค้าที่ต้องการให้มีต่อหน้า

  const products = [
    { id: 1, head: "แผ่นพื้นตัน แผ่นพื้นคอนกรีตอัดแรงซีแพค", title: "ขนาดกว้าง 35 เซนติเมตร ,หนา 5 เซนติเตร , ความยาวสูงสุด 5 เมตร คุณภาพมาตรฐาน มอก.828-2546 ราคาเริ่มต้น 240 บาท/ตร.ม.มาตรฐาน มอก.828-2546", img: product_1 },
    { id: 2, head: "เสาเข็มคอนกรีตอัดแรงซีแพค เสาเข็มใหญ่", title: "เสาเข็มคอนกรีตอัดแรง เป็นส่วนประกอบของโครงสร้าง ที่อยู่ใต้สุดของอาคาร ทำหน้าที่รับน้ำหนักอาคารทั้งหลัง จากฐานราก แล้วถ่ายลงสู่ดิน", img: product_2 },
    { id: 3, head: "คอนกรีตผสมเสร็จ SCG", title: "มิตรแท้โครงการก่อสร้าง คอนกรีต ในเมืองจันทบุรีและตราด วิศวกรและผู้รับเหมาไว้วางใจ คอนกรีตคุณภาพ จากพลับพลาคอนกรีต", img: product_3 },
    { id: 4, head: "อิฐบล็อก คอนกรีตบล็อก​", title: "ขนาดกว้าง 35 เซนติเมตร ,หนา 5 เซนติเตร , ความยาวสูงสุด 5 เมตร คุณภาพมาตรฐานเท่ากันทุกแผ่น", img: product_4 },
    { id: 5, head: "แผ่นพื้นตัน แผ่นพื้นคอนกรีตอัดแรงซีแพค", title: "ขนาดกว้าง 35 เซนติเมตร ,หนา 5 เซนติเตร , ความยาวสูงสุด 5 เมตร คุณภาพมาตรฐาน มอก.828-2546 ราคาเริ่มต้น 240 บาท/ตร.ม.มาตรฐาน มอก.828-2546", img: product_1 },
    { id: 6, head: "แผ่นพื้นตัน แผ่นพื้นคอนกรีตอัดแรงซีแพค", title: "ขนาดกว้าง 35 เซนติเมตร ,หนา 5 เซนติเตร , ความยาวสูงสุด 5 เมตร คุณภาพมาตรฐาน มอก.828-2546 ราคาเริ่มต้น 240 บาท/ตร.ม.มาตรฐาน มอก.828-2546", img: product_1 },
  ];

  // คำนวณดัชนีสำหรับสินค้าแรกและสินค้าสุดท้ายของหน้าปัจจุบัน
  const indexOfLastProduct = currentPage * productsPerPage; // 1 x 4 = 4 ||
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 4 - 4 = 0 ||

  // แบ่ง array ของสินค้าเป็นส่วนย่อยตามหน้าปัจจุบัน
  const currentProducts = products.slice(
    //slice จาก 0 ถึง 4
    indexOfFirstProduct, //0
    indexOfLastProduct //4
  );

  // คำนวณจำนวนหน้าทั้งหมดของการแบ่งหน้า
  const totalPages = Math.ceil(products.length / productsPerPage);
  //products.length คือจำนวนรายการสินค้าทั้งหมดที่มีอยู่ในอาเรย์ products
  //productsPerPage คือจำนวนรายการสินค้าที่ต้องการแสดงในแต่ละหน้า = 4
  //Math.ceil() จะทำการปัดเศษจากการหารขึ้น เพื่อให้ได้จำนวนหน้าที่เพียงพอสำหรับแสดงข้อมูลทั้งหมดโดยไม่ขาดหรือเกิน

  // ฟังก์ชันที่ใช้ในการเปลี่ยนหน้าก่อนหน้า โดยรับ state ก่อนหน้ามาและลดลงหนึ่งหน้า แต่ไม่ต่ำกว่าหน้าแรก
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // ฟังก์ชันที่ใช้ในการเปลี่ยนหน้าถัดไป โดยรับ state ก่อนหน้ามาและเพิ่มขึ้นหนึ่งหน้า แต่ไม่เกินหน้าสุดท้าย
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // ฟังก์ชันที่ใช้ในการเปลี่ยนหน้าตามหน้าที่ถูกคลิก
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="section-products" style={styles}>
        <div className="section-products-container">
          <h1 className="section-text-h1">สินค้าทั้งหมด</h1>
          <div className="products">
            {/* วนลูปตัวสินค้า โดยเอาตัว currentProducts 0 ถึง 4 มาวนลูป */}
            {currentProducts.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.img} />
                <h2>{product.head}</h2> {/*เนื้อหาสินค้า */}
                <p>{product.title}</p>
              </div>
            ))}
          </div>

          {/* ปุ่มเปลี่ยนตัวสินค้า  */}
          <div className="section-products-pagination">
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </button>
              {[...Array(totalPages).keys()].map((page) => (
                <button className="products-button-number"
                  key={page + 1}
                  onClick={() => handlePageClick(page + 1)}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
