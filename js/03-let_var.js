'use strict'

// var - Global variables
var number = 40;

console.log(number); // Value 40

if(true){
    var number = 50;
    console.log(number); // Value 50
}

console.log(number); // Value 50

// let - local variables
var text = "JS Learning Journey"; // Global value
console.log(text);

if(true){
    let text = "HTML and CSS Learning Journey"; // Local var will display value locally, only in this block
    console.log(text); 
}
console.log(text); // Stills displaying global value