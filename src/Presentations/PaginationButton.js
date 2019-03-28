import React from "react";

import cx from "classnames";

import { Link } from "react-router-dom";

const PaginationButton = ({ pageNumber, page }) => (
  <Link
    className={cx("btn", { "btn--active": page === pageNumber })}
    to={`/?page=${pageNumber}`}
  >
    {pageNumber}
  </Link>
);

export default PaginationButton;
