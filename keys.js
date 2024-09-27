const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

// all properties name;
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
// all properties value
const values = Object.values(glass);
console.log(values);

// Two dimensional array
const pair = Object.entries(glass);
console.log(pair);

delete glass.isCleaned;
console.log(glass);
