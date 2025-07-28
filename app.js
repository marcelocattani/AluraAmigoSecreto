// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let campoEntrada = document.querySelector("#amigo");
let listaAmigos = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#listaAmigos");

function agregarAmigo() {
  let valor = campoEntrada.value;
  if (valor != "") {
    amigos.push(valor);
    document.querySelector("#amigo").value = "";
  } else {
    alert("Por favor, inserte un nombre.");
  }

  limpiarLista();

  for (i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function limpiarLista() {
  listaAmigos.innerHTML = "";
}
function sortearAmigo() {
  if (amigos.length == 0) {
    alert("La lista se encuentra vacia");
  } else {
    console.log(Math.floor(Math.random() * amigos.length));
    resultado.innerHTML = amigos[Math.floor(Math.random() * amigos.length)];
  }
}
