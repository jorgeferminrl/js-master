'use strict'

// Program that requests for 2 numbers and tell us which number is greather, which number is less and what numbers are equal
// PLUS: If  introduced values are not a number or are numbers smaller or equal to 0, it should request for a new value again
var number1 = parseInt(prompt('Enter first number', 0));
var number2 = parseInt(prompt('Enter second number', 0));

console.log(number1, number2);


while(number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)){
    number1 = parseInt(prompt('Enter first number', 0));
     number2 = parseInt(prompt('Enter second number', 0));    
}

if (number1 == number2) {
    alert("Both numbers are equal");
}
else if(number1 > number2) {
    alert('Greather number is: ' + number1);
    alert('Smallest number is: ' + number2);
}
else if(number1 < number2){
  alert("Greather number is: " + number2);
  alert('Smallest number is: ' + number1);
}else {
    alert("Enter correct numbers");
}