import React from 'react';
import PropTypes from 'prop-types';

const FilterOption = ({ optionValue, optionName }) => (
  <option value={optionValue}>{optionName}</option>
);

FilterOption.propTypes = {
  optionValue: PropTypes.string.isRequired,
  optionName: PropTypes.string.isRequired,
};

export default FilterOption;
