import React from 'react';
import { usePokemon } from '../../hooks/pokehook';
import Controls from '../Controls/Controls';
import PokeCard from '../PokeCard/PokeCard.js';

export default function Main() {
  const { pokemon } = usePokemon();
  return (
    <main>
      <Controls />
      {/* we might need to do the mapping inside of PokeCard itself! */}
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </main>
  );
}
