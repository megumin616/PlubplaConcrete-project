import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

import menu from '../../assets/Images/Menu/menu.png'
import menuX from '../../assets/Images/Menu/menuX.png'

import { StyleContext } from '../../App'

export default function Navbar() {
  // const [navbarStyle, setNavbarStyle] = useState({});
  const [backgroundColor, setBackgroundColor] = useState("");
  const [transition, setTransition] = useState("");
  const navRef = useRef();

  const {styleNone} = useContext(StyleContext);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setBackgroundColor("rgba(149, 223, 255, 0.612)");
      setTransition("1s");
    } else {
      setBackgroundColor("");
      setTransition("");
    }
  }
  // const handleScroll = () => {
  //   if (window.scrollY >= 300) {
  //     setNavbarStyle({
  //       backgroundColor: "rgba(149, 223, 255, 0.612)",
  //       transition: "1s",
  //     })
  //   } else {
  //     setNavbarStyle({
  //       backgroundColor: ""
  //     })
  //   }
  // }

  return (
    <div className='navbar' style={{backgroundColor: backgroundColor, transition: transition, display: styleNone}}>
        <div className='navbar-logo'>
            <h1>Logo</h1>
        </div>

        <div className='navbar-list-text' ref={navRef}>
            <a><Link to='/'>หน้าแรก</Link></a>
            <a><Link to='/products'>สินค้า</Link></a>
            <a><Link to='/activity'>กิจกรรม</Link></a>
            <a><Link to='/performance'>ผลงาน</Link></a>
            <a><Link to='/aboutus'>ลูกค้าไว้วางใจ</Link></a>
            <a><Link to='/contact'>ติดต่อเรา</Link></a>
            <a>ตารางน้ำหนัก</a>

            <button onClick={showNavbar} className="nav-btn nav-close-btn">
              <img src={menuX}/>
            </button>
        </div>

        <button onClick={showNavbar} className="nav-btn nav-dis-none">
          <img src={menu}/>
        </button>

    </div>
  )
}
