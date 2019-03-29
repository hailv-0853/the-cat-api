import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import cx from 'classnames';

export const PrevPaginationButton = ({ page, disabled }) => (
  <Link
    className={cx('btn', { 'btn--disabled': disabled })}
    to={`/?page=${page}`}
  >
    {'<'}
  </Link>
);

PrevPaginationButton.propTypes = {
  page: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export const NextPaginationButton = ({ page, disabled }) => (
  <Link
    className={cx('btn', { 'btn--disabled': disabled })}
    to={`/?page=${page}`}
  >
    {'>'}
  </Link>
);

NextPaginationButton.propTypes = {
  page: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};
