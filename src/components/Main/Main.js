import usePokemon from '../../hooks/usePokemon.js';
import PokeList from '../PokeList/PokeList.js';

export default function Main() {
  const pokemonList = usePokemon();
  return (
    <div className='main'>
      <PokeList pokemonList={pokemonList}/>
    </div>
  );
}
