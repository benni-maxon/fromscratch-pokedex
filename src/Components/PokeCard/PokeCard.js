import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, species_id, type_1, type_2, url_image }) {
  return (
    <div className="card">
      <h2>{pokemon}</h2>
      <img src={url_image} />
      {type_2 === 'NA' ? (
        <h3 className="types">Type: {type_1}</h3>
      ) : (
        <h3 className="types">
          Types: {type_1} & {type_2}
        </h3>
      )}
      <h3 className="species-id">#{species_id}</h3>
    </div>
  );
}
