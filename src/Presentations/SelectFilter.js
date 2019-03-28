import React from "react";

const SelectFilter = ({ id, filterName, defaultValue, children, onChange }) => (
  <div className="filter">
    <label htmlFor={id}>{filterName}</label>
    <select value={defaultValue} onChange={onChange}>
      {children}
    </select>
  </div>
);

export default SelectFilter;
