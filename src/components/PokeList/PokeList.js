import './PokeList.css';
import PokeCard from '../PokeCard/PokeCard';

export default function PokeList({ pokemonList }) {
  return (
    <div className="poke-list">
      {pokemonList.map((pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)}
    </div>
  );
}