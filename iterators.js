//1- iterator one is foreach
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});



//2- .map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal => {
return animal[0]
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(numbers =>{
  return numbers / 100;
})
console.log(smallNumbers)



//filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];


// Call .filter() on favoriteWords below
console.log(longFavoriteWords)


//const startsWithS = animals.findIndex(animal => animal.startsWith('s'));

console.log(startsWithS); // Output: 5



//.some
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => word.length < 6));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length >5)


// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every(word => word.length > 5));

//revision to all methods
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
