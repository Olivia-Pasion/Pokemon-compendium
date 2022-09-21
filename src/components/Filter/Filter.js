import React from 'react';


export default function Filter({ types }) {
  return (
    <div className="filter">
      <select>
        <option value="all">All</option>
        {types.map((type) => (
          <option value={type} key={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
