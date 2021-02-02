// function add(num1, num2) {
//     // if (num2 === undefined) {
//     //     num2 = 0;
//     // }
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// // const result = add(12);
// const result = add(12, 34);
// console.log(result);

function add(num1, num2 = 20) { // akon ar atake gorotto dibe na

    return num1 + num2;
}

const result = add(12);
console.log(result);