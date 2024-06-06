import React, { useState, useContext } from "react";
import "../Home_DetailShouldKnow/homedetail.css";

// images
import detail_1 from "../../../../assets/Images/DetailShouldKnow/img-detail1.png";
import detail_2 from "../../../../assets/Images/DetailShouldKnow/img-detail2.png";
import detail_3 from "../../../../assets/Images/DetailShouldKnow/img-detail3.png";
import detail_4 from "../../../../assets/Images/DetailShouldKnow/img-detail4.png";

import detail_full2 from "../../../../assets/Images/DetailShouldKnow/detail-full2.jpg"
import detail_full3 from "../../../../assets/Images/DetailShouldKnow/5สิ่งที่ควรรู้.png"
import detail_full4 from "../../../../assets/Images/DetailShouldKnow/detail-full4.jpg"

import icon_1 from "../../../../assets/Images/Icons/icon-detail1.png";
import icon_2 from "../../../../assets/Images/Icons/icon-detail2.png";
import icon_3 from "../../../../assets/Images/Icons/icon-detail3.png";
import icon_4 from "../../../../assets/Images/Icons/icon-detail4.png";

import { StyleContext } from "../../../../App";

export default function HomeDetail() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isDetailV_2, setIsDetail_2] = useState(false);
  const [isDetailV_3, setIsDetail_3] = useState(false);
  const [isDetailV_4, setIsDetail_4] = useState(false);

  const {setStyleNone} = useContext(StyleContext);

  const toggleDetailVisibility = () => {
    setIsDetailVisible(prevState => {
      const nextStyle = prevState ? "flex" : "none";
      setStyleNone(nextStyle);
      return !prevState;
    });
  };
  const toggleDetailV_2 = () => {
      setIsDetail_2(prevState => {
        const nextStyle = prevState ? "flex" : "none";
        setStyleNone(nextStyle);
        return !prevState;
      });
  };
  const toggleDetailV_3 = () => {
    setIsDetail_3(prevState => {
      const nextStyle = prevState ? "flex" : "none";
      setStyleNone(nextStyle);
      return !prevState;
    });
  };
  const toggleDetailV_4 = () => {
    setIsDetail_4(prevState => {
      const nextStyle = prevState ? "flex" : "none";
      setStyleNone(nextStyle);
      return !prevState;
    });
  };

  const handleClickInsideFixedDetail = (e) => {
    // หยุด Event Bubbling
    e.stopPropagation();
};
  return (
    <>
      <div className="section-home-details">
        <h1>รายละเอียดที่ควรรู้</h1>

        <div className="section-home-details-items">
          {/* detail box 1 */}
          <div className="details-item-box" onClick={toggleDetailVisibility}>
            <div className="details-icon-box">
              <img src={icon_1} />
            </div>

            <div className="detail-text">
              <h2>แผ่นพื้นซีแพค</h2>
              <p>
                แผ่นพื้นซีแพค CPAC <br /> ดีกว่าแผ่นพื้นทั่วไปอย่างไร
              </p>
            </div>

            <div className="detail-img">
              <img src={detail_1} alt="แผ่นพื้นซีแพค CPAC ดีกว่าแผ่นพื้นทั่วไปอย่างไร"/>
            </div>

            <div className={`detail-img-fixed ${isDetailVisible ? 'visible' : ''}`}>
              <img src={detail_1} alt="แผ่นพื้นซีแพค CPAC ดีกว่าแผ่นพื้นทั่วไปอย่างไร" onClick={handleClickInsideFixedDetail}/>
            </div>
          </div>


          {/* detail box 2 */}
          <div className="details-item-box" onClick={toggleDetailV_2}>
            <div className="details-icon-box">
              <img src={icon_2}/>
            </div>

            <div className="detail-text">
              <h2>คำนวณค่าโหลดน้ำหนักบรรทุก</h2>
              <p>
                ตารางคำนวณน้ำหนัก <br /> บรรทุก แผ่นพื้น CPAC
              </p>
            </div>

            <div className="detail-img">
              <img src={detail_2} alt="ค่าโหลดน้ำหนักบรรทุก"/>
            </div>

            <div className={`detail-img-fixed ${isDetailV_2 ? 'visible' : ''}`}>
              <img src={detail_full2} alt="ค่าโหลดน้ำหนักบรรทุก" onClick={handleClickInsideFixedDetail}/>
            </div>
          </div>


          {/* detail box 3 */}
          <div className="details-item-box" onClick={toggleDetailV_3}>
            <div className="details-icon-box">
              <img src={icon_3} />
            </div>

            <div className="detail-text">
              <h2>การใช้งานแผ่นพื้นตันให้ถูกต้อง</h2>
              <p>
                การใช้งาน CPAC <br /> แผ่นพื้นตัดให้ถูกต้องเพื่อความปลอดภัย
              </p>
            </div>

            <div className="detail-img">
              <img src={detail_3} alt="การใช้งานแผ่นพื้นตันให้ถูกต้อง"/>
            </div>

            <div className={`detail-img-fixed ${isDetailV_3 ? 'visible' : ''}`}>
              <img src={detail_full3} alt="การใช้งานแผ่นพื้นตันให้ถูกต้อง" onClick={handleClickInsideFixedDetail}/>
            </div>
          </div>


          {/* detail box 4 */}
          <div className="details-item-box" onClick={toggleDetailV_4}>
            <div className="details-icon-box">
              <img src={icon_4} />
            </div>

            <div className="detail-text">
              <h2>ติดตั้งแผ่นพื้นตัดให้ปลอดภัย</h2>
              <p>
                การติดตั้งแผ่นพื้นตัด CPAC ให้ปลอดภัย <br />{" "}
                ต้องค้ำยันให้ถูกต้อง
              </p>
            </div>

            <div className="detail-img">
              <img src={detail_4} alt="ติดตั้งแผ่นพื้นตัดให้ปลอดภัย"/>
            </div>

            <div className={`detail-img-fixed ${isDetailV_4 ? 'visible' : ''}`}>
              <img src={detail_full4} alt="ติดตั้งแผ่นพื้นตัดให้ปลอดภัย" onClick={handleClickInsideFixedDetail}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
