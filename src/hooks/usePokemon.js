// react
import { useState, useEffect } from 'react';

// services
import { fetchPokemon, fetchTypes } from '../services/pokemon.js';

// provides data from API
export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (selectedType, searchTerm, page) => {
      try {
        const data = await fetchPokemon(selectedType, searchTerm, page);
        setPokemonList(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console.error(e);
      }
    };
    fetchData(selectedType, searchTerm, page);
  }, [selectedType, searchTerm, page]);

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

  return { pokemonList, loading, types, selectedType, setSelectedType, searchTerm, setSearchTerm, setPage, totalPages, page };
}
