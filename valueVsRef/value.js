// Value vs Reference

// In JS there are 2 types of values = Primitives & Objects. They are stored diffrently!
// Primitives get assigned by value
// Objects get assigned by reference

/*  

Primitives 
- Number
- Boolean
- String
- Null
- Undefined

Objects
- Object
- Array
- Function
- Date
- Regex

*/

const a = 1;
const b = 1;
a === b;
// true - primitives

const array1 = [1];
const array2 = [1];
array1 === array2;
// false - objects

const name = "Meena"; // name points to value i.e name ---------> "meena". It DOES NOT create a new string!

const myCar = {}; // points myCar to the location of the object to the computers memory! i.e. myCar ------> 12345

const obj1 = {};
const obj2 = {};
obj1 === obj2;
// False

// Real Life Example - Value Comparision

function incrementAge(age) {
  age = age + 1;
}

myAge = 10;
incrementAge(myAge);
myAge; // Still 10 why?

/*

You define myAge = 10.

myAge is now holding the value 10.

You call incrementAge(myAge).

The value of myAge (which is 10) is copied into the age parameter of the incrementAge function.

Inside the function, you're only modifying this local age variable, not the original myAge.
The function ends.

The local age variable is discarded when the function finishes.

The original myAge variable is untouched and remains 10.

*/

function incrementAge2(user) {
  user.age = user.age + 1;
}

const me = {
  age: 10,
};

incrementAge2(me);
me(); // {age: 11}

/*

This works because objects in JavaScript are passed by reference!

Example Object:

const myObject = { age: 10 } 

The variable myObject holds a reference (or "link") to the actual object in memory.


The object reference myObject is passed to the function incrementAge2(user)


Inside the function, the parameter user refers to the same object in memory as myObject.

You modify user.age in the function.

Since user refers to the same object as myObject, changing user.age directly updates the age property of the object in memory.
After the function call, myObject reflects the updated age.

Because both myObject and user point to the same object

Primitive values (like numbers or strings) are copied when passed to a function, so the original variable isn’t affected.

Objects are passed by reference, so the function can directly modify the original object’s properties.

*/
