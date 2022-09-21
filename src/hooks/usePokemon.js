// react
import { useState, useEffect } from 'react';

// services
import { fetchPokemon, fetchTypes } from '../services/pokemon.js';

// provides data from API
export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemonList(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTypeList = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      } catch (e) {
      /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchTypeList();
  }, []);

  return { pokemonList, loading, types };
}
