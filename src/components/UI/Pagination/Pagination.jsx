import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, changePage }) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div className={styles.wrapper}>
      {pagesArray.map((pageNumber) => (
        <span
          onClick={() => changePage(pageNumber)}
          key={pageNumber}
          className={
            currentPage === pageNumber
              ? [styles.page, styles.active].join(" ")
              : styles.page
          }
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
