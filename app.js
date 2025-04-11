// kelvin temperature
const kelvin = 293;
// convert kelvin to celsius
const celsius = kelvin - 273;
// calculate fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// using floor to round the answer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);



//human age in dogs age converter

//my age
var myAge = 22;
//could be changed
let earlyYears = 2;
earlyYears *= 10.5;
//set laterYears to myAge -2
let laterYears = myAge - 2;
/*
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.*/
laterYears *=4;
console.log(earlyYears);
console.log(laterYears);
//myAgeInDogYears is summing laterYears to earlyYears
var myAgeInDogYears = laterYears + earlyYears
//lowercase my name
let myName = 'SAndy'
myName = myName.toLowerCase();

//print out all
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`)



//quiz:
/*
1. What is String concentration:
const firstName = "Ada";
const lastName = "Lovelace";
const fullName = firstName + " " + lastName;

console.log(fullName); // "Ada Lovelace"

*/

/* What is string interpolation?
const name = "Alice";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);

*/
 //if and else
 let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.');
}


//ternary statemenst instead of if else
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' 
  ? console.log('I love that!') 
  : console.log("I don't love that!");

