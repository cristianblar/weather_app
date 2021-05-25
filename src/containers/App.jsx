/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav';
import Cards from '../components/Cards';
import About from '../components/About';
import City from '../components/City';

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
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No city found with that name!');
        else return respuesta.json();
      })
      .then((datos) => {
        const ciudadesAgregadas = cities.filter((city) => city.id === datos.id);
        if (ciudadesAgregadas.length > 0) alert('The city is already added!');
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
        return error.message === 'No city found with that name!'
          ? alert(error)
          : alert('Something went wrong... Please, try again');
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
