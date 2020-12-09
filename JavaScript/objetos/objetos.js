var dojo = {}; // crea un objeto vacío
dojo = {
        name: 'Coding Dojo', // la propiedad puede almacenar un string
        number_of_students: 25, // la propiedad puede almacenar un número
        instructors: ['Andrew', 'Michael', 'Jay'], // la propiedad puede almacenar arrays
        location: { // ¡la propiedad puede incluso almacenar otro objeto!
            city: 'San Jose',
            state: 'CA',
            zipcode: 95112
        }
    } // accede a las propiedades del objeto con notación de punto (.)


dojo.snacks = ['Fig Bars', 'Bagels', 'Popcorn', 'Apples'];

dojo.number_of_students = 40; // podemos reasignar cualquiera de las propiedades
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";


console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]); // o notación de [] corchete (nota: escribe la clave entre comillas)

dojo.number_of_students = 40; // podemos reasignar cualquiera de las propiedades
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";

/**ARRAY DE OBJETOS**/

var glazedDonuts = [{
        frosting: 'glazed',
        style: 'cake',
        type: 'old fashioned',
        age: '45',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'regular',
        age: '5',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'jelly filled',
        age: '1',
        time: 'seconds'
    }
];

var purchase;
//Tú
if ((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds') {
    //dueño de la tienda
    purchase = glazedDonuts[0];
} else {
    console.log('sorry it has been out a bit longer');
}

var numPurchase = 0;
for (var donut in glazedDonuts) {
    console.log(glazedDonuts[donut].type);
    if ((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds') {
        numPurchase++;
    } else {
        console.log('not this donut...');
    }
}
console.log(numPurchase);