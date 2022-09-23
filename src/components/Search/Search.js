import { useState } from 'react';

import './Search.css';

export default function Search({ searchTerm, setSearchTerm, setPage }) {
  const [searchInput, setSearchInput] = useState('');
  let showAllButton;

  // Shows button that provides original list structure of data if there's a search term
  if (searchTerm)
    showAllButton = (
      <button className="home" onClick={() => setSearchTerm('')}>
        Show All Pokemon
      </button>
    );
  return (
    <div>
      <h4 className="search-label">Find A Pokemon</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchInput) {
            setSearchTerm(searchInput);
            setPage(1);
          }
        }}
      >
        <input
          value={searchInput}
          onFocus={() => setSearchInput('')}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
        />
        <button className="submit">🔍</button>
      </form>
      {showAllButton}
    </div>
  );
}
