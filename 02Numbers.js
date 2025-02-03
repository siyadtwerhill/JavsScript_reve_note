// +++++ Numbers in JavaScript ++++++
// JavaScript has only one type of number:
// 📌 Integer (5, -10, 100)
// 📌 Float (3.14, -2.5)
// 📌 NaN (Not a Number

// 📌 +Arithmetic Operations+

let a = 10, b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (Remainder)
console.log(a ** 2); // 100 (Exponentiation)

// +++++ 📌Number Methods ++++
let num = 123.456;

// ✅ toFixed(n) – Returns string with n decimal places
console.log(num.toFixed(2));     // "123.46"

// ✅ toPrecision(n) – Returns string with n significant digits
console.log(num.toPrecision(4)); // "123.5"

// ✅ parseInt(str) – Converts to integer
console.log(parseInt("42px"));   // 42

// ✅ parseFloat(str) – Converts to floating number
console.log(parseFloat("3.14abc")); // 3.14

// ✅ isNaN(value) – Checks if NaN (Not a Number)
console.log(isNaN("Hello"));    // true

// ✅ isFinite(value) – Checks if a finite number
console.log(isFinite(100 / 0)); // false







