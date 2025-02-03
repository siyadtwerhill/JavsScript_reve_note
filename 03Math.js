// ++++++++++ Math Object in JavaScript ++++++++++

// 📌 Math Constants

console.log(Math.PI);      // 3.141592653589793
console.log(Math.E);       // 2.718281828459045
console.log(Math.SQRT2);   // 1.4142135623730951

// 📌 Math Methods

// ✅ Math.abs(x) – Absolute value
console.log(Math.abs(-10));      // 10

//✅ Math.round(x) – Round to nearest integer
console.log(Math.round(4.7));    // 5

//✅ Math.ceil(x) – Round up
console.log(Math.ceil(4.2));     // 5

//✅ Math.floor(x) – Round down
console.log(Math.floor(4.9));    // 4

//✅ Math.sqrt(x) – Square root
console.log(Math.sqrt(25));      // 5

//✅ Math.pow(x, y) – Power (x^y)
console.log(Math.pow(2, 3));     // 8

//✅ Math.min(a, b, c, d) – Smallest number
console.log(Math.min(3, 7, 1));  // 1

//✅ Math.max(a, b, c, d) – Largest number
console.log(Math.max(3, 7, 1));  // 7

//✅ Math.random() – Random number (0-1)
// Random number between 1-10
console.log(Math.floor(Math.random() * 10) + 1);