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
        onClick={(e) => {
          e.preventDefault();
          let ciudad = document.getElementById("buscar-ciudad");
          ciudad.value
            ? props.onSearch(
                ciudad.value
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
            : alert("¡Debes escribir el nombre de una ciudad!");
          ciudad.value = "";
        }}
      >
        Agregar
      </button>
    </div>
  );
}
