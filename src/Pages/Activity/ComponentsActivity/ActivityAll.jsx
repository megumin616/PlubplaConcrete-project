import React, { useState } from "react";
import "../ComponentsActivity/activityall.css";

// images
import img_activity1 from "../../../assets/Images/Activity/activity1.png";

export default function ActivityAll() {
  const [currentPage, setCurrentPage] = useState(1);
  const activityPerPage = 6;

  const activities = [
    { id: 1, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 2, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 3, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 4, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 5, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 6, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 7, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 8, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 9, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
    { id: 10, title: "มอบทุนการศึกษา", date: "00/00/0000", img: img_activity1 },
  ];

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

  return (
    <>
      <div className="section-activity-all">
        <h1>กิจกรรมของเรา</h1>
        <div className="section-activity-all-container">
          <div className="container-activities">
            {currentActivities.map((activities) => (
              <div className="activity" key={activities.id}>
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
