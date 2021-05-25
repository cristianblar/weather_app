import React from 'react';
import Card from './Card';
import tarjetas from './Cards.module.css';

export default function Cards({ cities, onClose }) {
  if (cities.length !== 0) {
    const ciudades = cities.map((city) => (
      <li key={city.id}>
        <Card
          id={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}
        />
      </li>
    ));
    return (
      <div className={tarjetas.cardsContainer}>
        <ul>{ciudades}</ul>
      </div>
    );
  }
  return (
    <div className={tarjetas.cardsContainer}>
      Type in the name of a city and press{' '}
      <strong style={{ color: '#008383' }}>Add</strong>
    </div>
  );
}
