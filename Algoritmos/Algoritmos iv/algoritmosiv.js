/******************************
 * A L G O R I T M O S   I V ** 
/******************************/

/**1**/

//Dados un array y un valor Y, cuenta e imprime (print) el número 
//de valores del array que sean mayores que Y.

function masQuey(y) {

    for (i = 0; < y.length; i++) {
        if (y = [i] > y) {
            mayorke = mayorke + 1;
        }
    }

    return mayorke
}

y = masQuey[3, 6]




/**2**/

//Dado un array, imprime los valores máximos (max), 
//mínimos (min) y promedio (average) para el array.

//*FUNCIÓN OPTIMIZADA* ANALIZADA (array con un solo valor)
function maxMinAver() { // [7]
    if (array.length >= 1) { //(1>=1) cumple la condición y entra en el if
        let max = array[0]
        let min = array[0]
        let aver = array[0]
        if (array.lenght > 1) { // el | en este if permite poder calcular dentro del if el promedio
            let suma = 0; // 
            for (let i = 0; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i];
                }
                if (min > array[i]) {
                    min = array[i];
                }
                suma = suma + array[i];
            }
            aver = suma / array.length;
        }
        console.log(max, min, aver)
    }
}

y = maxMinAver([7]);

/**3**/

//Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos 
//se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativos([]) {
    for (i = 0; i < 6; i++) {
        if (Array[i] < 0) {
            Array[i] = "Dojo";
        }
    }
    return Array;
}

y = reemplazarNegativos([1, 3, -3, -5, 5]);
console.log(y);

/**4**/

//Dado un array y su respectivo índice, remueve los valores 
//en el rango del índice dado( acortando el array). Por ejem
//plo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removerRango(array) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if (i < rangoInicio || i > rangoFin) {
            newArray.push(array[i])

        }
    }
    return newArray;
}

a = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(a);