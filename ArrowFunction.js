const {userInput} = require("./UserInput");
const input = userInput("Please enter your name: ")
// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

function multiply(a, b) {
    return a * b;
  }
  // Writhe your code here
  let multiplyArrow = (a, b) => a * b;
  
  function cube(n) {
    return n * n * n;
  }
  // Writhe your code here
  let cubeArrow = n => n * n * n;

  function sayHello(name) {
    return "Hello, " + name + "!";
  }
  // Writhe your code here 
  let sayHelloArrow = name1 => "Hello, " + name1 + "!";




  // Task 2. Arrow Function with Default Parameters
// Requirement:
// Create an arrow function greet that takes a name parameter.
// The parameter should have a default value of "Guest".
// The function should return "Hello, [name]!".
// Writhe your code here

let greet = (name = "Guest") => `Hello ${name}!`;
console.log(greet(input))


// Task 3. Calculate Percentage
// Requirement:
// Write an arrow function that takes two arguments:
// total: the total value
// percentage: the percentage to calculate
// The function should return the calculated percentage of the total.
// Writhe your code here

const input1 = userInput("Please enter the total: ")
const input2 = userInput("Please enter the percentage: ")
let calculatePercentage = (total, percentage) => total * (percentage/100)
console.log(calculatePercentage(input1, input2))