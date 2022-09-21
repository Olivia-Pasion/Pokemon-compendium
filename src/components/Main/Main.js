import './Main.css';

import usePokemon from '../../hooks/usePokemon.js';

// component imports
import Filter from '../Filter/Filter.js';
import PokeList from '../PokeList/PokeList.js';
import Search from '../Search/Search';

export default function Main() {
  const { pokemonList, loading, types, selectedType, setSelectedType, setSearchTerm } = usePokemon();
  if (loading) return <div className="loader"></div>;
  return (
    <div className="main">
      <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType}/>
      <Search setSearchTerm={setSearchTerm} />
      <PokeList pokemonList={pokemonList} />
    </div>
  );
}
