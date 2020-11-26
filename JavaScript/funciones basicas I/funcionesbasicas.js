/*******************************************
 * F U N C I O N E S     B Á S I C A S   I *
 *******************************************

/**1**/

functioncopy a() {

    return 35;
}
console.log(a())

//rspt: 35

/**2**/

function a() {
    return 4;
}
console.log(a() + a()); //console.log( 4 + 4)

//RSPT: 8

/**3**/

function a(b) { //a(2)
    return b;
}
console.log(a(2) + a(4)); //console.log(2 + 4)

//RSPT: 6

/**4**/

function a(b) { // a(3)
        
    console.log(b); //console.log(3)
    return b * 3; //return 3*3
}
console.log(a(3)); //console.log (a(9))

//RSPT: 3, 9

/**5**/

function a(b) { //a(10)
    return b * 4; //10*4
    console.log(b); //console.log(40)
}
console.log(a(10));

//RSPT: 40, 40

/**6**/

function a(b) { //a(15)
    if (b < 10) { //15<10
        return 2;
    }    
    else {
        return 4; //false retorna 4  b = 4
    }
    console.log(b); // console.log(4)
}
console.log(a(15)); //(a(4)) no se imprime ya que al cumplirse la condición del else, se sale inmediatamente de la function

//RSPT: 4

/**7**/

function a(b, c) { //a(10,3) b=10 c=3 / a(3, 10) b=3 c=10
    return b * c; //return 10*3 / return 3*10
}
console.log(10, 3); //console.log(30)
console.log(a(3, 10)); //console.log((30))

//RSPT: 30, 30

/**8**/

function a(b) { //a(3) / a(4)
    for (var i = 0; i < 10; i++) { //i=0>1>2>3>4>5>6>7>8>9>10 /i=0
        console.log(i); //console.log(0,1,3,4,5,6,7,8,9) /
    }
    return i;
}
console.log(3); //console.log(0,1,3,4,5,6,7,8,9) /
console.log(4); //console.log(0,1,3,4,5,6,7,8,9)

//RSPT: (0,1,3,4,5,6,7,8,9)(0,1,3,4,5,6,7,8,9)

/**9**/

function a() {
    for (var i = 0; i < 10; i++) { //i=0>2>3>5>6>8>9>11>12
        i = i + 2; // i= 0+2/3+2/6+2/9+2/
        console.log(i); //(2, 5, 8, 11) 
    }
}
a();

//RSPT:(2, 5, 8, 11) 

/**10**/

function a(b, c) { //a(0, 10) 
    for (var i = b; i < c; i++) { //i=0>1...>9>10
        console.log(i); //console.log(0,1,2,3,4,5,6,7,8,9)
    }
    return b * c; //0*10?
}
a(0, 10);
console.log(a(0, 10));

//RSPT: (0,1,2,3,4,5,6,7,8,9), 0, 0

/**11**/

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}

//RSPT: undefined

/**12**/

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}

//RSPT: undefined

/**13**/

var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
console.log(z);

//RSPT: 15

/**14**/

var z = 10; //z=10

function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//RSPT: 15, 10

/**15**/

var z = 10; //z=10

function a() {
    var z = 15; //z=15
    console.log(z);
    return z;
}
z = a();
console.log(z);

//RSPT: 15, 15