import React from "react";

const Pagination = ({ prev, next, currentPage,totalItems,itemsPerPage }) => {
    const isPrevPageAvailable = currentPage=== 0? true:false;
    const lastPage = totalItems/itemsPerPage;
    const isNextPageAvailable = (currentPage+1)>=lastPage ? true:false;
  return (
    <div className="pagination">
      <button className="btn" onClick={prev} disabled={isPrevPageAvailable}>
        ←
      </button>
  <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={next} disabled={isNextPageAvailable}>
        →
      </button>
    </div>
  );
};

export default Pagination;
