import React from "react";

const About = function () {
  return (
    <div style={{ padding: "24px" }}>
      Es el momento de conocer las condiciones climáticas de cualquier ciudad
      del mundo.
      <br />
      <br />
      <p>
        Lo único que debes hacer es escribir el nombre de una ciudad en el campo{" "}
        <strong style={{ color: "rgb(111 111 111)" }}>Ciudad...</strong> y luego
        presionar el botón <strong style={{ color: "#008383" }}>Agregar</strong>
        .
      </p>
      <br />
      <br />
      <p>
        Made at <b>HENRY</b> with 💛
      </p>
    </div>
  );
};

export { About as default };
