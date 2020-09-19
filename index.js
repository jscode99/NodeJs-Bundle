// let name = 'Jishnu'

// let secondName = 'satheesh'

// k = 21;

// let fullName = `My Name is ${name} ${secondName}.I'm ${k} year old.`

// fullName.length > 2 ? console.log(fullName) : console.log('False');


// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

// a = 10;
// b = 20;

// a < b ? console.log('true') : console.log('false')


let App = require('./App');

let myArr = [
  "Jishnu",
  "Kichu",
  "Lechu",
  "Sudhu",
  "Sathu",
  "Hello",
  "common",
  "HitmeUp",
];

let result =App.Counter(myArr)

console.log(result);

let result2 = App.add(5, 9);
console.log(result2);

let piResult = App.pi;
console.log(piResult);

console.log(App.add(App.pi,30));