export async function fetchPokemon() {
  const resp = await fetch(
    'https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=species_id&direction=asc/types'
  );
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

export async function fetchPokemonByType(type) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=species_id&direction=asc&${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
