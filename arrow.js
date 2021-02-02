// normal function

// function doubleInt(num) {
//     return num * 2;
// }
// const result = doubleInt(5);
// console.log(result);


// function expression
// const doubleInt = function mynum(num) {
//     return num * 2;
// }
// const result = doubleInt(5);
// console.log(result);


//ES6 Function
const doubleInt = num => num * num; //It's a single perameter
const add = (x, y) => x + y; // It's a 1 and more than Perameter
const giveMe5 = () => 5; // It's a empty perameter
const doMath = (x, y) => {
    const sum = x + y;
    const different = x - y;
    const result = sum * different;
    return result;
}
const result4 = doMath(10, 4);
const resultAdd = add(35, 20);
const result = doubleInt(50);
const result3 = giveMe5(5);
console.log(result4);
console.log(result3);
console.log(resultAdd);
console.log(result);