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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const {styleNone} = useContext(StyleContext);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            {/* <a>ตารางน้ำหนัก</a> */}
            <div className="dropdown" onClick={toggleDropdown}>
              <a>ตารางน้ำหนัก</a>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/project-plubplaconcrete.appspot.com/o/FilesPDF%2F%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99.pdf?alt=media&token=7bd79b6d-cdea-4ad0-990b-c84e13c7249b">ตารางรับน้ำหนักแผ่นพื้น</a>
                  <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/project-plubplaconcrete.appspot.com/o/FilesPDF%2F%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B9%87%E0%B8%A1.pdf?alt=media&token=ef9db3d1-655b-44f0-bbe4-decca9db45a3">การรับน้ำหนักของเสาเข็ม</a>
                </div>
              )}
          </div>

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
