// function Hello(num1=50,num2) {
//     return num1 + num2;
// }


// console.log(Hello(undefined, 40));

class Sample{
    sampleHello() {
        console.log('This is samples hello');
    }
}


class Hey extends Sample{
    constructor(num1, num2) {
        super()
        this.num1 = num1;
        this.num2 = num2;
    }

    Hola() {
        console.log(`Hello friend,its ${this.num1} and ${this.num2}`);
    }
}

let jis = new Hey(10, 20)
jis.Hola();
jis.sampleHello();