import React from 'react';
import { Link } from 'react-router-dom';

import tarjeta from './Card.module.css';

export default function Card({ img, onClose, id, name, min, max }) {
  // acá va tu código
  return (
    <div className={tarjeta.tarjeta}>
      <button type="button" className={tarjeta.boton} onClick={onClose}>
        X
      </button>
      <Link to={`/city/${id}`} className={tarjeta.enlace}>
        <h4 className={tarjeta.titulo}>{name}</h4>
      </Link>
      <div className={tarjeta.temperaturaContainer}>
        <div>
          <h6>Min</h6>
          <p>{min}ºC</p>
        </div>
        <div>
          <h6>Max</h6>
          <p>{max}ºC</p>
        </div>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
}
