import React, { useEffect, useState } from "react";
import "../Contact/contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


// image icon
import icon1 from "../../assets/Images/Icons/icon-contact-facebook.png";
import icon2 from "../../assets/Images/Icons/icon-contact-line.png";
import icon3 from "../../assets/Images/Icons/icon-contact-phone.png";
import icon4 from "../../assets/Images/Icons/icon-contact-email.png";
import map from "../../assets/Images/Background/google-map.png";

export default function Contact() {

  return (
    <>
      <Navbar />
      <div className="section-contact">
      {/* <Footer /> */}
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
          {/* Map in iframe style  */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1590.3901577548418!2d102.14416045715312!3d12.61873914418054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1716273380448!5m2!1sth!2sth"
            width="600"
            height="450"
            style={{border: "0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>




          <div className="box-1"></div>
          <div className="box-2"></div>
          <a href="https://maps.app.goo.gl/ZVcsr7hoWparjxSN8" target="_blank">
            Google map
          </a>
        </div>
        <h1 className="contact-h1-map">ติดต่อเรา</h1>
      </div>
      <Footer/>
    </>
  );
}
