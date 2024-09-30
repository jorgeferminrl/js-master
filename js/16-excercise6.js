'use strict'

// Program that tells us if a number is even or odd

var number = parseInt(prompt('Enter a number', 0));

while(isNaN(number)){
    number = parseInt(prompt('Enter a number', 0));
}

if(number%2==0){
    alert("Is an even number");    
}else{
    alert("Is an odd number");
}