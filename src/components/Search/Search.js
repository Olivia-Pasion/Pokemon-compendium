import { useState } from 'react';

export default function Search({ setSearchTerm }) {
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(currentSearchTerm);
        }}
      >
        <input
          value={currentSearchTerm}
          onFocus={() => setCurrentSearchTerm('')}
          onChange={(e) => setCurrentSearchTerm(e.target.value)}
          type="text"
        />
        <button>🔍</button>
      </form>
      <button className="home" onClick={() => setSearchTerm('')}>
        Show All Pokemon
      </button>
    </div>
  );
}
