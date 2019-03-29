import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import PaginationButton from '../Presentations/PaginationButton';

import {
  PrevPaginationButton,
  NextPaginationButton,
} from '../Presentations/PrevNextPaginationButton';

const createPaginationButtonArr = buttonToDisplay => (
  Array(buttonToDisplay)
    .fill(0)
    .map((value, index) => value + 2 + index)
);

let paginationButtonArr = [];

let modifiedPaginationButtons = [];

const Pagination = ({ totalPage, buttonToDisplay }) => {
  let page;
  if (window.location.search) {
    page = parseInt(queryString.parse(window.location.search).page, 10);
  } else {
    page = 1;
  }

  paginationButtonArr = createPaginationButtonArr(buttonToDisplay);

  const number = Math.floor((page - 2) / buttonToDisplay);
  const maxNumber = Math.floor((totalPage - 2) / buttonToDisplay);
  modifiedPaginationButtons = paginationButtonArr.map(
    pageNumber => pageNumber + number * buttonToDisplay,
  );
  return (
    <div className="pagination">
      {page === 1 ? (
        <PrevPaginationButton disabled page={page} />
      ) : (
        <PrevPaginationButton page={page - 1} />
      )}

      <PaginationButton pageNumber={1} page={page} />

      {number === 0
        && totalPage > buttonToDisplay + 1
        && modifiedPaginationButtons.map(
          pageNumber => (
            pageNumber <= totalPage && (
              <PaginationButton pageNumber={pageNumber} page={page} />
            )
          ),
        )}

      {totalPage > buttonToDisplay + 1 && '...'}

      {totalPage < buttonToDisplay + 2
      && paginationButtonArr.map(
        pageNumber => (
          pageNumber < totalPage && (
            <PaginationButton pageNumber={pageNumber} page={page} />
          )
        ),
      )}

      {number >= 1
      && modifiedPaginationButtons.map(
        pageNumber => (
          pageNumber <= totalPage && (
            <PaginationButton pageNumber={pageNumber} page={page} />
          )
        ),
      )}

      {number > 0 && number <= maxNumber - 1 && '...'}

      {totalPage >= buttonToDisplay + 2 && number < maxNumber && (
        <PaginationButton pageNumber={totalPage} page={page} />
      )}

      {totalPage < buttonToDisplay + 2 && number <= maxNumber && (
        <PaginationButton pageNumber={totalPage} page={page} />
      )}

      {page === totalPage ? (
        <NextPaginationButton disabled page={page} />
      ) : (
        <NextPaginationButton page={page + 1} />
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  buttonToDisplay: PropTypes.number.isRequired,
};

export default Pagination;
