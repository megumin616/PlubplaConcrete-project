import React, { useEffect, useState } from "react";
import "../Products/productdetail.css";
import Navbar from "../../Components/Navbar/Navbar";

// image
import product from "../../assets/Images/Products/แผ่นพื้นตันแผ่นพื้นคอนกรีตอัดแรงซีแพค.png";
import product2 from "../../assets/Images/Products/คอนกรีตผสมเสร็จ-SCG.png";
import Footer from "../../Components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const decoration = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
};
const initialState = {
  product: "",
  detail: "",
  content: "",
  img1: "",
  img2: "",
  img3: "",
};

export default function ProductDetail() {
  const [currentProduct, setCurrentProduct] = useState(1);
  const productPerImg = 1;
  const [data, setData] = useState(initialState);
  const { id } = useParams();

    useEffect(() => {
      id && getSingleUser();
    }, [id]);
  
    const getSingleUser = async () => {
      const docRef = doc(db, "products", id); 
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
  

  // console.log("data", data.product)

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
      <div className="section-productdetail">
        <div className="productdetail-img">
          <img className="img-display" src={data.img1} />
          <img className="img-display" src={data.img2} />
          <img className="img-display" src={data.img3} />
        </div>
        {/* <div className="img-container-responsive"> */}
        {currentImages.map((images,key) => (
          <img className="img-responsive" src={images.img} key={key} />
        ))}
        {/* </div> */}
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

        <div className="productdetail-content">
          <div className="box-content1">
            <h2>{data.product}</h2>
            <p>{data.detail}</p>
            <button>
              <Link to="/products" style={decoration}>
                ย้อนกลับ
              </Link>
            </button>
          </div>
          <div className="box-content2">
            <h2>รายละเอียด</h2>
            <p>{data.content}</p>
            <button>
              <Link to="/products" style={decoration}>
                ย้อนกลับ
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
