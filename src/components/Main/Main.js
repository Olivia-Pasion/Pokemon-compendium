import './Main.css';

import usePokemon from '../../hooks/usePokemon.js';
import PokeList from '../PokeList/PokeList.js';

export default function Main() {
  const { pokemonList, loading } = usePokemon();
  if (loading) return <div className="loader"></div>;
  return (
    <div className="main">
      <PokeList pokemonList={pokemonList} />
    </div>
  );
}
