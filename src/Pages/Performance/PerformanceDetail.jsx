import React, { useState, useEffect } from 'react'
import '../Performance/performancedetail.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';

// image 
import img_detail1 from '../../assets/Images/Performance/performanceDetail1.png'
import img_detail2 from '../../assets/Images/Performance/performance2.png'

const initialState = {
  performance: "",
  content: "",
  img1: "",
  img2: "",
  img3: "",
};

export default function PerformanceDetail() {
  const [currentPerformance, setCurrentPerformance] = useState(1);
  const performancePerImg = 1;
  const [data, setData] = useState(initialState);
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/performance");
  }

    useEffect(() => {
      id && getSingleUser();
    }, [id]);
  
    const getSingleUser = async () => {
      const docRef = doc(db, "performance", id); 
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) { 
        setData({ ...snapshot.data() });
      }
    };

  const images = [
    { img: data.img1 },
    { img: data.img2 },
    { img: data.img3 }
  ];

  const indexLast = currentPerformance * performancePerImg;
  const indexFirst = indexLast - performancePerImg;

  const currentImages = images.slice(indexFirst, indexLast);

  const totalImg = Math.ceil(images.length / performancePerImg);

  const handleLast = () => {
    setCurrentPerformance((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFirst = () => {
    setCurrentPerformance((prevPage) => Math.min(prevPage + 1, totalImg));
  };
  return (
    <>
     <Navbar/>
     <div className='section-performance-detail'>
            <div className='performance-detail-img'>
                <img className="img-display" src={data.img1}/>
                <img className="img-display" src={data.img2}/>
                <img className="img-display" src={data.img3}/>
            </div>
            {currentImages.map((images) => (
          <img className="img-responsive" src={images.img} key={images.id} />
        ))}

        <div className="btn-group">
          <button
            className="btn-prev"
            onClick={handleLast}
            disabled={currentPerformance === 1}
          >
            Prev
          </button>
          <button
            className="btn-next"
            onClick={handleFirst}
            disabled={currentPerformance === totalImg}
          >
            Next
          </button>
        </div>
            <div className='performance-detail-content'>
                <h1>{data.performance}</h1>
                <p>{data.content}</p>
                <button onClick={handlePage}>ย้อนกลับ</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}
