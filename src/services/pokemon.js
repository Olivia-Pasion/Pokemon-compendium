export async function fetchPokemon(selectedType, searchTerm) {
  const params = new URLSearchParams();
  params.set('perPage', 10);
  if (selectedType !== 'all') params.set('type', selectedType);
  params.set('pokemon', searchTerm);

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  );
  const data = await resp.json();
  return data;
}
