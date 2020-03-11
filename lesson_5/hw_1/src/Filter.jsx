import React from "react";

const Filter = ({ filterText, newFilterText,length }) => {
  return (
    <div className="filter">
      <span className="filter__count">{length}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={event => newFilterText(event.target.value)}
      />
    </div>
  );
};

export default Filter;
