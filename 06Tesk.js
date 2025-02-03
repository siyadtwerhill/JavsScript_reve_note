// Remove Duplicates from an Array

// Write a function that removes duplicate elements from [1, 2, 3, 3, 4, 5, 5] and returns [1, 2, 3, 4, 5].

let arr = [1,2,3,3,4,5,5];
arr.forEach((ele)=>{
    if(arr.indexOf(ele) !== arr.lastIndexOf(ele)){
        arr.splice(arr.lastIndexOf(ele),1);
    }
})
console.log(arr); // [1, 2, 3, 4, 5]

//         Flatten an Array
// Convert [[1, 2], [3, 4], [5, [6, 7]]] into [1, 2, 3, 4, 5, 6, 7].

let arr1 = [[1, 2], [3, 4], [5, [6, 7]]];
let arr2 = arr1.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]
// The flat() method of Array instances creates a new array with all sub-array elements
//  concatenated into it recursively up to the specified depth.
console.log(arr2);

//      Count Character Frequency
// Given "hello world", return { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }.

let str = "hello world";
let obj = {};
for(let i = 0; i<str.length; i++){
    if(obj[str[i]]){
        obj[str[i]]++;
    
}
console.log(obj); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//      Capitalize Letters
// Given "hello world", return "Hello World".

let str1 = "hello world";
let str2 = str1.split(" ").map((ele)=>{
    return ele[0].toUpperCase() + ele.slice(1);
}).join(" ")}; // Hello World
