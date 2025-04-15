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
