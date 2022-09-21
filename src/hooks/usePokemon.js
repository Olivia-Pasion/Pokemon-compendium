// react
import { useState, useEffect } from 'react';

// services
import { fetchPokemon } from '../services/pokemon.js';

// provides data from API
export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
        console.log(pokemon);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return pokemon;
}