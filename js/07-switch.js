'use strict'

var age = 80;

switch (age) {
    case 18:
        print = "You are legal of age";
        break;
    case 25:
        print = "You are an adult";
        break;
    case 40:
        print = "You are 40";
        break;
    case 75:
        print = "You are an old person";
        break;
    default:
        print = "Your age is neutral";
        break;
}

console.log(print);