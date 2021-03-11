import React, { useState } from "react";

import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About.jsx";
import City from "../components/City.jsx";
import { Route, Switch } from "react-router";

export default function App() {
  const [cities, setCities] = useState([]); // Estado del main component

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function filterCity(id) {
    return cities.filter((city) => city.id === id);
  }

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=90fbd63d21133d27df761bbb9ab7a9b5&units=metric&lang=es`
    )
      .then((respuesta) => {
        if (!respuesta.ok)
          throw new Error("¡No se ha encontrado ninguna ciudad!");
        else return respuesta.json();
      })
      .then((datos) => {
        let ciudadesAgregadas = cities.filter((city) => city.id === datos.id);
        if (ciudadesAgregadas.length > 0)
          return alert("¡La ciudad ya fue agregada!");
        else {
          const nuevaCiudad = {
            // Main info:
            name: datos.name,
            min: Math.round(datos.main.temp_min),
            max: Math.round(datos.main.temp_max),
            img: datos.weather[0].icon,
            id: datos.id,
            // Additional info for details:
            cielo: datos.weather[0].description,
            sensacion: datos.main.feels_like,
            presion: datos.main.pressure,
            humedad: datos.main.humidity,
            velocidadViento: datos.wind.speed,
            longitud: datos.coord.lon,
            latitud: datos.coord.lat,
          };
          setCities((oldCities) => [nuevaCiudad, ...oldCities]);
        }
      })
      .catch((error) => {
        console.error(`Problem with the fetch: ${error}`);
        return error.message === "¡No se ha encontrado ninguna ciudad!"
          ? alert(error)
          : alert("Ha ocurrido un error. ¡Inténtalo de nuevo!");
      });
  }

  const routes = (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/city/:id">
          <City filterCity={filterCity} />
        </Route>
      </Switch>
    </div>
  );

  return routes;
}
