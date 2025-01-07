// 1. Sum of Numbers

const numbers = [1, 2, 3];

const total = numbers.reduce((accumulater, currentValue) => {
  return accumulater + currentValue;
}, 0);

document.querySelector(
  ".numbers"
).textContent = `The total number is:  ${total}`;

// 2. Concatenate Strings

const words = ["Hello", " ", "World", "!"];
const sentence = words.reduce((acc, cur) => {
  return acc + cur;
});

document.querySelector(
  ".strings"
).textContent = `The concatenated sentence is: ${sentence}`;

/* 

3. Count Occurrences of Elements

The accumulater is an Object
The accumulater is the collector, like a tally kepper.
accumulater[currentFruit] = 0; is the same as accumulater["apple"] = 0;

*/

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((accumulater, curFruitValue) => {
  console.log("The accumulater is initially empty {}", accumulater);

  if (accumulater[curFruitValue] === undefined) {
    accumulater[curFruitValue] = 0;
  }

  accumulater[curFruitValue] += 1;

  console.log("Each iteration", accumulater);

  return accumulater;
}, {});

document.querySelector(
  ".count__occurances"
).textContent = `The fruit count grouped by fruit name : ${JSON.stringify(
  fruitCount
)}`;
/* 

4. Group by property
student.grade is getting the grade value ("A", "B", or "C") from the student object.
!!!! accumulator[grade] is using that grade value as a key to access or create arrays in our accumulator.


First, look at the student's test paper to see their grade (getting student.grade).Read Value
Second, use that grade to find or create the right box(array) to put their name in (accumulator[grade]). Use a Key

*/

const students = [
  { name: "John", grade: "A" },
  { name: "Jane", grade: "B" },
  { name: "Bob", grade: "A" },
  { name: "Alice", grade: "C" },
];

const groupByGrade = students.reduce((accumulater, student) => {
  const grade = student.grade;
  console.log("grade", grade);

  if (!accumulater[grade]) {
    // If there's no array for this grade
    accumulater[grade] = []; // Then create a new array
  }
  accumulater[grade].push(student.name);
  return accumulater;
}, {});

console.log("groupByGrade", groupByGrade);

//5. Flatten Nested Arrays

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

const flattenArray = nestedArray.reduce((acc, curVal) => {
  return acc.concat(curVal);
}, []);

console.log("flattenArray", flattenArray);

//6. Create an object from 2 arrays

const propNames = ["Name", "Age", "City"];
const propValues = ["John", "26", "London"];

const person = propNames.reduce((acc, curVal, index) => {
  acc[curVal] = propValues[index];
  return acc;
}, {});

console.log("person", person);
