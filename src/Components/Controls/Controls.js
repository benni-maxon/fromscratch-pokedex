import React from 'react';
import { usePokemon } from '../../hooks/pokehook';
import Select from '../Select/Select';

export default function Controls() {
  const { types, handleTypeChange } = usePokemon();
  return (
    <div>
      <Select {...{ types, handleTypeChange }} />
    </div>
  );
}
