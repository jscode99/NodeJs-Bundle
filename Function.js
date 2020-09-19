

function hello() {
    console.log(`Hello`);
    return 20;
}
val = hello();

console.log(val);


let Array = ['Jishnu', 'Kichu', 'Lechu', 'Sudhu', 'Sathu'];
console.log(Array[0]);

Array.push('Hello')

console.log(Array);

Array.shift();

console.log(Array);

Array.unshift('Jishnu');

console.log(Array);

Array.pop([5]);

console.log(Array);

for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    console.log(element);
}

const map1 = Array.map(x => `Hello World!!`);
console.log(map1);

//Nested Function

let num = 10;

function Hello() {
    num = 20;
    function Hello2() {
        num = 30;
    }
    Hello2();
}

Hello();

console.log(num);