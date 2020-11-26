//1
function multiply(x, y) { //*(x=2, y=3) 
    console.log(x);
    console.log(y);
}
b = multiply(2, 3);
console.log(b); //*no tiene return por lo que es undefined

//rspt: 2, 3, undefined

//2
function multiply(x, y) { //x=2 , x=3 - x=5 , y=2
    return x * y; //2*3=6 5*2= 10
}
b = multiply(2, 3); //b=6
console.log(b); //6
console.log(multiply(5, 2)); //10

//rspt: 6, 10

//3 Array
var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) { //i=0>3>4>7>8
    i = i + 3; //0+3=3 - 4+3=7
    console.log(i);
}

//rspt= 3, 7

//4
var x = 15;
console.log(x); //15
function awesome() {
    var x = 10;
    console.log(x); //10
}
console.log(x); //15
awesome();
console.log(x); //15

//rspt=15, 15, 10, 15

//5
for (var i = 0; i < 15; i += 2) {
    i = 0 > 2 > 4 > 6 > 8 > 10 > 12 > 14 > 16
    console.log(i);
}

//rspt= 0, 2, 4, 6, 8, 10, 12, 14

//6 'for' dentro de otro 'for' sirve para las matrices
for (var i = 0; i < 3; i++) { //i=0>1>2

    for (var j = 0; j < 2; j++) { //j=0>1>2 j=0>1>2 j=0>1>2
        console.log(i * j);
    }
}

//rspt= 0, 0, 0, 1, 0, 2

//6
function looping(x, y) { // x=3 y=3
    for (var i = 0; i < x; i++) { //i=0>1>2>3
        for (var j = 0; j < x; j++) { //j=0>1>2>3 //j=0>1>2>3 //j=0>1>2>3
            console.log(i * j); //este console nos obliga a recorrer toda la funcion
        }
    }
}
z = looping(3, 3);
console.log(z); //undefined (no hay return)

//rspt= 0, 0, 0, 0, 1, 2, 0 , 2, 4, undefined

//7
function looping(x, y) { //x=3 y=5
    for (var i = 0; i < x; i++) { //i=0>1>2>3

        for (var j = 0; j < 5; j++) { //j=0>1>2>3>4>5
            console.log(2 * 0);
        }
    }
    return x * y;
}
z = loping(3, 5); //*return 3*5= 15 
console.log(z); //15

//rspt= 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 2, 4, 6, 8, 15

//PARTE 2//


//1 print: to x: Por favor, completa los siguientes códigos para que la función imprima (print) 
//todos los enteros (integers) de 1 a x. Si x es negativo, haz que se muestre (print/log) 
//“número negativo” y que la función devuelva falso.

//>>('if' para detectar x negativo? (if x < 0))<<
//>>('console log' para imprimir)<<
//>>('for' serviría para recorrer todo los números del arreglo)<<
//>>('return' para que 'y' devuelva 'false')<<


function printUpTo(x) { //x=10 - x=-10* *permite cumplir con la condición 'if' y así print 'número negativo'
    if (x < 0) { //
        console.log("número negativo"); //>>para imprimir n° negativo
        return false; //'return false' hace que nos salgamos enseguida de el if o la function
    }
    for (let index = 1; index <= x; index++) { //para recorrer print
        console.log(index); //para imprimir el recorrido del 'for'
    }
}
printUpTo(10); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // 'y=false'
console.log(y); // debería imprimir false

//nota: se recomienda validar primero el número negativo en la 'function', se llega a esta conclu analizando primeramente el punto de quiebre<<

//rspt= 1,2,3,4,5,6,7,8,9,10, "número negativo", false, 


//2 printSum: Completa el código de más abajo para que la función imprima enteros (integers) 
//de 0 a x y donde cada entero imprima la suma (sum) parcial. Haz que la función entregue la suma final.

//>> 'for' para recorrer y dsp imprimir n° enteros. en el 'for' la 'var' debe ser =< a x  ya ke se considera para completar la function<<
//>>IMPORTANTE: cómo conseguir una 'var' que imprima la suma parcial (sum)???? 
//>>SUMA PARCIAL es el resultado que se va dando en el recorrido del 'for' ' sum + i'
//y cómo la declaro? directamente con una 'var' sum después del 'for' que vaya arrojando e imprimiendo las 
// sumas parciales. 'var sum = sum + i'<<

function printSum(x) { //x=255
    var sum = 0;
    for (var i = 0; i <= x; i++) { //x=255 i=0>1>2>3>4>...254>255>256
        console.log(i); //0, 1, 2, 3, 4,...254, 255.
        sum = sum + i; //0+0, 0+1, 1+2, 3+3, 6+4,...32131+254, 32385+255.
        console.log(sum); //0, 1, 3, 6, 10,... 32131, 32385, '32640'.
    }
    return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640

// (y) ya no se le asigna 255 debido al 'return sum' que devolvió la suma de 'sum+i'

//rspt= 0, 1, 2, 3, 4,...254, 255


//3 PrintSumArray: Completa el código a continuación para 
//que la función entregue la suma de todos 
//los valores en un array dado.

//>>para obtener una 'var' que acumule datos, debes crear 
//  la 'var' fuera del 'for' para que recopile los datos que 
//  arroje el recorrido<<
//>>para obtener la suma de todos los valores y sobreescribir el valor de sum, 
//  hay que recorrer el array(x) mediante 'for' y obtener el resultado solicitado (6)
//  sumando la 'var' más x en la posición que indique 'i' a través del 'for'<<
//>>se considera el x.length como el parametro para  validar y obtener el valor solicitado<<

function printSumArray(x) { //x=[1, 2, 3] => x=6
    var sum = 0; //1>3>6 
    for (var i = 0; i < x.length; i++) { //x.length=3 i=0>1>2>3
        sum = sum + x[i]; //0 + x[0]=1, 1 + x[1]=3, 3 + x[2]=6 procede al return

    }
    return sum; //retorna y sobreescribe al sum el '6'
}
console.log(printSumArray([1, 2, 3])); // debería imprimir 6

//rspt= console.log(6) (en la consola se vería '6')


//Bonus: LargestElement: Crea una función que entregue el elemento más grande 
//(largest element) en un array. Por ejemplo largestElement([1,30,5,7])

function largestElement(Array) { //(array)= [1,30,5,7]
    var mayor = Array[0] //1
    for (var i = 1; i < Array.length; i++) { //i=1 < 1?
        if (Array[i] > mayor) { // 30>1
            mayor = arreglo[i] //
        }
    }
    return mayor // retorna 1 ya que no cumple parametro en el 'for'
}
console.log(largestElemen(Array[1]))