import React from "react";
import "../Footer/Footer.css";

// images
import icon_footer1 from "../../assets/Images/Icons/icon-footer1.png";
import icon_footer2 from "../../assets/Images/Icons/icon-footer2.png";
import icon_footer3 from "../../assets/Images/Icons/icon-footer3.png";
import facebook from "../../assets/Images/Icons/icon-facebook.png";
import line from "../../assets/Images/Icons/icon-line.png";
import gmail from "../../assets/Images/Icons/icon-gmail.png";
import instagram from "../../assets/Images/Icons/icon-instagram-2.png";

export default function Footer() {
  return (
    <>
      <div className="section-footer">
        {/* detail about us  */}
        <div className="section-footer-detail">
          <div className="section-footer-detail-box">
            <div className="section-footer-title">
              <div>
                <h2>PlubplaConcrete</h2>
                <h6>พลับพลาคอนกรีต</h6>
              </div>
            </div>
            <p>
              ผู้ผลิตและจำหน่ายผลิตภัณฑ์คอนกรีต SCG <br />
              แผ่นพื้นสำเร็จรูปและเสาเข็มตรา CPAC <br />
              ได้รับรองมาตรฐานมอก.ทุกผลิตภัณฑ ์ <br />
              พร้อมด้วยกำลังการผลิตสูงที่สุด <br />
              ในจังหวัดจันทบุรีและตราด
            </p>
          </div>
          <hr className="responsive-hr"/>

          <div className="section-footer-detail-box">
            <div className="section-footer-title">
              <h2>สินค้าขายดี</h2>
            </div>
            <p>แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค</p>
            <p>เสาเข็มคอนกรีตอัดแรงซีแพค (เสาเข็มใหญ่)</p>
            <p>คอนกรีตผสมเสร็จ SCG</p>
            <p>อิฐบล็อก คอนกรีตบล็อก</p>
          </div>
          <hr className="responsive-hr"/>

          <div className="section-footer-detail-box">
            <div className="section-footer-title">
              <h2>เกี่ยวกับเรา</h2>
            </div>
            <p>ประวัติของเรา</p>
            <p>ผลงานของเรา</p>
            <p>กิจกรรมของเรา</p>
          </div>
          <hr className="responsive-hr"/>

          <div className="section-footer-detail-box">
            <div className="section-footer-title">
              <h2>ติดต่อเรา</h2>
            </div>
            <div className="section-footer-content">
              <img src={icon_footer1} />
              <p>content</p>
            </div>
            <div className="section-footer-content">
              <img src={icon_footer2} />
              <p>Plubplaconcrete@gmail.com</p>
            </div>
            <div className="section-footer-content">
              <img src={icon_footer3} />
              <div>
                <p>088-622-3030 <br/> 090-969-5591</p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        {/* social detail  */}
        <div className="section-footer-social">
          <div className="footer-social-box">
            <img src={facebook} />
          </div>
          <div className="footer-social-box">
            <img src={line} />
          </div>
          <div className="footer-social-box">
            <img src={gmail} />
          </div>
          <div className="footer-social-box">
            <img src={instagram} />
          </div>
        </div>
      </div>
    </>
  );
}
