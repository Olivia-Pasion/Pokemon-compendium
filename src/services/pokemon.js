export async function fetchPokemon() {
  const params = new URLSearchParams();
  params.set('perPage', 10);

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
