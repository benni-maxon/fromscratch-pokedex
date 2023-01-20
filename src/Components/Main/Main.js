import React from 'react';
import { usePokemon } from '../../hooks/pokehook';
// import Controls from '../Controls/Controls';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Select/Select';

export default function Main() {
  const { pokemon, types } = usePokemon();
  return (
    <main>
      <Select types={types}/>
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </main>
  );
}
