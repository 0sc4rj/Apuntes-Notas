// 🟡 Tipos de datos primitivos

// Un valor primitivo se puede remplazar, pero en ningún caso se pueden modificar.

// 1) Booleano: verdadero o falso (true and false).
let boleanoTrue = true;
let boleanoFalse = false;

// 2) null: Valor nulo
let nada = null;

// 3) undefined: Propiedad de alto nivel cuyo valor no está definido.
let indefinido = undefined;

// 4) Number: Un numero entero o un numero con coma flotante.
let numeroUno = 1;
let numeroDos = 2;

// 5) BigInt: Un numero entero con precision arbitraria, (se usa para representar y manipular valores primitivos, que son demasiado grandes).
const big = BigInt(9007199254740991);
console.log(big);

// 6) String: Representa un texto o cadena de textos.
const textoUno = "Uno";
const textoDos = "Dos";

// 7) Symbol: (Nuevo ES15). Tipo de dato cuyas instancias son únicas e inmutables (forma débil de ocultar la información).
let symUno = Symbol("Uno");
let symDos = Symbol("Uno");
console.log(symUno === symDos); // salida: false

// 🟡 Otros tipos de datos

// 1) Object: Estructura de datos con clave: valor.
let objeto = Object({
  marca: "Opel",
  modelo: "Astra",
  motor: "1.4cc",
  Cv: "140cv T.",
});
console.log(objeto); // salida: {marca: 'Opel, modelo: 'Astra', motor: '1.4cc', Cv: '140cv T.'}

// 2) function: Un conjunto de instrucciones que realiza una tarea. Toma una entrada, devuelve una salida.
let funcion = function (numero1, numero2) {
  return numero1 * numero2;
};

console.log(funcion(10, 10)); // salida 100, el resultado de multiplicar numero1: 10 * numero2: 10
