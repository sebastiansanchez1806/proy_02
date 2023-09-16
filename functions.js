//Se define constante de funciones matematicas
const Math = {};

//Define la funcion suma(add)
function add(a,b){
    return a + b;
}

//Define la funcion Restar(substract)
function substract(a,b){
    return a - b;
}

//Define la funcion Multiplicar(multiply)
function multiply(a,b){
    return a * b;
}

//Define la funcion Dividir(divide)
function divide(a,b){
    if (b == 0) {
        return "ERROR NO SE PUEDE DIVIDIR POR CERO"
    } else {
        return a / b;
    }
    }

    //Definimos las funciones
    Math.add = add;
    Math.substract = substract;
    Math.multiply = multiply;
    Math.divide = divide;

    //Exporta todo el modulo Math
    module.exports = Math;