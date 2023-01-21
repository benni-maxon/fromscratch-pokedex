import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPokemon, fetchPokemonByType, fetchTypes } from '../services/pokefetch';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selectedType, setSelectedType] = useState('');

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
    const resp = await fetchPokemonByType(type);
    setPokemon(resp);
    setLoading(false);
  };

  return { pokemon, types, handleTypeChange, loading };
}
