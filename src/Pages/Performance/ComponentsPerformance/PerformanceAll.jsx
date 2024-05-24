import React, { useEffect, useState } from "react";
import "../ComponentsPerformance/performanceall.css";

// images
import img_activity1 from "../../../assets/Images/Performance/performance1.png";

export default function PerformanceAll() {
  const [currentPage, setCurrentPage] = useState(1);
  // const performancePerPage = 6;
  const [performancePerPage, setPerformancePerPage] = useState(6);

  useEffect(() => {
    if (
      window.matchMedia("(min-width: 319px) and (max-width: 431px)").matches
    ) {
      setPerformancePerPage(4);
    }
  }, []);

  const performanceData = [
    { id: 1, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 2, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 3, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 4, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 5, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 6, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 7, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 8, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    { id: 9, title: "โครงการบ้านเพชร", date: "00/00/0000", img: img_activity1 },
    {
      id: 10,
      title: "โครงการบ้านเพชร",
      date: "00/00/0000",
      img: img_activity1,
    },
  ];

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
              <div className="performance" key={performanceData.id}>
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
