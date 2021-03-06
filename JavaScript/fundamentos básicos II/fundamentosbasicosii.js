/************************************************
/** F U N D A M E N T O S   B Á S I C O S   I I**/
/************************************************/

/**1**/

//Tamaño Grande:
//Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
//Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function taGrande(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "Dojo";

        }
        return arr


    }
}

console.log(taGrande([-1, 3, 5, -5]));

/**2**/

//Imprime (print) el menor, devuelve (return) el mayor:
//Crea una función que tome un array de números. La función debería imprimir (print) 
//el menor valor del array y devolver (return) el mayor.

function devolPrint(y) {
    let max = y[0];
    let min = y[0];
    for (let index = 0; index < y.length; index++) {
        if (max > y[index]) {
            max = y[index];
        }
        if (min < y[index]) {
            min = y[index];
        }

    }
    console.log(min)
    return max;
}

y = (devolPrint([4, 6, -2, 1]));
console.log(y);

/**3**/

//Imprime (print) uno, devuelve (return) otro:
//Crea una función para un array de números. La función debería imprimir (print) 
//el penúltimo valor y devolver (return) el primer valor impar.

function pritRet(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[array.length - 2]);
        if (array[index] % 2 != 0) {
            return array[index];
        }


    }
}

console.log(pritRet([3, 1, 5, 2, 8]));

/**4**/

//Doble Visión:
// Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
//Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function dobleVision(array) {
    var newarray = [];
    for (let index = 0; index < array.length; index++) {
        newarray.push(array[index] * 2);
    }
    return newarray;
}

console.log(dobleVision([3, 3, 3]));

/**5**/

//Contar Positivos:
//Dado un array de números, crea una función para reemplazar el último valor con el número de 
//valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(arr) {
    let cont = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            cont = cont + 1;
        }

    }
    arr[arr.length - 1] = cont;
    return arr;
}

console.log(contarPositivos([-1, 1, 1, 1]));

/**6**/

//Pares e Impares:
//Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
//imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function pareseImpares(arr) {
    let impar = 0;
    let par = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            par = par + 1;
            if (par >= 3)
                console.log("¡Es para bien!")
        }


        if (arr[i] % 2 != 0) {
            impar = impar + 1;
            if (impar >= 3)
                console.log("¡Qué imparcial!")
        }

    }

}

console.log(pareseImpares([1, 7, 9, 14, 8, 6, 24, 14, 8, 62]));

//2
function pareseImpares(arr) {;
    for (let i = 0; i < arr.length; i++) {
        let impar = 0;
        let par = 0;
        if (arr[i] % 2 == 0) {
            let par = par + 1;
            if (par >= 3) {
                console.log("¡Qué imparcial!");
            }

        }


        if (arr[i] % 2 != 0) {
            let impar = impar + 1;
            if (impar >= 3) {
                console.log("¡Es para bien!");
            }

        }


    }

}

console.log(pareseImpares([1, 7, 9, 14, 8, 6, 24, 14, 8, 62]));

/**7**/

//Incrementa los Segundos:
//Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos 
//cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

function increSegundos(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 != 0) {
            arr[index] = 1;
        }

    }
    return arr;
}

console.log(increSegundos([2, 3, 8, 9, 1, 16, 5, 7]));


/**8**/

//Longitudes previas:
//Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza
//cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, 
//longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
//Pista: ¿For loops solo puede ir hacia adelante?

function longitudePrevias(arreglo) {
    for (let i = 2; i > 0; i--) {
        arreglo[i] = arreglo[i - 1].length; //arreglo[2] = arreglo[i]


    }
    return arreglo;

}

console.log(longitudesPrevias(["tengo", "mucha", "hambre"]));

/**9**/

//Agrega Siete:
//Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original,
//pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.

function agregaSiete(array) {
    let suma = [];
    for (let i = 0; i < array.length; i++) {
        suma.push(array[i] + 7);

    }
    console.log(suma);
}

console.log(agregaSiete([7, 14, 21, 28, 35]));

/**10**/

//Array Inverso:
//Dado un array, escribe una función que invierte sus valores en el lugar. 
//Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
//Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function invertir(arr) {

}

console.log(invertir([3, 1, 6, 4, 2]));

/**11**/

//Perspectiva: Negativa -
//Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
//pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function perspectiva(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] - arr[i] * 2;
            arr2.push(arr[i]);
        }

    }
    return arr2;
}

console.log(perspectiva([1, 3, 5, 7, 9]));

/**12**/

//Siempre hambriento:
//Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
//Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.

function siempreHambriento(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == "comida") {
            array[index] = "yummy";

        }

    }
    return array;

}

console.log(siempreHambriento(["denme", "mucha", "comida", "xfavor", "amo", "la", "comida"]));

/**13**/

//Cambiar hacia el centro:
//Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
//Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. 
//cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a 
//[6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function cambiaHaciaElCentro(a) {

    for (let i = 0; i <= a.length / a[1]; i++) {
        if (i % 2 == 0) {
            var num = a[a.length - (i + 1)];
            a[a.length - (i + 1)] = a[i];
            a[i] = num;
        }

    }
    return a
}

a = (cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]));
console.log(a);

/**14**/

//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr 
//por el número num, y devuelve el array arr modificado. 
//Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function escalaArray(arr, m) {
    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i] * m;
    }
    return arr2;
}

console.log(escalaArray([1, 2, 3], 3))