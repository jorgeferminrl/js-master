'use strict'

// Functions
function firstFunction(){
    console.log("Hello!, I am the console result of the function");
    return("Hello!, I am the return value of the function");
}

firstFunction(); // A function can be call directly 
var result = firstFunction(); // A function can be called from a variable, the function will get the return operation
console.log(result); // The function variable will keep only the returned value