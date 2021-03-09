import React from "react";
import busqueda from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input
        className={busqueda.barra}
        type="text"
        placeholder="Ciudad..."
        id="buscar-ciudad"
      />
      <button
        className={busqueda.boton}
        onClick={() =>
          props.onSearch(document.querySelector("#buscar-ciudad").value)
        }
      >
        Agregar
      </button>
    </div>
  );
}
