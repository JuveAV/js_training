const {userInput} = require("./UserInput");


// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

const input = userInput("Please enter a number: ")
let calculateSquare = (n, callback) => callback(n);
let square = n => n * n;
console.log(calculateSquare(input, square))


// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

const input1 = userInput("Please enter your Username: ")
const input2 = userInput("Please enter your Password: ")
let login = (username, password, callback) => callback(username, password);
let checkCredentials = (username, password) => {
    if (username === "qwerty" && password === "asd123"){
        console.log("You are logged in!")
    }else{
        console.log("Credentials are wrong!")
    }
}
login(input1, input2, checkCredentials)


// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

const input3 = userInput("Please enter a number: ")
let sumNumbersUpTo = (n, callback) => callback(n);
let numSum = n => {
    let sum = 0
    for(i = 0; i <= n; i++){
        sum +=i;
    }
    return sum;
}
console.log(sumNumbersUpTo(input3, numSum))