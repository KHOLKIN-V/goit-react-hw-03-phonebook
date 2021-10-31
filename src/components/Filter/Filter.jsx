import React from "react";
import PropTypes from "prop-types";
import cs from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <div className={cs.filterContainer}>
      Find contacts by name
      <input
        type="text"
        className={cs.input}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
