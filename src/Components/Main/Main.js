import React from 'react';
import { fetchPokemon } from '../../services/pokefetch';

export default function Main() {
  return <main>
    { fetchPokemon() }
  </main>;
}
