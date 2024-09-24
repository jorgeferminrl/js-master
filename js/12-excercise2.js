'use strict'




// Using a loop, display the sum and average of the numbers entered until a negative number is entered and then display the result.

var sum = 0;
var count = 0;

do {
    var number = parseInt(prompt("Enter numbers until a negative number is entered", 0));

    if (isNaN(number)) {
        number = 0;

    } else if (number >= 0) {
        sum = sum + number;
        // suma += number;

        count++;
    }

    console.log(suma);
    console.log(count);

} while (number >= 0)

alert("The sum of all numbers is: " + sum);
alert("The average of all numbers is: " + (sum / count));