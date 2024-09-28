function sum(a, b, c) {
  console.log(typeof arguments); // arguments => array like object
  const args = [...arguments];
  console.log(args);
  const result = a + b + c;
  return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);
console.log(typeof sum.length);
