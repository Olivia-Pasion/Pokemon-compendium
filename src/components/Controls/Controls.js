import Filter from '../Filter/Filter';
import Search from '../Search/Search';

export default function Controls({ types, selectedType, setSelectedType, setSearchTerm }) {
  return (
    <div>
      <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      <Search setSearchTerm={setSearchTerm} />
    </div>
  );
}