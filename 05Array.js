// Source: https://www.w3schools.com/js/js_arrays.asp
// ++++++++++++Array++++++++++++

const arr = [1, 2, 3, 4];
// .push(value)	Add at end
	arr.push(5);
// .pop()	Remove last element
    arr.pop();
// .shift()	Remove first element
    arr.shift();	
// .unshift(value)	Add at beginning
    arr.unshift(1);
// .length	Get array length	
    arr.length;
// .indexOf(value)	Get index of element	
    arr.indexOf(2);
// .includes(value)	Check if exists	
    arr.includes(2);
// .splice(start, deleteCount, ...items)	Add/Remove elements	
    arr.splice(1, 2, 3, 4);
// .slice(start, end)	Copy part of array	
    arr.slice(1, 3);
// .concat(arr2)	Merge arrays	
    arr.concat([5, 6]);
// .join(separator)	Convert to string	
    arr.join(', ');
// .reverse()	Reverse array	
    arr.reverse();
// .sort()	Sort alphabetically	    
    arr.sort();

// .map(callback)	Modify elements
// Returns a new array with modified values based on a function.
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(num => num ** 2);
    console.log(squared); // [1, 4, 9, 16, 25]

// .filter(callback)	Get elements matching condition	
// Returns a new array with elements that pass a condition.
    const ages = [15, 22, 34, 18, 45];
    const adults = ages.filter(age => age >= 18);
    console.log(adults); // [22, 34, 18, 45]

// .reduce(callback, initialValue)	Calculate single value	
// Reduces an array to a single value.
    const numbers1 = [1, 2, 3, 4, 5];
    const sum = numbers1.reduce((total, num) => total + num, 0);
    console.log(sum); // 15

// find() - Finding First Matching Element
// Finds the first element that matches a condition.
 const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  const user = users.find(user => user.age > 28);
  console.log(user); // { name: "Bob", age: 30 }

// findIndex() - Finding Index of First Matching Element
// Finds the index of the first element that matches a condition.
  const users1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  const index = users1.findIndex(user => user.age > 28);
  console.log(index); // 1

//   some() & every() - Checking Conditions
//   some() → Returns true if at least one element satisfies the condition.
//   every() → Returns true if all elements satisfy the condition.
    const scores = [70, 80, 90, 100];
    console.log(scores.some(score => score < 75)); // true
    console.log(scores.every(score => score >= 70)); // true

// 2️⃣ Deep Copy vs Shallow Copy in Arrays
// Shallow Copy (Copies reference, affects original)
// Deep Copy (Creates an independent copy)

// Shallow Copy Example (slice(), spread operator)
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1]; // Spread operator
    arr2[0] = 100;
    console.log(arr1); // [1, 2, 3] (Unchanged)
    
// let arr1 = [{ a: 1 }, { b: 2 }];
    let arr2 = JSON.parse(JSON.stringify(arr1));
    arr2[0].a = 100;
    console.log(arr1[0].a); // 1 (Unchanged)
