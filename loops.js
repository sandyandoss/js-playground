// imaging if we have 100 places  we cannot log each one alone
var vacationSpots = ['Dolomites', 'Switzerland' , 'Thailand']
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])

//instead, we do for loop:
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  }

  //inverse loop
  // The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
  for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
  }


 //
 // nested loops
let bobsFollowers = ['sandy', 'jake','leonardo','kaila']
let tinasFollowers = ['sandy', 'jake','lea']
let mutualFollowers = []

for (let i = 0; i<bobsFollowers.length; i++){
  for (let j=0; j<tinasFollowers.length;  j++){
    if(bobsFollowers[i]=== tinasFollowers[j]){
mutualFollowers.push(bobsFollowers[i])
    }
  }
}


//do while
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do{
  cupsAdded +=1
  console.log(cupsAdded)
}
while(cupsAdded<cupsOfSugarNeeded)



//while
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard)
}
//functions as data 
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with.
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo() 
  //Hmmm, if we forgot the original name of our function. Is there a way we could figure it out?
  console.log(isTwoPlusTwo.name)
  
  








