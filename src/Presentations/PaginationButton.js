import React from 'react';

import cx from 'classnames';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const PaginationButton = ({ pageNumber, page }) => (
  <Link
    className={cx('btn', { 'btn--active': page === pageNumber })}
    to={`/?page=${pageNumber}`}
  >
    {pageNumber}
  </Link>
);

PaginationButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default PaginationButton;
