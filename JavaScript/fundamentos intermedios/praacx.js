//--3--
//Fibonacci - 
//Crea una función para generar números de Fibonacci. 
//En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, 
//partiendo con los valores 0 y 1. 
//Tu función debería aceptar un argumento, un índice en la secuencia 
//(donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc).
// Ejemplos: 
//fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), 
//fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), 
//fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), 
//fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3),
//fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). 
//Haz esto primero sin usar recursión. Si no sabes qué es una recursión, 
//no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 

function fibonacci(num) {
    let numeros = [0, 1];
    for (let i = 2; i < num; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros[numeros.length - 2] + numeros[numeros.length - 1];
}
console.log(fibonacci(6));

//------

function fibonacci(num) {
    let numeros = [0, 1];
    for (let i = 2; i <= num; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros[numeros.length - 1];
}
console.log(fibonacci(6));


//--4--
//Array: Penúltimo: 
//Devuelve el penúltimo elemento del array. 
//Dado [42, true, 4, 'Liam', 7] devuelve “Liam”. 
//Si el array es muy pequeño, devuelve null.

function pen(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr.length < 2) {
            return null;
        } else {
            console.log(arr[arr.length - 2]);
        }
    }
}
console.log(pen([42, true, 4, 'Liam', 7]));

//--5--
//Array: “N” último: Devuelve el elemento “N” último.
// Dado ([5,2,3,6,4,9,7],3), devuelve 4. Si el array es muy pequeño, devuelve null. 

function ultimoN(arr, num) {
    for (let index = 0; index < arr.length; index++) {
        if (arr.length < 2) {
            return null;
        } else {
            console.log(arr[arr.length - num]);
        }
    }
}
console.log(ultimoN([5, 2, 3, 6, 4, 9, 7], 2));

//--6--
//Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. 
//Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.

function segMasgrande(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        let max = arr[0];
        let max2 = arr[0];
        for (let index = 0; index < arr.length; index++) {
            if (max < arr[index]) {
                max = arr[index];
            }
        }
        for (let index = 0; index < arr.length; index++) {
            if (max != arr[index]) {
                if (max2 < arr[index]) {
                    max2 = arr[index];
                }
            }
        }
        return max2;
    }
}
console.log(segMasgrande([42, 1, 4, 3.14, 7]));



//--7--
//Doble Problema Par:
//Crea una función que cambie un array dado duplicando cada uno de sus elementos 
//en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]
//   a    [4,4, "Ulysses", 42, 42, false].

function dobleVision(array) {
    arraynew = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            arraynew.push(array[i]);
            arraynew.push(array[i]);
        } else {
            arraynew.push(array[i]);
        }
    }
    return arraynew;
}
console.log(dobleVision([4, "Ulysses", 42, false]));


//Crea una función Fib(n) que devuelve el enésimo número Fibonacci. 
//Usa recursión para esto. 

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 2) + fib(n - 1);
}
n = fib(2);
console.log(n);