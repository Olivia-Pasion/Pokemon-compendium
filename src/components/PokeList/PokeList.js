import PokeCard from "../PokeCard/PokeCard";

export default function PokeList({ pokemonList }) {
  return (
    <>
      {pokemonList.map((pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)}
    </>
  );
}