let spaceship = {}; // spaceship is an empty object

//spaceships with keys and values
// Write your fasterShip object literal below
let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
  }

//accessing properties
/*
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  const crewCount = spaceship.numCrew;
  const planetArray = spaceship.flightPath; */
  
//advanced objects
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};

//this keyword
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
   return `I am ${this.model} and my current energy level is ${this.energyLevel}.  
`
  }
};
console.log(robot.provideInfo());
//or we remove the word function and add =>
  const robot = {
    energyLevel: 100,
    checkEnergy: function()  {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();