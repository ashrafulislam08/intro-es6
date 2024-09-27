const actor = {
  name: "Ananta",
  age: 30,
  phone: "01718545451",
  money: 25454525455,
};

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

const { age, name, phone: mobile } = actor;

console.log(mobile);
console.log(name);
console.log(age);

// array destructuring

const numbers = [15, 25];
const [first, second] = numbers;
console.log(first, second);
const [x, y] = [12, 66];
console.log(x, y);

function doubleThem(a, b) {
  return [a * 2, b * 2];
}

console.log(doubleThem(...numbers));
