import React from "react";
import Card from "./Card";
import tarjetas from "./Cards.module.css";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if (props.cities.length !== 0) {
    let ciudades = props.cities.map((city) => (
      <li>
        <Card
          key={city.id}
          id={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => props.onClose(city.id)}
        />
      </li>
    ));
    return (
      <div className={tarjetas.cardsContainer}>
        <ul>{ciudades}</ul>
      </div>
    );
  } else {
    return (
      <div>
        Escribe el nombre de una ciudad y presiona{" "}
        <strong style={{ color: "#008383" }}>Agregar</strong>
      </div>
    );
  }
}
