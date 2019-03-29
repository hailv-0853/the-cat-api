import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FILTER_DATA from '../Data/Filter';

import SelectFilter from './SelectFilter';
import FilterOption from './FilterOption';

import Pagination from '../Containers/Pagination';

const PresentationalHeader = ({
  order,
  totalPage,
  getFilterHandler,
  getDefaultValue,
}) => (
  <Fragment>
    <h1>My cats library</h1>
    {FILTER_DATA.map(({
      ID, FILTER_NAME, TYPE, OPTIONS,
    }) => (
      <SelectFilter
        key={ID}
        id={ID}
        filterName={FILTER_NAME}
        onChange={getFilterHandler(TYPE)}
        defaultValue={getDefaultValue(TYPE)}
      >
        {OPTIONS.map(option => (
          <FilterOption
            optionValue={option.OPTION_VALUE}
            optionName={option.OPTION_NAME || option.OPTION_VALUE}
          />
        ))}
      </SelectFilter>
    ))}
    {order !== 'RANDOM' && (
      <Pagination totalPage={totalPage} buttonToDisplay={5} />
    )}
  </Fragment>
);

PresentationalHeader.propTypes = {
  order: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  getFilterHandler: PropTypes.func.isRequired,
  getDefaultValue: PropTypes.func.isRequired,
};

export default PresentationalHeader;
