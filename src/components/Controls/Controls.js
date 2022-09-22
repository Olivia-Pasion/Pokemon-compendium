import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Controls.css';
import background from '../../controls_background.png';

export default function Controls({ types, selectedType, setSelectedType, setSearchTerm }) {
  return (
    <div className="controls" style={{ backgroundImage: `url(${background})` }}>
      <div className="filter-component">
        <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      <div className="search-component">
        <Search setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
}
