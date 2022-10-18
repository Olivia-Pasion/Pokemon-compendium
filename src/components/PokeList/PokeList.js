import './PokeList.css';
import background from '../../storage_box_background.png';
import PokeCard from '../PokeCard/PokeCard';

export default function PokeList({ pokemonList }) {
  return (
    <div className="poke-list"style={{ backgroundImage: `url(${background})` }}>
      {pokemonList.map((pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)}
    </div>
  );
}