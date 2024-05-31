import React, { useState, useEffect } from "react";
import "../Activity/activitydetail.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

// image
import img_detail1 from "../../assets/Images/Activity/activity-detail1.png";
import img_detail2 from "../../assets/Images/Activity/activity-detail2.png";

const initialState = {
  activity: "",
  content: "",
  img1: "",
  img2: "",
  img3: "",
};

export default function ActivityDetail() {
  const [currentProduct, setCurrentProduct] = useState(1);
  const productPerImg = 1;
  const [data, setData] = useState(initialState);
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/activity");
  }

    useEffect(() => {
      id && getSingleUser();
    }, [id]);
  
    const getSingleUser = async () => {
      const docRef = doc(db, "activities", id); 
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

  const indexLast = currentProduct * productPerImg;
  const indexFirst = indexLast - productPerImg;

  const currentImages = images.slice(indexFirst, indexLast);

  const totalImg = Math.ceil(images.length / productPerImg);

  const handleLast = () => {
    setCurrentProduct((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFirst = () => {
    setCurrentProduct((prevPage) => Math.min(prevPage + 1, totalImg));
  };
  return (
    <>
      <Navbar />
      <div className="section-activity-detail">
        <div className="activity-detail-img">
          <img className="img-display" src={data.img1} />
          <img className="img-display" src={data.img2} />
          <img className="img-display" src={data.img3} />
        </div>
        {currentImages.map((images) => (
          <img className="img-responsive" src={images.img} key={images.id} />
        ))}

        <div className="btn-group">
          <button
            className="btn-prev"
            onClick={handleLast}
            disabled={currentProduct === 1}
          >
            Prev
          </button>
          <button
            className="btn-next"
            onClick={handleFirst}
            disabled={currentProduct === totalImg}
          >
            Next
          </button>
        </div>
        <div className="activity-detail-content">
          <h1>{data.activity}</h1>
          <p>{data.content}</p>
          <button onClick={handlePage}>ย้อนกลับ</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
