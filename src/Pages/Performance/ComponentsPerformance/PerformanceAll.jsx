import React, { useEffect, useState } from "react";
import "../ComponentsPerformance/performanceall.css";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import moment from "moment";
import { db } from "../../../firebase";

// images
import img_activity1 from "../../../assets/Images/Performance/performance1.png";
import { useNavigate } from "react-router-dom";

export default function PerformanceAll() {
  const [currentPage, setCurrentPage] = useState(1);
  const [performancePerPage, setPerformancePerPage] = useState(6);
  const [performance, setPerformance] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.matchMedia("(min-width: 319px) and (max-width: 431px)").matches
    ) {
      setPerformancePerPage(4);
    } else if (window.matchMedia("(min-width: 810px) and (max-width: 1020px)")) {
      setPerformancePerPage(4);
    }
  }, []);

    //ดึงข้อมูลมาแสดง
    useEffect(() => {
      setLoading(true);
      const unsub = onSnapshot(
        collection(db, "performance"), //อย่าลืมมาเปลี่ยนตรงนี้ หลังจากสร้างไฟล์ตารางใหม่
        (snapshot) => {
          let list = [];
          snapshot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setPerformance(list);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        unsub();
      };
    }, []);
  
    //หากกำลังโหลดข้อมูล ให้แสดงหน้านี้ก่อน หรือจะให้แสดง UI อะไรก็ได้
    if (loading) {
      return console.log("loading..");
    }
  
    const performanceData = performance.map((item) => ({
      id: item.id,
      title: item.performance,
      date: moment(item.timestamp.toDate()).format("YYYY-MM-DD"), // ใช้ moment.js ในการแปลงวันที่,
      img: item.img1,
    }));


  const indexOfLastPerformance = currentPage * performancePerPage;
  const indexOfFirstPerformance = indexOfLastPerformance - performancePerPage;

  const currentPerformance = performanceData.slice(
    indexOfFirstPerformance,
    indexOfLastPerformance
  );

  const totalPages = Math.ceil(performanceData.length / performancePerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prePage) => Math.min(prePage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="section-performance-all">
        <div className="section-performance-all-container">
          <div className="container-activities">
            {currentPerformance.map((performanceData) => (
              <div className="performance" key={performanceData.id} onClick={() => navigate(`/performancedetail/${performanceData.id}`)}>
                <img src={performanceData.img} />
                <h2>{performanceData.title}</h2>
                <p>{performanceData.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-performance-pagination">
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>

            {[...Array(totalPages).keys()].map((page) => (
              <button
                className="performance-button-number"
                key={page + 1}
                onClick={() => handlePageClick(page + 1)}
              >
                {page + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
