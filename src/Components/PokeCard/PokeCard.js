import React from 'react';

export default function PokeCard({ pokemon, species_id, type_1, type_2, url_image }) {
  return (
    <div>
      <img src={url_image} />
      <h2>{pokemon}</h2>
      <h3>#{species_id}</h3>
      {type_2 === 'NA' ? (
        <h3>{type_1}</h3>
      ) : (
        <h3>
          {type_1} & {type_2}
        </h3>
      )}
    </div>
  );
}
