import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPokemon } from '../services/pokefetch';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // load our pokemon
      const resp = await fetchPokemon();
      // set out pokemon state
      setPokemon(resp);
    };
    fetchData();
  }, []);

  return pokemon;
}
