import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

export default function App() {
  const [cities, setCities] = useState([]); // Estado del main component

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=90fbd63d21133d27df761bbb9ab7a9b5&units=metric`
    )
      .then((respuesta) => {
        if (!respuesta.ok)
          throw new Error("¡No se ha encontrado ninguna ciudad!");
        else return respuesta.json();
      })
      .then((datos) => {
        const nuevaCiudad = {
          name: datos.name,
          min: Math.round(datos.main.temp_min),
          max: Math.round(datos.main.temp_max),
          img: datos.weather[0].icon,
          id: datos.id,
        };
        setCities((oldCities) => [...oldCities, nuevaCiudad]);
      })
      .catch((error) => {
        console.error(`Problem with the fetch: ${error}`);
        return error.message === "¡No se ha encontrado ninguna ciudad!"
          ? alert(error)
          : alert("Ha ocurrido un error. ¡Inténtalo de nuevo!");
      });
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
