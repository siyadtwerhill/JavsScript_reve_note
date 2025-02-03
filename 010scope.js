// +++++Scope+++++
// Scope determines the accessibility (visibility) 
// of variables in JavaScript. It defines where variables,
//  functions, and objects can be accessed or referenced.

// 2. Types of Scope in JavaScript
// There are three main types of scope in JavaScript:

// Global Scope
// Local (Function) Scope
// Block Scope (ES6: let & const)

// 1. Global Scope
// Variables declared outside of any function or block belong to the global scope.
// These variables can be accessed from anywhere in the program.
var globalVar = "I'm a global variable";

function showGlobal() {
    console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar); // Accessible

// 2. Local (Function) Scope
// Variables declared within a function (local variables) have local scope.
// They can only be accessed within that function.

function showLocal() {
    var localVar = "I'm a local variable";
    console.log(localVar); // Accessible
}
showLocal();
// console.log(localVar); // ❌ Error: localVar is not defined


// 3. Block Scope (let & const)
// Introduced in ES6.
// Variables declared using let and const are block-scoped.
// Block scope means variables are accessible only within the block {} where they are defined.
{
    let blockScoped = "I'm block-scoped";
    console.log(blockScoped); // ✅ Accessible here
}
// console.log(blockScoped); // ❌ Error: blockScoped is not defined

// Key Differences: var vs let and const
// var ignores block scope and is function-scoped.
// let and const follow block scope.

if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // ✅ Works (because var is function-scoped)
// console.log(y); // ❌ Error (because let is block-scoped)

// 4. Lexical Scope (Nested Functions)
// Inner functions can access variables of outer functions.
function outer() {
    let outerVar = "I'm from outer";

    function inner() {
        console.log(outerVar); // ✅ Accessible due to lexical scope
    }

    inner();
}

outer();
// Lexical Scope means that functions remember the scope in which they were created.

// 5. Scope Chain
// If a variable is not found in the current scope,
// JavaScript searches in the outer (parent) scopes until
// it finds the variable or reaches the global scope.

let a = "Global";

function first() {
    let b = "First Function";

    function second() {
        let c = "Second Function";
        console.log(a, b, c); // ✅ Accessible due to scope chain
    }

    second();
    // console.log(c); // ❌ Error: c is not accessible here
}

first();


