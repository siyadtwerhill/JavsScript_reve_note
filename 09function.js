// www.codewars.com
// function
function addTwoNumbers(a, b) {
    // function defination
    // This console.log will not be executed when you save the function in a variable
    // console.log(a + b);
    // return the sum of a and b even you console.log the function and save in varrible
    return a + b;
}
const sum = addTwoNumbers(2, 3);
console.log("sum: ",sum); // 5

function calculater(val1,val2, ...nu1){
    return nu1
};
console.log(calculater(1,2,3,4,5,6,7,8,9,10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lets pass the Object in the function
const obj = {
    name: "John",
    age: 25
}
function objectFunction(obj){
    return `objectFunction: ${obj.name} ${obj.age}`;
}
console.log(objectFunction(obj)); // objectFunction: John 25

// lets pass the Array in the function
const arr = [1,2,3,4,5,6,7,8,9,10];
function returnsecValue(getarr){
    return getarr[1];
}
console.log(returnsecValue(arr)); // 2
console.log(returnsecValue([200,500,300]));

// Array function
const arrFunction = (arr) => {
    return arr[0];
}
console.log(arrFunction([100,200,300])); // 100

//  current context
console.log(this); // In browser: window, In Node.js: {}
function showThis() {
    console.log(this); // window (browser) or global (Node.js)
}
showThis();

// implicit arrow function
//  const implicitArrow = (sum1, sum2) => sum1 + sum2;
// for return object
const implicitArrow = (obj2) => ({name: obj2.name, age: obj2.age});

//    An IIFE (Immediately Invoked Function Expression) is a function
// that is defined and executed immediately after its creation.
// It is a way to create a private scope in JavaScript,
// which can be useful to avoid polluting the global namespace.
(function() {
    console.log('IIFE');
})();

