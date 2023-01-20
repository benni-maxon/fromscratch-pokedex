import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokefetch';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // load our pokemon
      const resp = await fetchPokemon();
      // set our pokemon state
      setPokemon(resp);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // load our types
      const resp = await fetchTypes();
      // set our type state
      setTypes(resp);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    console.log('changing type!', type);
  };

  return { pokemon, types, handleTypeChange };
}
