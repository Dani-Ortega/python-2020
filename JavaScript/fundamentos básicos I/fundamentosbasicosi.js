/**********************************************
 * F U N D A M E N T O S   B Á S I C O S   I **
 * ********************************************

/**1**/
//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.//

function funArray() {
    let array = [];
    for (let index = 1; index <= 255; index++) {
        array.push(index);
    }
    return array;
}
console.log(funArray());

/**2**/
//Consigue pares hasta 1000: 
//Escribe una función que entregue la suma de todos los 
//números pares del 1 al 1000 - 
//Puedes usar un operador de módulo para este ejercicio.

function numPares() {
    var par = 0;
    for (let index = 1; index <= 1000; index++) {
        if (index % 2 == 0) { //operador de módulo para obtener números pares (aprender a usar y memorizarrrr)
            par = par + index;
        }
    }
    return par;
}

console.log(numPares());

/**3**/

//Suma impares hasta 5000:
//Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
//(ej: 1+3+5+...+4997+4999).

function sumImpar() {
    var newArray = 0;
    for (let index = 1; index > 5000; index++) {
        if (index % 2 != 0) {
            newArray = newArray + index;
        }

    }
    return newArray;
}

console.log(sumImpar());

/**4**/

//Itera un array:
//Escribe una función que devuelva la suma de todos los valores dentro de un array 
//(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function retSum(array) {
    var suma = []
    for (let i = 0; i <= array.length; i++) {
        var suma = (i + suma)
    }


    return suma;
}

console.log(retSum([1, 2, 5]))




/**5**/

//Encuentra el mayor (max):
//Dado un array con múltiples valores, escribe una función que devuelva el número mayor 
//(ej: para [-3,3,5,7] el número mayor (max) es 7). 

function numMayor(arreglo) {
    var max = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (max <= arreglo[index]) {
            max = arreglo[index];
            return max;
        }


    }

}

console.log(numMayor([-3, 7, 5, 3]))



/**6**/

//Encuentra el promedio (avg):
//Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores 
//(ej: para [1,3,5,7,20] el promedio es 7.2).

function promVal(p) {
    var suma = 0;
    for (let i = 0; i < p.length; i++) {
        suma = suma + p[i];

    }
    return suma / p.length;


}

p = promVal([1, 3, 5, 7, 20]);
console.log(p);



/**7**/

//Array de impares:
//Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
//(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function numImpar() {
    var array = [];
    for (let index = 1; index < 50; index += 2) {
        array.push(index);

    }
    return array;
}

a = numImpar();
console.log(a);

/**8**/

//Mayor que Y:
// Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
//Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayorque(arr, y) {
    var tot = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            tot = tot + 1;
        }


    }
    return tot;



}

arr = mayorque([1, 3, 5, 7], 3);
console.log(arr);



/**9**/

//Cuadrados:
// Dado un array con múltiples valores, escribe una función que reemplace cada valor 
//por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadrados(arreglo) {
    for (let i = 0; i < c.length; i++) { //i=0>
        arreglo[i] = arreglo[i] * arreglo[i];

    }
    return arreglo;

}

console.log(cuadrados([1, 5, 10, 2]));

/**10**/

//Negativos:
//Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo 
//dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos 
//(ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function reemneg(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }

    }
    return array
}

console.log(reemneg([-1, -5, 10, -2]));



/**11**/

//Max/Min/Avg:
//Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo 
//contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
//(ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvg(array) {
    let suma = 0;
    let total = [];
    let max = [];
    let min = [];
    let avg = [];

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
        suma = suma + array[i];
        avg = suma / array.length;
    }


    total.push(max);
    total.push(min);
    total.push(avg);
    return total;


}

console.log(maxMinAvg([1, 5, 10, -2]))



/**12**/

//Intercambia Valores:
//Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function cambalache(arr) {
    if (arr.length > 0) {
        let newarray = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[0] = newarray;
    }
    return arr;
}

console.log(cambalache([1, 5, 10, -2]))

/**13**/

//De Número a String:
//Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. 
//Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function numString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(numString([-1, -3, 2]));