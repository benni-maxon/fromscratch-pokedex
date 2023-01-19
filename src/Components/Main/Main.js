import React from 'react';
import { usePokemon } from '../../hooks/pokehook';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <main>
      {pokemon.map((poke) => (
        <p key={poke._id}>
          {poke.pokemon} / {poke.type_1} / {poke.hp}
        </p>
      ))}
    </main>
  );
}
