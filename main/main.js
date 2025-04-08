//console.log(document.getElementById("encabezado1"));//Estamos accediendo al id de la etiqueta h1
//VOY A DEFINIR la etiqueta de manera diferente

let encabezado1 = document.getElementById("encabezado1");
encabezado1.innerText = "Ejercicio DOM"
encabezado1.innerText = " DOM"
let listas =document.getElementsByTagName("ul");


let otroElemento =document.querySelector("ul>li");
console.log("otroElemento:", otroElemento);

let otrosElementos =document.querySelectorAll ("ul>li");
//console.log (listas.length);
//console.log(encabezado1.innerText);
//console.log(listas.iten(1));
//console.log(elementos.item(2));
//console.log(elementos.length);
//El innertext es una propiedad de la etiqueta que esta almacenando el texto que esta adentro
//Es una propiedad de lectura y escritura
let contador=0;
function modifica(){
    encabezado1.innerHTML += "<em>Ejercicios </em> DOM";
    encabezado2.innerText = ++ contador; 
}
//let encabezado2 = document.getElementById("encabezado2");
//encabezado2.innerText = "DOM exercise"
//console.log(encabezado2.innerText);



////////////////////////
//definire el boton 

let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(event){
    event.preventDefault();//No hagas lo que haces por defecto
    console.log("boton bntModificar presionado")
});






















