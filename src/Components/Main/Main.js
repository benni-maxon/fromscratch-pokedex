import React from 'react';
import { usePokemon } from '../../hooks/pokehook';
import Controls from '../Controls/Controls';
import PokeCard from '../PokeCard/PokeCard.js';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();
  return (
    <main>
      <Controls {...{ types, handleTypeChange }} />
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </main>
  );
}
