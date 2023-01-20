export async function fetchPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
//   console.log('resp', resp); 
  const data = await resp.json();
//   console.log('data.results', data.results);
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
//   console.log('resp', resp);
  const data = await resp.json();
//   console.log('data', data);
  return data;
}