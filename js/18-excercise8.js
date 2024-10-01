'use strict'

// Calculator

var number1 = parseInt(prompt("Introduce the first number",0));
var number2 = parseInt(prompt("Introduce the second number",0));

while(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)){
     number1 = parseInt(prompt("Introduce the first number",0));
     number2 = parseInt(prompt("Introduce the second number",0));
}

var result = "Sum result is: "+(number1+number2)+" <br/>"+
             "Rest result is: "+(number1-number2)+" <br/>"+
             "Multiplication result is: "+(number1*number2)+" <br/>"+
             "Division result is: "+(number1/number2);

             var resultCMD = "Sum result is: "+(number1+number2)+" \n"+
             "Rest result is: "+(number1-number2)+" \n"+
             "Multiplication result is: "+(number1*number2)+" \n"+
             "Division result is: "+(number1/number2);

document.write(result);
alert(resultCMD);
console.log(resultCMD);