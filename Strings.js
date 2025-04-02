const {userInput} = require("./UserInput");


// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.
// Write your code here!

const input = userInput("Please enter a text: ")
let str = text => text.length;
console.log(str(input))


// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

const input1 = userInput("Please enter a text: ")

let str1 = text1 => {
    if(text1 == !isNaN || text1 < 1 || text1 > 50){
        console.log("Invalid input parameters! Input should be text and should contain min 1 and max 50 symbols.")
    }
    else{
        for(i = 0; i < text1.length; i++)
            console.log(text1[i])
    }
}
(str1(input1))


// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

const input2 = userInput("Please enter your first name and last name: ")
let fullName = nameAndSurname => {
    const nameAndSurnameParts = nameAndSurname.split(" ");
    if (typeof nameAndSurname !== 'string' || nameAndSurnameParts.length !== 2){
        console.log( "Invalid input parameters, should contain Name and Surname!")
    }
    else{
        const nameToUpper = nameAndSurnameParts[0].charAt(0).toUpperCase() + nameAndSurnameParts[0].slice(1).toLowerCase()
        const surnameToUpper = nameAndSurnameParts[1].charAt(0).toUpperCase() + nameAndSurnameParts[1].slice(1).toLowerCase()
        console.log(`${nameToUpper} ${surnameToUpper}`)
    }
}
fullName(input2)

// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

const input3 = userInput("Please enter text, min 10 max 20 chars: ")
function alternate(str) {
    if (str.length < 10 || str.length > 20) {
        return "Input must have a length between 10 and 20 characters.";
    }

    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}

console.log(alternate(input3));


// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!

const input4 = userInput("Please enter polindrome text: ")

function isPolindrome(str) {
    const oldStr = str;
    const reversedStr = oldStr.split('').reverse().join('');
    return oldStr === reversedStr;
}
console.log(isPolindrome(input4))


// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!

const input5 = userInput("Please enter a text: ")
const input6 = userInput("Please enter a character: ")

function countCharacterInString(str, char) {
    if (char.length !== 1) {
        return "The second parameter should be a single character.";
    }
    
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

console.log(countCharacterInString(input5, input6));