// let time = 0;

// let timer=  setInterval(() => {
//     time += 1;
//     console.log(`${time} seconds have passed`);
//     if (time >= 10) {
//         clearInterval(timer)
//     }

// }, 2000);


// console.log(__dirname);
// console.log(__filename);


// function callFunction(fun) {
//     fun();
// }

// let sayHi = function(){
//     console.log('You called me??');
// }


// callFunction(sayHi);

 
const Counter = arr => {
    return `There are ${arr.length} elements in this array`
}

const add = (a,b) => {
    return `The sum of two number is ${a+b}`
}

const pi = 3.14;


module.exports = {
    Counter: Counter,
    add: add,
    pi: pi
    
}