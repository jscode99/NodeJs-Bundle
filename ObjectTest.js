let Person = {
    name: 'Jishnu',
    age: 21,
    place: 'Alappey',
    display: function () {
        let name='World'
        console.log(name);
    }
}
    Person.Status='Martial'
Person.displayAge=function () {
    console.log(this.age);
}


// Person.name = 'World'

console.log(Person);




// const MapMethod = Person.map(x => x)
// Person.name = 'Hello'
// console.log(MapMethod);
// console.log(Person.name);

// for (x in Person) {
//     for (y in Person) {
//         console.log(Person[y]);
//     }
//     console.log(Person[x]);
// }

