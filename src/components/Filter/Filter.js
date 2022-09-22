import React from 'react';

export default function Filter({ types, selectedType, setSelectedType, setPage }) {
  return (
    <div className="filter">
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
