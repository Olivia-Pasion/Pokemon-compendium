export default function Search({ searchTerm, setSearchTerm }) {
  
  
  return (
    <div>
      <form>
        <input value={searchTerm} type='text'/>
        <button>🔍</button>
      </form>
    </div>
  );
}