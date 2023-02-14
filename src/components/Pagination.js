import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalProducts, productsPerPage, paginate }) => {
  const pageNumbers = [];
  const paginationLinks = document.querySelectorAll(".page-link--num");

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav
        aria-label="Page navigation"
        className="d-flex justify-content-center"
      >
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link
                className={`page-link page-link--num fs-4 px-4 py-2 text-secondary ${
                  number === 1 ? "fw-bolder text-black" : ""
                }`}
                // href="!#"
                onClick={(e) => paginate(e, number, paginationLinks)}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
