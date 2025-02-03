// +++++++ String ++++++
// Different between create wtih new and without new
//  +Type+	
// Primitive string (STRING) / 	String object (OBJECT)
//   +Comparison Behavior+
// 	Can be compared directly with === /	Will not compare equal to primitive strings due to the object wrapper
//  +Memory+
// 	More memory efficient   / 	Less memory efficient due to object creation
//  +Methods+
// 	Still has methods because JS auto-wraps primitives to objects when necessary  /	Explicitly wraps the string in an object, so methods are available directly
//  +Usage+
// 	Recommended and more common  /	Rarely used, only when specific object methods are needed

const string = 'Hello Everyone';
// console.log(string);

// A string is a sequence of characters inside quotes ("", '', or backticks `` `).

const string1 = 'I am a teacher and leader of the class';
// console.log(`We are going to learn about ${string} and ${string1}`);

// Strig with new keyword

 const YeCoding = new String('I am a software engineer');
console.log(YeCoding);

// 📌 String Properties & Methods

// ✅ length – Returns the length of the string
console.log(YeCoding.length);

// ✅ toUpperCase() – Converts to uppercase
console.log(YeCoding.toUpperCase());

// ✅ toLowerCase() – Converts to lowercase
console.log(YeCoding.toLowerCase());

// ✅ trim() – Removes extra spaces
const string2 = '    Hello Everyone    ';
console.log(string2.trim());

// ✅ charAt(index) – Returns character at index
console.log(YeCoding.charAt(0));

// ✅ indexOf(substring) – Finds first occurrence index
console.log(YeCoding.indexOf('software'));

// ✅ slice(start, end) – Extracts part of string
console.log(YeCoding.slice(5, 15));

// ✅ replace(old, new) – Replaces first occurrence
console.log(YeCoding.replace('software', 'web developer'));

// ✅ split(separator) – Splits into an array
console.log(YeCoding.split(' '));