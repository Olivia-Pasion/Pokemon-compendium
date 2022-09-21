// react
import { useState, useEffect } from 'react';

// services
import { fetchPokemon } from '../services/pokemon.js';

// provides data from API
export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemonList(data);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return pokemonList;
}