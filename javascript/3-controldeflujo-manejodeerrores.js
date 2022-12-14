// 馃煛 Expresiones condicionales: es un conjunto de instrucciones que se ejecutara siempre y cuando la condici贸n sea verdadera.

// Expresi贸n if...else: utilizaremos if para ejecutar una condici贸n dentro de una funcion y la condici贸n sea true y opcionalmente else cuando la condici贸n sea false.

//Ejemplo 1, si el numero es 100 se ejecuta el if de lo contrario se ejecutara else.
function numero(num) {
  if (num === 100) {
    console.log("verdadero, el numero es igual a 100");
  } else console.log("Falso, el numero no es 100");
}
// Los n煤meros (100), (20) equivalen al par谩metro num de la funcion
numero(100); // Verdadero, el numero es 100. Ejecuta if.
numero(20); // Falso, el numero no es 100. Ejecuta else.

//Ejemplo 2, si el usuario es oscar@prueba.com puede acceder como usuario administrador, de lo contrario como usuario suscriptor.
function UsuarioRegistrado(usuario) {
  if (usuario === "oscar@prueba.com") {
    console.log(`Usuario administrador`);
  } else console.log(`Modo suscriptor`);
}
//El correo/usuario oscar@prueba.com equivale al param茅trico usuario de la funcion
UsuarioRegistrado("oscar@prueba.com"); // Verdadero va a acceder como Administrador.
UsuarioRegistrado("jesus@prueba.com"); // Falso accede como Suscriptor.

// Para varias condiciones en secuencia podemos usar else if

// Ejemplo, en caso de tener m煤ltiples condiciones solo se ejecutara la que se eval煤e como true.
function variosNumeros(num) {
  if (num === 1) {
    // Para ejecutar varias declaraciones, solo basta con encerrarlas dentro de los mismos {}
    console.log("Esta es la primera condici贸n");
    console.log(
      "Esta es la primera condici贸n, pero con una declaraci贸n diferente"
    );
    console.log("Esta es otra declaraci贸n");
  } else if (num === 2) {
    console.log("Esta es la segunda condici贸n");
  } else if (num === 3) {
    console.log("Esta es la tercera condici贸n");
  } else console.log("Esta condici贸n no es verdadera");
}
// los n煤meros (1),(2), etc... equivalen al par谩metro num de la funcion
variosNumeros(1); // Verdadera, se ejecuta primer if.
variosNumeros(2); // Verdadera, se ejecuta else if.
variosNumeros(3); // Verdadera, se ejecuta else if.
variosNumeros(4); // Falsa, se ejecuta el else.

// Para asignaciones simples se recomienda utilizar doble par茅ntesis. Ejemplo quiero que el valor de x tenga el mismo valor que y, una vez tenga el nuevo valor, sumar (x + y) y obtener el resultado.

function sumar(x, y) {
  let resultado = 0;

  if ((x = y)) {
    resultado = x + y;
    console.log(`El nuevo valor de x es: ${x}`);
  }
  if (resultado === 10) {
    console.log(`Este es el resultado: ${resultado}`);
  } else console.log("Resultado incorrecto");
}
// El primer valor equivale a el primer par谩metro x y el segundo al par谩metro y de la funcion
sumar(10, 5);

// 馃煛 Expresiones de manejo de excepciones

// 馃煟 Dato interesante: Podemos lanzar casi cualquier objeto en JavaScript. Sin embargo, no todos los objetos lanzados son iguales. Suele ser com煤n lanzar n煤meros o cadenas como errores, pero realmente es m谩s efectivo usar uno de los tipos de excepci贸n creados espec铆ficamente para este prop贸sito:

// Se pueden lanzar excepciones usando la instrucci贸n throw y manejarlas usando try...catch. Con la expresi贸n throw especificamos el valor que se lanzar谩.

throw "Error2"; // String
throw 42; // Number
throw true; // Boolean
throw {
  toString: function () {
    return "Lanzando un throw como objeto!";
  },
};
