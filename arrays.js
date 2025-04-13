const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])

//update elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] ='avocados';

//you cant update an element in a const variable



//to add we use  push
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];



//too delete, declare a variable at first then log the first variable
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
const removed = chores.pop();
console.log(chores)

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// shift removes the first item ('orange juice')
groceryList.shift();
console.log(groceryList); 
// Output: ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

// unshift adds 'popcorn' to the beginning
groceryList.unshift('popcorn');
console.log(groceryList); 
// Output: ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

// slice to get 'bananas', 'coffee beans', 'brown rice' — all in one line
console.log(groceryList.slice(1, 4));
// Output: ['bananas', 'coffee beans', 'brown rice']



//nested arrays
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]



