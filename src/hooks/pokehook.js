import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPokemon, fetchPokemonByType, fetchTypes } from '../services/pokefetch';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  // const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // load our pokemon
      const resp = await fetchPokemon();
      // set our pokemon state
      setPokemon(resp);
    };
    fetchData();
    setLoading(false);
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
    setLoading(true);
    // console.log('changing type!', type);
    const resp = await fetchPokemonByType(type);
    setPokemon(resp);
    // setSelectedType(type);
    console.log('pokemon', pokemon);
    // console.log('selectedType', selectedType);
    setLoading(false);
  };

  return { pokemon, types, handleTypeChange, loading };
}
