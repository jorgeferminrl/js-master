'use strict'

// Functions

function showOnConsole(number1, number2) {
    console.log("Sum: " + (number1 + number2));
    console.log("Rest: " + (number1 - number2));
    console.log("Multiplication: " + (number1 * number2));
    console.log("Division: " + (number1 / number2));
    console.log("*************************************");
}

function showOnScreen(number1, number2) {
    document.write("Sum: " + (number1 + number2) + "<br/>");
    document.write("Rest: " + (number1 - number2) + "<br/>");
    document.write("Multiplication: " + (number1 * number2) + "<br/>");
    document.write("Division: " + (number1 / number2) + "<br/>");
    document.write("*************************************" + "<br/>");
}

function calculator(number1, number2, display = false) {

    if (display == false) {
        showOnConsole(number1, number2);
    } else {
        showOnScreen(number1, number2);
    }
}

calculator(12, 8);
calculator(98, 2);
calculator(4, 5, true);