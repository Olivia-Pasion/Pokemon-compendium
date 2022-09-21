import './Main.css';

import usePokemon from '../../hooks/usePokemon.js';

// component imports
import Filter from '../Filter/Filter.js';
import PokeList from '../PokeList/PokeList.js';

export default function Main() {
  const { pokemonList, loading, types } = usePokemon();
  if (loading) return <div className="loader"></div>;
  return (
    <div className="main">
      <Filter types={types}/>
      <PokeList pokemonList={pokemonList} />
    </div>
  );
}
