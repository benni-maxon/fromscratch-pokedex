import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPokemon, fetchPokemonByType, fetchTypes } from '../services/pokefetch';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  // const [selectedType, setSelectedType] = useState('');

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
    // console.log('changing type!', type);
    const resp = await fetchPokemonByType(type);
    setPokemon(resp);
    // setSelectedType(type);
    // console.log('pokemon', pokemon);
    // console.log('selectedType', selectedType);
  };

  return { pokemon, types, handleTypeChange };
}
