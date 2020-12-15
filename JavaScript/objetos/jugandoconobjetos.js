/*******************************************
/** J U G A N D O   C O N   O B J E T O S***
/*******************************************/

var users = [{
        name: "Michael",
        age: 37
    },

    {
        name: "John",
        age: 30
    },

    {
        name: "David",
        age: 27
    }
];

//1: ¿Cómo harías print/log de la edad de John?

//RSPT: 

console.log(users[1].age)

//2: ¿Cómo harías print/log del nombre del primer objeto?

//RSPT: 

console.log(users[0].name)

//3: ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

//Michael - 37
//John - 30
//David - 27

//RSPT: 
for (i = 0; i < users.length; i++) {
    console.log(users[i].name);
    console.log(users[i].age);
}

//4: ¿Cómo harías para imprimir el nombre de los mayores de edad?

//RSPT:
for (i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        console.log(users[i].name)
    }
}