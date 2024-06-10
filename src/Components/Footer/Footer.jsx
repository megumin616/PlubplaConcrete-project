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
import { useNavigate } from "react-router-dom";

export default function Footer() {
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
  const facebookFuncion = () => {
    const url = 'https://www.facebook.com/plubplaconcrete'; // เปลี่ยน URL เป็น URL ที่คุณต้องการ
    window.open(url, '_blank', 'noopener,noreferrer');
  };
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
            <p onClick={handle1} style={{cursor: "pointer"}}>แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค</p>
            <p onClick={handle2} style={{cursor: "pointer"}}>เสาเข็มคอนกรีตอัดแรงซีแพค (เสาเข็มใหญ่)</p>
            <p onClick={handle3} style={{cursor: "pointer"}}>คอนกรีตผสมเสร็จ SCG</p>
            <p onClick={handle4} style={{cursor: "pointer"}}>อิฐบล็อก คอนกรีตบล็อก</p>
          </div>
          <hr className="responsive-hr"/>

          <div className="section-footer-detail-box">
            <div className="section-footer-title">
              <h2>เกี่ยวกับเรา</h2>
            </div>
            <p onClick={() => navigate("/aboutus")} style={{cursor: "pointer"}}>ประวัติของเรา</p>
            <p onClick={() => navigate("/performance")} style={{cursor: "pointer"}}>ผลงานของเรา</p>
            <p onClick={() => navigate("/activity")} style={{cursor: "pointer"}}>กิจกรรมของเรา</p>
          </div>
          <hr className="responsive-hr"/>

          <div className="section-footer-detail-box">
            <div className="section-footer-title">
              <h2>ติดต่อเรา</h2>
            </div>
            <div className="section-footer-content">
              <img src={icon_footer1} />
              <p onClick={() => navigate("/contact")} style={{cursor: "pointer"}}>content</p>
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
          <div className="footer-social-box" onClick={facebookFuncion}>
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
