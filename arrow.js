// function add(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// function add(a, b) {
//  return a + b;
// }

// function expression
const add2 = function (a, b) {
  return a + b;
};

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

// const sum = add3(5, 90);
const sum = add4(4, 5, 5, 90);
const mult = multiply(5, 6);
console.log(sum);
console.log(mult);
