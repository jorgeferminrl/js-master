'use strict'

// Multiplication table of the introduced number

var number = parseInt(prompt('Enter a number to display its multiplication table', 1));

document.write("<h1>Tabla del" + number + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(
        number + " x " + i + "= " + (i * number) + "<br/>");
}