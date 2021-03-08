import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  let ciudades = props.cities.map((city) => (
    <li key={city.name}>
      <Card
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
      />
    </li>
  ));
  return (
    <div>
      <ul>{ciudades}</ul>
    </div>
  );
}
