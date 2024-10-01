'use strict'

// Functions
function firstFunction(){
    console.log("Hello!, I am the console result of the function");
    return("Hello!, I am the return value of the function");
}

firstFunction(); // A function can be call directly 
var result = firstFunction(); // A function can be called from a variable, the function will get the return operation
console.log(result); // The function variable will keep only the returned value

console.log("*************************************");


// Function parameters
function calculator(number1, number2){

    console.log("Sum: "+(number1+number2));
    console.log("Rest: "+(number1-number2));
    console.log("Multiplication: "+(number1*number2));
    console.log("Division: "+(number1/number2));
    console.log("*************************************");

}

calculator(12, 8);
calculator(98, 2);

for(var i = 1; i <=10; i++){
    console.log(i);
    calculator(i,8);
}