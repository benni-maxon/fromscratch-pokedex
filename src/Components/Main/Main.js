import React from 'react';
import { usePokemon } from '../../hooks/pokehook';
import Controls from '../Controls/Controls';
import PokeCard from '../PokeCard/PokeCard.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, loading, handleTypeChange } = usePokemon();
  if (loading === true) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <main className="main-area">
        <Controls {...{ types, handleTypeChange }} />
        {pokemon.map((poke) => (
          <PokeCard key={poke._id} {...poke} />
        ))}
      </main>
    );
  }
}
