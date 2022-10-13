// 🟡 Declaraciones de variables.

// Las constantes siempre deben inicializarse.

// const a; esta constante daría como resultado error 🚫.
const a = ""; //Se puede inicializar con cualquier valor o tipo de dato, incluso con una cadena de texto vacía como en este caso.

// Las variables sin declarar tienen un valor de Undefined.
let b; // Su valor es undefined. En contexto booleano se comporta como false y en numérico como NaN.
let uno = null; // Esto va a tener un valor 0 en contexto numérico y false en contexto booleano.

// const : Declara un nombre de constante de solo lectura. !no puede cambiar su valor.
const c = 0;
c = 1; // error 🚫, la constante ya tiene un valor asignado.

// let : Declara una variable local. Escritura y lectura. !puede cambiar su valor.
let d = 0;
d = 1; // correcto ✅, se puede declarar un nuevo valor.

// 🟣 Recordar que las propiedades de los objetos y los arrays declaradas en constantes, si pueden ser modificados, ya que no están protegidos. Ejemplos: objeto coche, array masModelos.
const coche = {
  marca: "Opel",
  modelo: "Astra",
};
console.log(coche); // salida: {marca: 'Opel', modelo: 'Astra'};

coche.marca = "Fiat";
coche.modelo = "Bravo";
console.log(coche); // nueva salida: {marca: 'Fiat', modelo: 'Bravo'};

const masModelos = ["Corsa", "Mokka", "Grandland"];
console.log(masModelos); // salida: ['Corsa', 'Mokka', 'Grandland'];

masModelos.push("Crossland");
console.log(masModelos); // nueva salida: ['Corsa', 'Mokka', 'Grandland', 'Crossland'];

// 🟡 Ámbito de variables

//Ejemplo global: Cuando declaras una variable fuera de cualquier función, se le denominan variables globales, ya que están accesibles para cualquier otro bloque de código dentro del mismo documento. Ejemplo local: Cuando declaras una variable dentro de una función, se denominan funciones locales, ya que solo estará disponible exclusivamente dentro de esa función.

const global = "Global";

function referenciaAGlobal() {
  const local = "Local";

  console.log(global); // ✅ Se puede acceder aunque la variable este fuera ya que es una variable Global.
  console.log(local); // ✅ Variable definida dentro de la función. Se puede acceder correctamente.
}

referenciaAGlobal();
const referenciaAVariableDentroDeLaFuncionDaError = console.log(local); // 🚫 error la variable local no está definida. Solo accesible desde dentro de la función.
