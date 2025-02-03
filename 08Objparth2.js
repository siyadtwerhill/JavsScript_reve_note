// objest literals or non-singleton object
// const tinderUser1 = {};
// singleton object
const tinderUser = new Object();
tinderUser.id = 1;
tinderUser.name = 'John';
tinderUser.isLogin = false;

let obj1 = { 1: 'a', 2: 'b', 3: 'c' };
let obj2 = { 4: 'a', 5: 'b', 6: 'c' };
let obj3 = { 7: 'b', 8: 'a', 9: 'c' };

// const obj4={obj1,obj2,obj3};
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

// Object of array

const array = [
    { id: 1, name: 'John', isLogin: false },
    { id: 2, name: 'Doe', isLogin: true },
    { id: 3, name: 'Smith', isLogin: false },
    { id: 4, name: 'Alex', isLogin: true },
    { id: 5, name: 'Peter', isLogin: false },
];

// console.log(Object.keys(tinderUser)); reutrn an array
// console.log(Object.values(tinderUser)); reutrn an array
// console.log(Object.entries(tinderUser)); reutrn an array

console.log(tinderUser.hasOwnProperty('isLogin')); // return true or false

// destructuring object
const course = {
    course : 'JavaScript',
    price: "999",
    courseInstructor: 'Jhankar Mahbub',
};

// const{courseInstructor} = course;
const{courseInstructor: instructor} = course;

console.log(instructor);











