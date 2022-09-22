import { useState } from 'react';

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(searchInput);
        }}
      >
        <input
          value={searchInput}
          onFocus={() => setSearchInput('')}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
        />
        <button>🔍</button>
      </form>
      {showAllButton}
    </div>
  );
}
