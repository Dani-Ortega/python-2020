/*****************************
** A L G O R I T M O S   V **
/*****************************/

/**1**/

//Configura un array para que los valores negativos se transformen en 0. 
//Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

function resetNegativos() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }

    }
    return array

}

a = resetNegativos([1, 2, -1, -3]);
console.log(a);



/**2**/

//Dado un array, mueve todos los valores un espacio de derecha a izquierda 
//eliminando el primer valor y dejando un 0 para el último valor. 
//Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moverAdelante(array) {
    var newArray = []; //[2, 3, ]
    for (let i = 1; i < array.length; i++) { //i=0>1
        newArray.push(array[i])

    }
    newArray.push(0)
    return newArray;
}

console.log(moverAdelante([1, 2, 3]));


/**3**/

//Configura un array para que el resultado sean los valores en el orden contrario. 
//Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function returnReverso(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        newArrray.push(array[i]);

    }
    return newArray;
}

console.log(returnReverso([1, 2, 3]));


/**4**/

//Crea una función que cambie un array repitiendo sus valores originales
//(manteniendo el mismo orden). Por ejemplo: 
//repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetirValores(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        newArray.push(array[i]);
    }
    return newArray;



}

var y = repetirValores([4, "Ulysses", 42, false])
console.log(y);