import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <input type="text" placeholder="Ciudad..." id="buscar-ciudad" />
      <button
        onClick={() =>
          props.onSearch(document.querySelector("#buscar-ciudad").value)
        }
      >
        Agregar
      </button>
    </div>
  );
}
