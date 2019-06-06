'use strict'
// Este programa nodejs se ejecuta por medio de la consola con el comando node nombre_archivo.js parametros
// ejemplo calculadora.js 55 33

var params = process.argv.slice(2);
// console.log(params);
// console.log('Hola NodeJs');
var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${num1 + num2}
La resta es: ${num1 - num2}
La multiplicacion es: ${num1 * num2}
La division es: ${num1 / num2}
`;
console.log(plantilla);