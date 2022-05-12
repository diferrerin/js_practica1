

console.log(" Inicio del primer Desafio entregable. ");

alert("---  PRIMER DESAFIO    ---  \n --- Elige la opcion para testear las diferentes iteraciones:   \n ");

let entrada = prompt("Escribe una de las opciones (WHILE,FOR,DOWHILE,ESC para salir) ");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "WHILE":
            alert("Test WHILE");
            break;
        case "FOR":
            alert("Test FOR de 0 a 5");
            for (let indice = 0; indice <= 5 ; indice++) {
                alert(indice);
            };
            break;
        case "DOWHILE":
            alert("Test DO WHILE");
            break;
       default:
           alert("No eligió una opción posible.");
           break;
   }
   entrada = prompt(" Escribe una de las opciones ( WHILE, FOR, DOWHILE, ESC para salir) ");
};


/* 
let numeroUno = parseInt(prompt("Ingrese un Número: "));
let numeroDos = parseInt(prompt("Ingrese otro Número: "));
document.write("<p>"+ "La suma de "+ numeroUno + " y "+ numeroDos + " es " + (numeroUno+numeroDos)+"</p>");
*/

console.log(" Fin del primer Desafio entregable. Se ejecutó correctamente ");

/* 
Consigna: Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>,
 que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
 ejemplos:
Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado,
 hasta que se ingresa “ESC”.
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

*/