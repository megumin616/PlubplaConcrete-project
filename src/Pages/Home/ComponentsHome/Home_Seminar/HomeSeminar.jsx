import React from 'react'
import '../Home_Seminar/homeseminar.css'

// images 
import img1 from '../../../../assets/Images/Seminar/seminar1.png'
import img2 from '../../../../assets/Images/Seminar/seminar2.png'
import img3 from '../../../../assets/Images/Seminar/seminar3.png'

export default function HomeSeminar() {
  return (
    <>
        <div className='section-home-seminar'>
            <h1>ของสัมมนาคุณ</h1>

            <div className='seminar-box'>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
            </div>
        </div>
    </>
  )
}
