import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <h1>Logo</h1>
        </div>

        <div className='navbar-list-text'>
            <a><Link to='/'>หน้าแรก</Link></a>
            <a><Link to='/products'>สินค้า</Link></a>
            <a><Link to='/activity'>กิจกรรม</Link></a>
            <a><Link to='/performance'>ผลงาน</Link></a>
            <a><Link to='/aboutus'>ลูกค้าไว้วางใจ</Link></a>
            <a><Link to='/contact'>ติดต่อเรา</Link></a>
            <a>ตารางน้ำหนัก</a>
        </div>
    </div>
  )
}
