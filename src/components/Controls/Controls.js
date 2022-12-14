import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Controls.css';
import background from '../../controls_background.png';
import Paging from '../Paging/Paging';

export default function Controls({
  types,
  selectedType,
  setSelectedType,
  searchTerm,
  setSearchTerm,
  setPage,
  totalPages,
  page,
}) {
  return (
    <div className="controls" style={{ backgroundImage: `url(${background})` }}>
      <div className="controls-container">
        <Filter
          types={types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          setPage={setPage}
        />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setPage={setPage} />
        <Paging setPage={setPage} totalPages={totalPages} page={page} />

      </div>
    </div>
  );
}
