import './Main.css';

import usePokemon from '../../hooks/usePokemon.js';

// component imports
import PokeList from '../PokeList/PokeList.js';
import Controls from '../Controls/Controls';

export default function Main() {
  const {
    pokemonList,
    loading,
    types,
    selectedType,
    setSelectedType,
    setSearchTerm,
  } = usePokemon();
  if (loading) return <div className="loader"></div>;
  return (
    <div className="main">
      <Controls types={types} selectedType={selectedType} setSelectedType={setSelectedType} setSearchTerm={setSearchTerm} />
      <PokeList pokemonList={pokemonList} />
    </div>
  );
}
