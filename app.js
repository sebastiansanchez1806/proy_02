//Requerimos a functions
const functions = require('./functions.js')

//Mandamos a imprimir las functions
console.log(functions);

//Imprime el mensaje Ejercicio en la consola
process.stdout.write("Ejercicio\n\n");

//Le damos valor a las functions y las mandamos imprimir
console.log(functions.add(8,4));
console.log(functions.substract(3,9));
console.log(functions.multiply(4,6));
console.log(functions.divide(3,0.9));