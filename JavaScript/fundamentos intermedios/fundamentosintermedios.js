/***************************************************
 ** F U N D A M E N T O S   I N T E R M E D I O S **
 ***************************************************/

/**1**/

//Sigma: 
// Implementa una función sigma(num) que, dado un número, devuelve la suma de todos 
// los enteros positivos (incluyendo el número dado). 
// Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(num) {
    let sum = 0;
    for (let n = 0; n <= num; n++) { //n=0>1
        sum = sum + n; //0+1

    }
    return sum;
}


console.log(sigma(5));
console.log(sigma(4));

/**2**/

//Factorial:
// Escribe una función factorial(num) que, dado un número,
// devuelva el producto (multiplicación) de todos los enteros positivos
// (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3);
// factorial(5) = 120 (1*2*3*4*5).

function factorial(num) {
    var producto = 1;
    for (let m = 1; m <= num; m++) {
        var producto = producto * m;

    }
    return producto;
}

console.log(factorial(5));
console.log(factorial(6));

/**3**/

//Fibonacci:
//Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, 
//partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 
//4 corresponden al valor cuatro más tarde, etc). 
//Ejemplos: 
//fibonacci(0) = 0 (dado) 
//fibonacci(1) = 1 (dado) 
//fibonacci(2) = 1 (fib(0)+fib(1), o 0+1) 
//fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1)
//fibonacci(4) = 3 (1+2) 
//fibonacci(5) = 5 (2+3) 
//fibonacci(6) = 8 (3+5), 
//fibonacci(7) = 13 (5+8)
//Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto 
//en la Parte 2 de esta actividad.

function fib(n) {
    let n2 = [0, 1] //valores dados: fib(0), fib(1)
    for (let i = 2; i <= n; i++) { //(fib(0)+fib(1)) i=2
        n2[i] = n2[i - 2] + n2[i - 1]; //n[i(2) - 2] = fib(0) n[i(2) - 1] = fib(1) -> secuencia por la que pasan todos los fib con su valor correspondiente                                                                                        //correspondiente
    }
    return n2[n2.length - 1] // n [6] = ultimo valor
}

console.log(fib(7));

/**4**/

// Array Penúltimo:
// Devuelve el penultimo elemento del array. Dado [42, true, 4, 'Liam', 7] devuelve “Liam”.
// Si el array es muy pequeño, devuelve null.

function unDado(arre) {
    if (arre.length < arr[0]) {
        return null //breakpoint
    }
    for (let index = 0; index < arre.length; index++) {
        arre[i] = arre[arre.length - 2];
    }
    return arre;
}

console.log(unDado([42, true, 4, 'liam', 7]));

/**5**/

//Array: “N” último: Devuelve el elemento “N” último.
// Dado ([5,2,3,6,4,9,7],3), devuelve 4. 
//Si el array es muy pequeño, devuelve null. 

function lastN(arr, d) {
    arr2 = 0;
    if (arr.length < 1) {
        return null;
    }
    d = 2;
    arr = 2;
    arr2 = d + arr;
    return arr2;
}

console.log(lastN([5, 2, 3, 6, 4, 9, 7], 3));

/**6**/

//Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. 
//Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.

function segundoMasGrande(array) {
    var max = [];
    var max2 = [];
    if (array.length > 1) {
        return null;
    }


    for (let i = 0; i < array.length; i++) {
        if (max >= array[i]) {
            max = array[i];
        }

    }
    for (let i = 0; i < array.length; is++) {
        if (max != array[i]) {
            if (max2 < arr[i])
                max2 = array[i];
        }
    }
    return max2;
}

console.log(segundoMasGrande([42, 1, 4, 3.14, 7]));

/**7**/

////Doble Problema Par:
//Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, 
//y manteniendo el orden original. Convierte [4, "Ulysses", 42, false] a [4,4, "Ulysses", 42, 42, false].

function dobleProblemaPar(array) {
    var array2 = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 == 0) {
            array2.push(array[index]);
            array2.push(array[index]);
        } else {
            array2.push(array[index]);
        }
    }
    return array2;
}
console.log(dobleProblemaPar([4, "Ulysses", 42, false]));