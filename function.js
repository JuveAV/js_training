// Task 1: Function Declaration
// Requirement: Declare a function using the function declaration syntax.
// The function should accept two parameters: 'firstName' and 'lastName',
// and return a full name by combining both parameters with a space in between.
// Write your code here

const {userInput} = require("./UserInput");
const input1 = userInput("Please enter Your first name: ");
const input2 = userInput("Please enter Your last name: ");

function fullName(firstName, lastName){
  
    firstName = input1;
    lastName = input2;
    return `Hello ${firstName} ${lastName}!`;
}

console.log(fullName(input1, input2));


// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.
// Write your code here

const input3 = userInput("Please enter a number: ");

let oddOrEven = function(number){
    number = input3;
    let num;
    if(number % 2 == 1){
        num = "The number is odd!"
    }
    else if(number % 2 == 0){
        num = "The number is even"
    }
    else{
        num = "Enter a valid number!"
    }
    return num
}

console.log(oddOrEven(input3))


// Task 3: Default Value with an Optional Parameter
// Requirement: Create a function that accepts a 'discount' parameter for an item price.
// If no 'discount' is provided, it should default to 0%. 
// The function should calculate and return the final price after applying the discount.
// Write your code here

const input4 = userInput("Please enter item's price: ")
const input5 = userInput("Please enter item's discount: ")
let price = function(discount){
    discount = input5 || 0;
       
    let finalPrice = input4 - (input4 * discount)/100;
    return `Final price is ${finalPrice}`
}

console.log(price())