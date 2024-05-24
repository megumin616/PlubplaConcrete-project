import React, { useState } from "react";
import "../Activity/activitydetail.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// image
import img_detail1 from "../../assets/Images/Activity/activity-detail1.png";
import img_detail2 from "../../assets/Images/Activity/activity-detail2.png";

export default function ActivityDetail() {
  const [currentProduct, setCurrentProduct] = useState(1);
  const productPerImg = 1;

  const images = [
    { id: 1, img: img_detail1 },
    { id: 1, img: img_detail2 },
    { id: 1, img: img_detail1 },
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
      <div className="section-activity-detail">
        <div className="activity-detail-img">
          <img className="img-display" src={img_detail1} />
          <img className="img-display" src={img_detail1} />
          <img className="img-display" src={img_detail1} />
        </div>
        {currentImages.map((images) => (
          <img className="img-responsive" src={images.img} key={images.id} />
        ))}

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
        <div className="activity-detail-content">
          <h1>มอบทุนการศึกษา</h1>
          <p>
            พลับพลาคอนกรีต มอบทุนการศึกษา 42,000 บาท
            สนับสนุนคณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏรำไพพรรณี
            เพื่อส่งเสริมโอกาสทางการศึกษาและพัฒนาศักยภาพของเยาวชนไทย
            พลับพลาคอนกรีต
            บริษัทชั้นนำด้านการผลิตและจำหน่ายผลิตภัณฑ์คอนกรีตเสริมเหล็ก
            ได้มอบทุนการศึกษาจำนวน 42,000 บาท ให้กับคณะเทคโนโลยีอุตสาหกรรม
            มหาวิทยาลัยราชภัฏรำไพพรรณี ทุนการศึกษานี้มอบให้กับนักศึกษาที่เรียนดี
            มีผลการเรียนดี และมีความประพฤติดี
            เพื่อสนับสนุนให้นักศึกษามีโอกาสศึกษาต่อจนสำเร็จการศึกษา
            การมอบทุนการศึกษาครั้งนี้สอดคล้องกับพันธกิจของพลับพลาคอนกรีต
            ที่มุ่งมั่นพัฒนาสังคมไทยผ่านการสนับสนุนด้านการศึกษา บริษัทฯ
            เชื่อมั่นว่าการศึกษาเป็นรากฐานสำคัญของการพัฒนาประเทศชาติ
            และการให้โอกาสทางการศึกษาแก่เยาวชนจะช่วยให้พวกเขาเติบโตเป็นผู้ใหญ่ที่มีคุณภาพ
            สามารถนำความรู้และทักษะที่มีกลับมาพัฒนาประเทศชาติต่อไป
            คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏรำไพพรรณี
            รู้สึกขอบคุณพลับพลาคอนกรีตสำหรับการมอบทุนการศึกษาครั้งนี้
            ทุนการศึกษานี้จะเป็นกำลังใจให้นักศึกษาตั้งใจเรียนและพัฒนาตนเองต่อไป
            ทางคณะฯ จะพยายามส่งเสริมให้นักศึกษาได้รับความรู้และทักษะที่จำเป็น
            เพื่อเป็นกำลังสำคัญในการพัฒนาประเทศชาติต่อไป
          </p>
          <button>ย้อนกลับ</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
