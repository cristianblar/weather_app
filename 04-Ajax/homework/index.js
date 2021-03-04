/* BUTTON: VER AMIGOS */

let mostrarAmigos = function (arregloAmigos) {
  document.querySelector("#lista").innerHTML = "";
  for (let amigo of arregloAmigos) {
    let listItem = document.createElement("li");
    listItem.id = amigo.id;
    listItem.innerHTML = `${amigo.name}<span class="trash-btn"></span>`;
    $("#lista").append(listItem);
  }
  document
    .querySelectorAll(".trash-btn")
    .forEach((boton) => boton.addEventListener("click", deleteWithTrash));
};

$("#boton").click(() => {
  $.get("http://localhost:5000/amigos", mostrarAmigos);
});

/* BUTTON: BUSCAR */

let mostrarAmigo = function (amigo) {
  document.querySelector("#amigo").innerText = amigo.name;
};

$("#search").click(() => {
  let amigoId = document.querySelector("#input").value;
  document.querySelector("#input").value = "";
  $.get(`http://localhost:5000/amigos/${amigoId}`, mostrarAmigo);
});

/* BUTTON: DELETE */

$("#delete").click(() => {
  let amigoId = document.querySelector("#inputDelete").value;
  document.querySelector("#inputDelete").value = "";
  $.ajax({
    url: `http://localhost:5000/amigos/${amigoId}`,
    method: "DELETE",
    success: () => {
      document.querySelector("#sucess").innerText = "¡Eliminación exitosa!";
      document.querySelector("#boton").dispatchEvent(new Event("click"));
    },
  });
});

/* TRASH BUTTONS */

// event.target.parentElement.remove();

const deleteWithTrash = function (event) {
  let idAmigo = event.target.parentElement.id;
  console.log(idAmigo);
  $.get(`http://localhost:5000/amigos/${idAmigo}`, (data) => {
    document.querySelector(
      "#trash-message"
    ).innerText = `¡Eliminaste a ${data.name}!`;
    setTimeout(
      () => (document.querySelector("#trash-message").innerText = ""),
      4000
    );
    $.ajax({
      url: `http://localhost:5000/amigos/${idAmigo}`,
      method: "DELETE",
      success: () => {
        console.warn("Amigo eliminado...");
        document.querySelector("#boton").dispatchEvent(new Event("click"));
      },
    });
  });
};
