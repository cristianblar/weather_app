import React from "react";
import tarjeta from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={tarjeta.tarjeta}>
      <button className={tarjeta.boton} onClick={props.onClose}>
        X
      </button>
      <Link to={`/city/${props.id}`} className={tarjeta.enlace}>
        <h4 className={tarjeta.titulo}>{props.name}</h4>
      </Link>
      <div className={tarjeta.temperaturaContainer}>
        <div>
          <h6>Min</h6>
          <p>{props.min}ºC</p>
        </div>
        <div>
          <h6>Max</h6>
          <p>{props.max}ºC</p>
        </div>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="Ícono del clima"
      />
    </div>
  );
}
