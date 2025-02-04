// ++++Control Flow in JavaScript+++
//    Control flow in JavaScript refers to the order in
// which statements and expressions are executed in a program.
// It determines how the program processes different conditions and loops.

// if Statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// if-else Statement
let age1 = 16;
if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// if-else if-else Statement
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Ternary Operator (? :)
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is coming!");
    break;
  default:
    console.log("A regular day.");
}

// Looping Statements
// for Loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

// while Loop
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

// do-while Loop
let number = 1;
do {
    console.log("Number: " + number);
    number++;
} while (number <= 3);

// for...in Loop
// for..in loop return index not value
// The JavaScript for in statement loops through the properties of an Object:
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x];
} // text = "JohnDoe25"

// The JavaScript for in statement can also loop over the properties of an Array:
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  console.log(x); // 0 1 2 3 4
  
} 


// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.
const cars = ["BMW", "Volvo", "Mini"];
// as you can see the for of loop return the value not index
let text1 = "";
for (let x of cars) {
  text += x;
}


// ++++++Truthy & Falsy Values in JavaScript+++++
// JavaScript treats certain values as true or false when used in a condition.

// +Falsy Values+
// These values are treated as false in Boolean contexts:
// false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
if (0) {
    console.log("This will not run");
} else {
    console.log("Falsy value detected");
}

// +Truthy Values+
// Any value that is not falsy is truthy, including:
// Any non-empty string ("hello")
// Any non-zero number (42, -1)
// true
// Arrays ([]) and objects ({})
// Infinity and -Infinity
if ("hello") {
    console.log("This is truthy"); // This will run
}

// ++++++Short-Circuit Evaluation in JavaScript+++++
// Short-circuit evaluation is a technique used to speed up code execution.
// In JavaScript, logical operators like && and || use short-circuit evaluation to evaluate expressions.
// The logical AND (&&) operator returns the first falsy value or the last value if all values are truthy.
// The logical OR (||) operator returns the first truthy value or the last value if all values are falsy.
let x = 10;
let y = 20;
let z = 30;
let result = x > y && y > z;
console.log(result); // false


// ++++++Break and Continue Statements in JavaScript+++++
// The break statement is used to exit a loop or switch statement.
// The continue statement is used to skip the current iteration and continue with the next one.
// break Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Iteration " + i);
}
// Output: Iteration 1 Iteration 2

// continue Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Iteration " + i);
}
// Output: Iteration 1 Iteration 2 Iteration 4 Iteration 5

// ++++++Labels in JavaScript+++++
// Labels are used to identify loops in JavaScript.
// You can use labels to break or continue outer loops in nested loops.
outerloop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerloop;
        }
        console.log(i, j);
    }
}
// Output: 1 1 1 2 1 3

// ++++++Throwing Errors in JavaScript+++++
// You can throw errors in JavaScript using the throw statement.
// This can be useful for handling exceptions in your code.
const age2 = 17;
if (age2 < 18) {
    throw new Error("You must be 18 or older.");
} // Error: You must be 18 or older.

// ++++++try...catch Statement in JavaScript+++++
// The try...catch statement is used to handle exceptions in JavaScript.
// You can use it to catch errors and handle them gracefully.
try {
    const age3 = 17;
    if (age3 < 18) {
        throw new Error("You must be 18 or older.");
    }
} catch (error) {
    console.log(error.message); // You must be 18 or older.
}

// ++++++finally Block in JavaScript+++++
// The finally block is used to execute code after a try...catch statement, regardless of the outcome.
try {
    console.log("Try block");
} catch (error) {
    console.log("Catch block");
} finally {
    console.log("Finally block");
}
// Output: Try block Finally block

// ++++++Nullish Values (null & undefined)+++++
// JavaScript has two special values that represent absence of a value:
// null: Represents an intentional absence of a value.
// undefined: Represents an uninitialized variable or missing property.
let x1 = null;  // Value is explicitly empty
let y1;         // Value is undefined
console.log(x1); // null
console.log(y1); // undefined

// +Nullish Coalescing Operator (??)+
// Returns the right-hand value
// if the left-hand value is null or undefined,
// otherwise returns the left-hand value.
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

// ++++++Summary+++++
// Control flow in JavaScript determines the order in which statements and expressions are executed.
// You can use if, if-else, if-else if-else, switch, and ternary operators to control the flow of your code.
// Looping statements like for, while, do-while, for...in, and for...of can be used to repeat code execution.
// JavaScript treats certain values as truthy or falsy in Boolean contexts.
// Short-circuit evaluation is a technique used to speed up code execution.
// The break and continue statements are used to control loop execution.
// Labels can be used to identify loops in nested loops.
// You can throw errors and handle exceptions using the throw, try...catch, and finally statements.
// Nullish values like null and undefined represent absence of a value in JavaScript.

