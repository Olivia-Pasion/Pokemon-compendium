import React from 'react';
import './Filter.css';

export default function Filter({ types, selectedType, setSelectedType, setPage }) {
  return (
    <div className="filter">
      <h4>Filter By Type</h4>
      <select
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value);
          setPage(1);
        }}
      >
        <option value="all">All</option>
        {types.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
