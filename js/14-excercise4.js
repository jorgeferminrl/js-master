'use strict'

// Show all odd numbers between two numbers introduced by user
1
var number1 = parseInt(prompt("Enter first number", 0));
var number2 = parseInt(prompt("Enter second number", 0));

while (number1 < number2) {
    
    if (number1%2 != 0) {
        console.log("Number " + number1 + " is an odd number");
    }
    number1++;
}