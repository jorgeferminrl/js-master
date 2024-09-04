'use strict'

var year = 2018;

while (year <= 2051) {

    console.log("Year is " + year);

    year++;

}

while (year != 1991) {

    console.log("Year is " + year);

    if(year==2000){
        break;
    }

    year--;

}

// Do while

var years = 30;

do {

    alert("This number is different than 20");
    years--;
} while (years > 25)