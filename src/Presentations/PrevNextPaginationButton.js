import React from "react";
import { Link } from "react-router-dom";

import cx from "classnames";

export const PrevPaginationButton = ({ page, disabled }) => (
  <Link
    className={cx("btn", { "btn--disabled": disabled })}
    to={`/?page=${page}`}
  >
    {"<"}
  </Link>
);

export const NextPaginationButton = ({ page, disabled }) => (
  <Link
    className={cx("btn", { "btn--disabled": disabled })}
    to={`/?page=${page}`}
  >
    {">"}
  </Link>
);
