function Person(name,age,place) {
    this.name = name
    this.age = age
    this.place = place
    this.display=function () {
        console.log(`I'm ${this.name},${this.age} years old and from ${place}`);
    }
}

let name1 = new Person("Jishnu", 21, 'Alappey');
let name2 = new Person('Kichu', 20, 'Kochi');

name1.display();
name2.display();
