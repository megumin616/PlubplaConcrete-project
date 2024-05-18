import React from "react";
import "../Contact/contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"

// image icon
import icon1 from "../../assets/Images/Icons/icon-contact-facebook.png";
import icon2 from "../../assets/Images/Icons/icon-contact-line.png";
import icon3 from "../../assets/Images/Icons/icon-contact-phone.png";
import icon4 from "../../assets/Images/Icons/icon-contact-email.png";
import map from "../../assets/Images/Background/google-map.png"

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="section-contact">
        <div className="contact-text">
          <h1>ติดต่อเรา</h1>
          <div>
            <img src={icon1} />
            <a>Facebook: พลับพลาคอนกรีต</a>
          </div>
          <div>
            <img src={icon2} />
            <p>
              Line: @plubplaconcrete <br /> ID number: 0886223030
            </p>
          </div>
          <div>
            <img src={icon3} />
            <p>Phone: 088-622-3030 , 090-969-5591</p>
          </div>
          <div>
            <img src={icon4} />
            <p>Email: ppc_53@hotmail.com</p>
          </div>
        </div>

        <div className="contact-map">
          <img src={map}/>
          <div className="box-1"></div>
          <div className="box-2"></div>
          <a href="https://maps.app.goo.gl/ZVcsr7hoWparjxSN8" target="_blank">Google map</a>
        </div>
      </div>
      <Footer/>
    </>
  );
}
