'use strict'

// Show all divisor numbers of an introduced nunmber in a prompt

var number = parseInt(prompt("Enter a number", 0));

for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log("Divisor: " + i);
    }
}