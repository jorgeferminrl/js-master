'use strict'

// This program shows all numbers between two numbers introduced by the user

var number1 = parseInt(prompt("Enter fisrt number", 0));
var number2 = parseInt(prompt("Enter second number", 0));


document.write("<h1> From "+number1+" to "+number2+" exist the following numbers:</h1>")
for (var i = number1; i <= number2; i++) {
    document.write(i+"</br>");
}