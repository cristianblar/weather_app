import React from 'react';
import { useParams } from 'react-router-dom';
import estilos from './City.module.css';

function City({ filterCity }) {
  const { id } = useParams();
  const datosCiudad = filterCity(parseInt(id, 10))[0];
  return datosCiudad ? (
    <div className={estilos.detalles}>
      <h4>{datosCiudad.name}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${datosCiudad.img}@2x.png`}
        alt="Ícono del clima"
      />
      <ul>
        <li>
          <h6>Minimum temperature:</h6>
          <span> {datosCiudad.min}º</span>
        </li>
        <li>
          <h6>Maximum temperature:</h6>
          <span> {datosCiudad.max}º</span>
        </li>
        <li>
          <h6>Thermal sensation:</h6>
          <span> {datosCiudad.sensacion}º</span>
        </li>
        <li>
          <h6>Sky condition:</h6>
          <span> {datosCiudad.cielo}</span>
        </li>
        <li>
          <h6>Wind speed:</h6>
          <span> {datosCiudad.velocidadViento} m/s</span>
        </li>
        <li>
          <h6>Humidity:</h6>
          <span> {datosCiudad.humedad}%</span>
        </li>
        <li>
          <h6>Atmospheric pressure:</h6>
          <span> {datosCiudad.presion} hPa</span>
        </li>
        <li>
          <h6>Length:</h6>
          <span> {datosCiudad.longitud}º</span>
        </li>
        <li>
          <h6>Latitude:</h6>
          <span> {datosCiudad.latitud}º</span>
        </li>
      </ul>
    </div>
  ) : (
    <div>No data yet! You must add the city!</div>
  );
}

export default City;
