import React, { useRef, useState } from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

import menu from '../../assets/Images/Menu/menu.png'
import menuX from '../../assets/Images/Menu/menuX.png'

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }


  return (
    <div className='navbar'>
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
