// singleton

// objest literals
const mySum = Symbol('key');
const user = {
    name: 'John',
    'age': 30,
    [mySum]: 'mySum',
    location: 'USA',
    isLogin: false,
    email: 'John@gmail.com',
    LastLoginDay: 'Monday',
}
// console.log(user.email);
// console.log(user['age']);
// console.log(user[mySum]);

// object constructor
const user1 = new Object();
user1.name = 'John';
user1.age = 30;
user1.location = 'USA';
user1.isLogin = false;
user1.email = 'Gay@gamil.com';
user1.LastLoginDay = 'Monday';
// console.log(user1.name);

Object.freeze(user1);
user1.name = 'Doe';
// console.log(user1.name);

// obj function

user.greeting = function () {
    return `Hello ${this.name}`;
};
console.log(user.greeting());


