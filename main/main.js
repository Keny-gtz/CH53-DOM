//console.log(document.getElementById("encabezado1"));//Estamos accediendo al id de la etiqueta h1
//Voy a definir la etiqueta de manera diferente

let encabezado1 = document.getElementById("encabezado1");
encabezado1.innerText = "Ejercicio DOM"
encabezado1.innerText = " DOM"
let listas =document.getElementsByTagName("ul");
let txtRFC = document.getElementById("txtRFC");
let txttelefono = document.getElementById("txttelefono");
let txtcurp= document.getElementById("txrcurp");

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
 //listas.item(0).prepend(element);//inserta al principio de la lista
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
//Se ejecuta cuando se termina de cargar todos los elementos de la pagina.
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina");
});
//blur -> cuando se sale del campo 
/*txtRFC.addEventListener("blur", function(event){
   event.preventDefault();//No hagas lo que haces por defecto
    //txtRFC.value = txtRFC.value.toUpperCase(); //El valor que esta en value se convierte en mayusculas con toUpperCase

});//txtRFC
txtcurp.addEventListener("blur", function(event){
    event.preventDefault();//No hagas lo que haces por defecto
     txtcurp.value = txtcurp.value.toUpperCase(); //El valor que esta en value se convierte en mayusculas con toUpperCase
 
 });//txtRFC
 */
function txtToUpper(event){ //automatizamos mediante esta funcion
    event.preventDefault();
    event.target.value = event.target.value.trim().txtToUpperCase();
}
txtRFC.addEventListener("blur", txtToUpper);
txtcurp.addEventListener("blur", txtToUpper);

txttelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txttelefono.value = txttelefono.value.trim().slice(0,10);
});//txttelefono
















