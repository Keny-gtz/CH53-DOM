//console.log(document.getElementById("encabezado1"));//Estamos accediendo al id de la etiqueta h1
//Voy a definir la etiqueta de manera diferente

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
    //  console.log("boton bntModificar presionado")

let element = document.createElement("li");
 element.innerText="Another item";//<li>Another item <li>
 element.classList.add("list-group-item");

 let element2 = element.cloneNode(true);

 //listas.item(0).before(element); //Inserta el elemento antes de la lista 
 //listas.item(0).prepend(element); //inserta al principio de la lista
 //listas.item(0).append(element);/inseta /al final de la lista
//listas.item(0).after(element);// inserta al final del elemento de la lista

//listas.item(1).insertAdjacentElement("afterbegin", element);//inserta el elemento al principio de la fila 
//listas.item(1).insertAdjacentElement("beforeend", element2);//inserta el elemento al final de la lista

listas.item(1).insertAdjacentHTML("beforebegin",
     `  <li class="list-group-item"> 
        Before Begin item
      </li>`);
     listas.item(1).insertAdjacentHTML("afterend",
        `  <li class="list-group-item">
        After End item 
        </li>`);
        listas.item(1).insertAdjacentHTML("afterbegin",
            `  <li class="list-group-item">
            After Begin item 
            </li>`);
            listas.item(1).insertAdjacentHTML("beforeend",
                `  <li class="list-group-item">
                Before End item 
                </li>`);

});



















