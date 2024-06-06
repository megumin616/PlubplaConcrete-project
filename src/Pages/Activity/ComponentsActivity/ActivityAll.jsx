import React, { useContext, useEffect, useState } from "react";
import "../ComponentsActivity/activityall.css";

// images
import img_activity1 from "../../../assets/Images/Activity/activity1.png";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import moment from "moment";

import { StyleContext } from "../../../App";

export default function ActivityAll() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activityPerPage, setActivityPerPage] = useState(6)
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const {setStyleNavFixed} = useContext(StyleContext);
  
  useEffect(() => {
    if (window.matchMedia("(min-width: 319px) and (max-width: 431px)").matches) {
      setActivityPerPage(4)
    } else if (window.matchMedia("(min-width: 810px) and (max-width: 1020px)").matches) {
      setActivityPerPage(4)
    } else if (window.matchMedia("(min-width: 1020px) and (max-width: 1376px)").matches) {
      setActivityPerPage(4)
    } else if (window.matchMedia("(min-width: 760px) and (max-width: 810px)").matches) {
      setActivityPerPage(4)
    }
  },[])


  //ดึงข้อมูลมาแสดง
  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "activities"), //อย่าลืมมาเปลี่ยนตรงนี้ หลังจากสร้างไฟล์ตารางใหม่
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setActivity(list);
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

  const activities = activity.map((item) => ({
    id: item.id,
    title: item.activity,
    date: moment(item.timestamp.toDate()).format("YYYY-MM-DD"), // ใช้ moment.js ในการแปลงวันที่,
    img: item.img1,
  }));


  const indexOfLastActivity = currentPage * activityPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activityPerPage;

  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const totalPages = Math.ceil(activities.length / activityPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prePage) => Math.min(prePage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // const handleNavFixed = () => {
  //   setStyleNavFixed('"none"')
  // }

  return (
    <>
      <div className="section-activity-all">
        <h1 className="section-text">กิจกรรมของเรา</h1>
        <div className="section-activity-all-container">
        <h1 className="section-text-h1">กิจกรรมทั้งหมด</h1>
          <div className="container-activities">
            {currentActivities.map((activities) => (
              <div className="activity" key={activities.id} onClick={() => {
                navigate(`/activitydetail/${activities.id}`);
                // handleNavFixed();
              }}>
                <img src={activities.img} />
                <h2>{activities.title}</h2>
                <p>{activities.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-activity-pagination">
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </button>

              {[...Array(totalPages).keys()].map((page) => (
                <button
                  className="activity-button-number"
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
