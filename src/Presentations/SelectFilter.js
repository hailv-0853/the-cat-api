import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = ({
  id, filterName, defaultValue, children, onChange,
}) => (
  <div className="filter">
    <label htmlFor={id}>{filterName}</label>
    <select value={defaultValue} id={id} onChange={onChange}>
      {children}
    </select>
  </div>
);

SelectFilter.propTypes = {
  id: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFilter;
