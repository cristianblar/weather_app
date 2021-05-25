/* eslint-disable no-alert */
import React from 'react';
import busqueda from './SearchBar.module.css';

export default function SearchBar(props) {
  return (
    <div>
      <input
        className={busqueda.barra}
        type="text"
        placeholder="City..."
        id="buscar-ciudad"
      />
      <button
        type="button"
        className={busqueda.boton}
        onClick={(e) => {
          e.preventDefault();
          const ciudad = document.getElementById('buscar-ciudad');
          if (ciudad.value)
            props.onSearch(
              ciudad.value
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            );
          else alert('¡Debes escribir el nombre de una ciudad!');

          ciudad.value = '';
        }}
      >
        Add
      </button>
    </div>
  );
}
