/*
1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.
*/


var botonComprobar = document.getElementById("botonComprobar")
var palabra = document.getElementById("inputPalabra")

function printArray(parametro1, parametro2) {
  
    var palabrasMasLargas = []; // array que se va a retornar al final

    // por cada palabra en el array:
    parametro2.forEach(palabra => {



        // si la longitud de la palabra es mayor:
        if (palabra.length > parametro1.length) //
        {
            palabrasMasLargas.push(palabra);
        }

    });



    /*
2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.
*/

    var lista = document.getElementById("lista")


    palabrasMasLargas.forEach(palabra => {


        //se crea el elemento li con la palabra como su contenido
        var li = document.createElement("li")
        li.innerHTML = palabra;

        //se agrega el elemento creado a la lista
        lista.appendChild(li);


    });



}





const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

//botonComprobar.onClick(printArray(palabra.innerHTML, myArray))
botonComprobar.addEventListener("click", function () {

    //se manda la funcion como funcion anonima
    printArray(palabra.value, myArray);
});





