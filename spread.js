const max = Math.max(6, 23, 46, 1, 89, 23);
console.log(max);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];

const arrayMax = Math.max(...numbers);
console.log(arrayMax);

console.log(...numbers);

// use spread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends];
console.log(dosto);
friends.push(12);
console.log(dosto);
console.log(friends);

// advanced
const sonkha = [...friends, 9999]; // add extra elements while copy
console.log(sonkha);
