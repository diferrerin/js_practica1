

console.log(" Inicio del primer Desafio entregable. ");

alert("---  PRIMER DESAFIO    ---  \n --- Elige la opcion para testear las diferentes iteraciones:   \n ");

let entrada = prompt("Escribe una de las opciones (WHILE, FOR, DOWHILE, IF, ESC para salir) ");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {

       case "WHILE":
            alert("Test WHILE");
            let aux = prompt("Para salir de la iteracion While escriba la palabra mágica ALOHOMORA ");
            while(aux != "ALOHOMORA" ){
                alert("El usuario ingresó la palabra: "+ aux);
                aux = prompt("Ingresar ALOHOMORA para salir");
            }
            alert("Palabra Mágica correcta: "+ aux);
            break;

        case "FOR":
            alert("Test FOR de 0 a 5");
            for (let indice = 0; indice <= 5 ; indice++) {
                alert(indice);
            };
            break;

        case "DOWHILE":
            alert("Test DO WHILE");
            let suma = 0;
            let num = 0;
            do {
                suma += num;
                num = parseInt(prompt('Ingrese un numero, para salir ingrese un numero negativo : '));
            } while(num >= 0)

            console.log(`La suma de todo es ${suma}.`);
            break;

        case "IF":
            alert("Test IF");
            let unNumero = parseInt(prompt('Ingrese un numero (10 para salir) : '));
            let salida = 0;
            while(salida != 10 ){
                alert("Numero ingresado :  "+ unNumero);
                unNumero = prompt("Ingrese un numero (10 para salir) : ");
                if (unNumero == 10){
                    salida = unNumero;
                    console.log("Se ingreso el 10 para salir.");
                }
            }
            break;

       default:
           alert("No eligió una opción posible.");
           break;
   }
   entrada = prompt(" Escribe una de las opciones ( WHILE, FOR, DOWHILE, IF, ESC para salir) ");
};

alert("---  FIN PRIMER DESAFIO    ---");
console.log(" Fin del primer Desafio entregable. Se ejecutó correctamente ");

/* 
let numeroUno = parseInt(prompt("Ingrese un Número: "));
let numeroDos = parseInt(prompt("Ingrese otro Número: "));
document.write("<p>"+ "La suma de "+ numeroUno + " y "+ numeroDos + " es " + (numeroUno+numeroDos)+"</p>");
*/



