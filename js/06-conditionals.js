'use strict'

var age1 = 10;
var age2 = 12;

// Conditional IF
if (age1 > age2) {
    console.log("Age one is greather than age 2");
} else {
    console.log("Age one is less than age two");
}

var age = 70;
var name = 'Jorge Ramirez';

/*
Relational operators
    >  Grether than
    <  Less than
    >= Greather equal to
    <= Less equal to
    == Equal to
    != Not equal to
*/

if (age >= 18) {
    console.log(name + " is " + age + " years old, is of legal age");
    if (age == 33) {
        console.log('You still being millenial');
    } else if (age >= 70) {
        console.log('You are old');
    } else {
        console.log('You are not millenial');
    }
} else {
    console.log(name + " is " + age + " years old, is not of legal age");
}

/* Logical operators
    && : AND
    || : OR
    !  : Negation
*/
var year = 2018;

// Negation
if (year != 2016) {
    console.log("Year is not 2016, actually is " + year);
}

// AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("This is current era");
} else {
    console.log("We are in post-modern era ");
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("Year ends with 8");
}else{
    console.log("Not registered year");
}