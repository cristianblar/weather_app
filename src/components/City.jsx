import React from "react";
import { useParams } from "react-router-dom";
import estilos from "./City.module.css";

function City(props) {
  const { id } = useParams();
  const datosCiudad = props.filterCity(parseInt(id))[0];
  return datosCiudad ? (
    <div className={estilos.detalles}>
      <h4>{datosCiudad.name}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${datosCiudad.img}@2x.png`}
        alt="Ícono del clima"
      ></img>
      <ul>
        <li>
          <h6>Temperatura mínima:</h6>
          <span> {datosCiudad.min}º</span>
        </li>
        <li>
          <h6>Temperatura máxima:</h6>
          <span> {datosCiudad.max}º</span>
        </li>
        <li>
          <h6>Sensación térmica:</h6>
          <span> {datosCiudad.sensacion}º</span>
        </li>
        <li>
          <h6>Estado del cielo:</h6>
          <span> {datosCiudad.cielo}</span>
        </li>
        <li>
          <h6>Velocidad del viento:</h6>
          <span> {datosCiudad.velocidadViento} m/s</span>
        </li>
        <li>
          <h6>Humedad:</h6>
          <span> {datosCiudad.humedad}%</span>
        </li>
        <li>
          <h6>Presión atmosférica:</h6>
          <span> {datosCiudad.presion} hPa</span>
        </li>
        <li>
          <h6>Longitud:</h6>
          <span> {datosCiudad.longitud}º</span>
        </li>
        <li>
          <h6>Latitud:</h6>
          <span> {datosCiudad.latitud}º</span>
        </li>
      </ul>
    </div>
  ) : (
    <div>¡No hay datos aún!</div>
  );
}

export default City;
