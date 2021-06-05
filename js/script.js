var firstNumber = 34;
var secondNumber = 89;

var age = 11;
var minimumAge = "13";

var income = 11.050;
var maximumIncome = 13.075;

var studentAge = 16;
var schoolType;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

if (age >= minimumAge) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

if (income <= maximumIncome) {
    console.log("Income level ok");
} else {
    console.log("Income too high");
}


if (studentAge === 6) {
    schoolType = "Barneskole";
} else if (studentAge === 7) {
    schoolType = "Barneskole";
} else if (studentAge === 8) {
    schoolType = "Barneskole";
} else if (studentAge === 9) {
    schoolType = "Barneskole";
} else if (studentAge === 10) {
    schoolType = "Barneskole";
} else if (studentAge === 11) {
    schoolType = "Barneskole";
} else if (studentAge === 12) {
    schoolType = "Barneskole";
} else if (studentAge === 13) {
    schoolType = "Barneskole";
} else if (studentAge === 14) {
    schoolType = "Ungdomsskole";
} else if (studentAge === 15) {
    schoolType = "Ungdomsskole";
} else if (studentAge === 16) {
    schoolType = "Ungdomsskole";
} else if (studentAge === 17) {
    schoolType = "Videregående skole";
} else if (studentAge === 18) {
    schoolType = "Videregående skole";
} else if (studentAge === 19) {
    schoolType = "Videregående skole";
} else {
    schoolType = "Invalid age"
}


console.log(schoolType);


var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
}


var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

var selectedNumber = 11;
var winningNumber = 15;

if (selectedNumber !== winningNumber) {
    console.log("You lose again");
}


var dayOfTheWeek = 12;

switch(dayOfTheWeek) {
    case 1:
        dayOfTheWeek = "Monday";
        break;
    case 2:
        dayOfTheWeek = "Tuesday";
        break;
    case 3:
        dayOfTheWeek = "Wednesday";
        break;
    case 4:
        dayOfTheWeek = "Thursday";
        break;
    case 5:
        dayOfTheWeek = "Friday";
        break;
    case 6:
        dayOfTheWeek = "Saturday";
        break;
    case 7:
        dayOfTheWeek = "Sunday";
        break;
    default:
        dayOfTheWeek = "Invalid day";
        break;
}

console.log(dayOfTheWeek);




for(var i = 10; i <= 20; i++) {
    if (i % 2 !==0) {
        console.log(i);
    }
}

// MA-1 -------------------------------------------------------------------------------------------------------------------------

1.

var age = 30;
var old = false;
var firstName = "Victor";

2.

var firstName = "Victor";
var lastName = "Norman";

var fullName = firstName + lastName;
console.log(fullName)

3.

var type = typeof("frog")

console.log("The type of frog is " + type)

4.

var orderHasShipped = true;

if (orderHasShipped = true) {
    console.log("The order has shipped")
} else {
    console.log("The order did not ship")
}

5.

for(var i = 7; i <= 13; i++){
    console.log(i)
}