import React, { useEffect, useState } from "react";
import "../Products_All/productsall.css";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {db} from "../../../../firebase"

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
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //ดึงข้อมูลมาแสดง
  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "products"), //อย่าลืมมาเปลี่ยนตรงนี้ หลังจากสร้างไฟล์ตารางใหม่
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProduct(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  //หากกำลังโหลดข้อมูล ให้แสดงหน้านี้ก่อน หรือจะให้แสดง UI อะไรก็ได้
  if (loading) {
    return console.log("loading..");
  }

  const products = product.map((item) => ({
    id: item.id,
    head: item.product,
    title: item.detail,
    img: item.img1,
  }));

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
              <div className="product" key={product.id} onClick={() => navigate(`/productdetail/${product.id}`)}>
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
                <button
                  className="products-button-number"
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
