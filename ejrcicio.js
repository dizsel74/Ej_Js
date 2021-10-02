
console.log("hola mundo");
var id = "myid";
console.log(id);
var id = false;
console.log(id);
var a = 15;
var b = 2;
cosiente = a / b;
resto = a % b;
console.log(a);
console.log(b);
console.log(cosiente);
console.log(resto);

//increnento
a = a + 1;
console.log(a);

a++;
console.log(a);
//decremento
a = a - 1;
console.log(a);
a--;
console.log(a);

a += 5;
console.log(a);
b -= 3;
console.log(b);
var c = 10;
c *= b;
console.log(c);
c /= a;
console.log(c);
// ------------------------   CADENAS -----------------------------//

var nombre = '"Alan"';
var apellido = " Poe";
console.log("hola:" + nombre + apellido);

var cadenaCompleta = "¿";
var sadudo = "Hi! ";
cadenaCompleta += sadudo;
console.log(cadenaCompleta);

var miCadena;
miCadena = "hola mundo";
console.log(miCadena.length);

console.log(miCadena[0]); // ---- acceder a posiciones de cadena ---//
console.log(miCadena[miCadena.length - 1]); //leer ultimo caracter  de un  string
var n = 3;
console.log(miCadena[miCadena.length - n]); //palabra loca
var miPalabraLoca = "El" + apellido + " de " + nombre;
console.log(miPalabraLoca);
//--------------------- ARREGLOS ------------------

var miArreglo = ["juan", 20];

console.log(miArreglo);

var estudiantes = ["arturo", "paco", "juan"];
console.log(estudiantes);
// ----------------------------- Arreglos Anidados
var listaEstudiante = [
  ["nora", 10],
  ["gino", 9],
  ["Paco", 8],
];
/*      indices            0       ,    1      ,   2    
índice Interno      0      1     0      1  ,  0   1*/
console.log(listaEstudiante);
console.log(listaEstudiante[2], listaEstudiante[1]);
console.log(listaEstudiante.length);

var newArreglo = listaEstudiante[0];
console.log(newArreglo[1]);
console.log(listaEstudiante[0][0]); //nora
//METODO ARREGLOS PUSH

/* ------ push         pop
--------  unshift        shift ------*/
var seasons = ["invierno", "primavera", "otoño"];

seasons.push("Verano"); // inserta al final del arreglo
console.log(seasons);

seasons.pop(); // quita al final del arreglo

popeado = seasons.pop(); //ver lo que se quioto
console.log(seasons);
console.log(popeado);

shifeado = seasons.shift(); //quit 1er elemento

console.log(seasons + " se quito  " + shifeado);
seasons.unshift("Summer");

console.log(seasons); //pone al inicio de arreglo

function suma(parametro_a, parametro_b) {
  var add = parametro_a + parametro_b;
  console.log("el resultado es : " + add);
}
var argumentoA = 2;
var argumentoB = 3;
suma(argumentoA, argumentoB);

/* -----------------------  Devolver resultado  de una funcion  -------- */
function times(a, b) {
  var result = a * b;
  return result;
}
console.log(times(2, 2));

var newResult =times(3,3);
console.log(newResult);
/* Cola   o Cue ---*/

////////////////////////// FUNCION DE CUE O COLA DE INSERTAR Y REMOVER /////////////////////////////

function proximoFila(parametroArgumento, parametroNumero){
//console.log(parametroArgumento);
// console.log(parametroNumero);
parametroArgumento.push(parametroNumero); //AGREGA A LA COLA
// console.log(parametroArgumento);
shifeado = parametroArgumento.shift(); //ELIMINA EL 1er ELEMENTO 
// console.log(parametroArgumento);// REGRESA EL ELEMNTO REMOVIDO
return shifeado;

}
var argumentoCadena = [10, 20];
var argumentoNumero = 2;

console.log("Antes :" + JSON.stringify(argumentoCadena)); //JSON.stringify convierte a string

console.log(proximoFila(argumentoCadena, argumentoNumero));

console.log("Despues :" + JSON.stringify(argumentoCadena));
////////////////////////////////////////////////////////////////////////////////////


