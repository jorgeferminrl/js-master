'use strict'

// Operators
var number1 = 12;

var number2 = 7;

var operation = number1 + number2;

console.log("Operation result is: " + operation);

var operation = number1 - number2;

console.log("Operation result is: " + operation);

var operation = number1 / number2;

console.log("Operation result is: " + operation);

var operation = number1 * number2;

console.log("Operation result is: " + operation);

// Data types
var integerNumber = 44;
console.log(String(integerNumber)+7);
var textString = 'Hey... "Hello" there';
var isTrue = false;

var falseNumber = "33"; // This is a number in string type
console.log(falseNumber+7);
console.log(Number(falseNumber)+7);

falseNumber = "33.4"; // Let's assign a decimal
console.log(falseNumber);
console.log(parseInt(falseNumber)+7); // Converts a number to integer
console.log(parseFloat(falseNumber)+7); // Converts a number to float

console.log(typeof integerNumber);
console.log(typeof textString);
console.log(typeof isTrue);
console.log(typeof falseNumber);