import React from 'react';
import Select from '../Select/Select';

export default function Controls({ types, handleTypeChange }) {
  return (
    <div>
      <Select {...{ types, handleTypeChange }} />
    </div>
  );
}
