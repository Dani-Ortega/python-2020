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

//¿Cómo harías print/log de la edad de John?

//RSPT: console.log(users[1].age)

//¿Cómo harías print/log del nombre del primer objeto?

//]RSPT: console.log(users[0].name)

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

//Michael - 37
//John - 30
//David - 27

//RSPT: 
//for (let index = 0; index < users.length; index++) {
//  console.log(users[index].name);
//  console.log(users[index].age);