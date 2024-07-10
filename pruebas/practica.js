// // -------------------------- getElementById --------------------------

// /*
// let tarjetaCapturada = document.getElementById("card");

// console.log("MUESTRO EN CONSOLA TODO EL CONTENIDO DE CARD INCLUSIVE LA PRIMER ETIQUETA");
// console.log(tarjetaCapturada);
// console.log("MUESTRO EN CONSOLA TODO EL CONTENDIO DE CARD. INCLUYENDO LOS ESPACIOS DE INDENTADO");
// console.log(tarjetaCapturada.innerHTML);
// console.log("MUESTRO EN CONSOLA TODO EL TEXTO CONTENIDO DE CARD");
// console.log(tarjetaCapturada.innerText);

// console.log("=========================================================");
// */

// // -------------------------- querySelector --------------------------

// /*
// // query puede capturar etiquetas html
// let capturaquery = document.querySelector("title");
// console.log("MUESTRO CAPTURA QUERY");
// console.log(capturaquery);

// // Especificamos que es un id
// capturaquery = document.querySelector("#card");
// console.log("MUESTRO CAPTURA QUERY");
// console.log(capturaquery);

// // query me permite capturar clases (".card")
// capturaquery = document.querySelector(".texto1");
// console.log("MUESTRO CAPTURA QUERY");
// console.log(capturaquery);

// console.log("=========================================================");
// */

// // -------------------------- querySelectorAll --------------------------

// // querySelectorAll captura todos los elementos entre parentesis y se muestran como un array
// let capturequeryall = document.querySelectorAll("li");
// console.log("Muestra captura queryall");
// console.log(capturequeryall[0].innerText);
// console.log(capturequeryall[1].innerText);
// console.log(capturequeryall[2].innerText);

// let capturequeryall2 = document.querySelectorAll(".texto1");
// console.log("Muestra captura queryall2");
// // Acá va a dar error ya que solo hay un elemento con clase .texto1
// // console.log(capturequeryall2[0].innerText);
// // console.log(capturequeryall2[1].innerText);
// // console.log(capturequeryall2[2].innerText);

// console.log("================================");

// capturequeryall.forEach((elemento) => {
//     console.log(elemento.innerHTML);
// });

// // let listaDesordenada = document.querySelector("main");

// // listaDesordenada = document.createElement("span");

// // document.body.appendChild(listaDesordenada);

let listaD = document.createElement("ul");
document.body.appendChild(listaD)

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "mucha tos en el aula ";

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Nos vamos a enfermar todos ";

let salto = document.createElement("br");

let listaElemento3 = document.createElement("li");
listaElemento3.textContent = "por culpa de gabi";

listaD.appendChild(listaElemento1)
listaD.appendChild(listaElemento2)
listaD.appendChild(salto)
listaD.appendChild(listaElemento3)

// ==aca seleciono el futer

let futer = document.getElementById("piepagina");
futer.appendChild(listaD)

futer.style.backgroundColor = "red";
listaElemento3.style.fontFamily = "Impact";
futer.style.padding = "1rem";
futer.style.boxShadow = "0 0 15px -5px black"

let hacheTres = document.querySelector("h3")

let itemLista5 = document.querySelectorAll("li")
itemLista5[2].classList.remove("subrayado")

function Agregar() {
    hacheTres.classList.add("subrayado")
}

function Remover() {
    hacheTres.classList.remove("subrayado")
}

let menuLateral = document.querySelector("aside")


function mostrarMenu() {
    menuLateral.classList.toggle("mostrar")
}