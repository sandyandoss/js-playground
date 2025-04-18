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
  // const robot = {
  //   energyLevel: 100,
  //   checkEnergy: function()  {
  //     console.log(`Energy is currently at ${this.energyLevel}%.`)
  //   }
  // }
  
  // robot.checkEnergy();


  // //to reassign a value
  // const robot = {
  //   _energyLevel: 100,
  //   recharge(){
  //     this._energyLevel += 30;
  //     console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  //   }
  // };
  // robot._energyLevel= 'high';
  // robot.recharge()
  





  //We use the get keyword followed by a function.
  /*
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using 
Preview: Docs Loading link description
this
. In fullName, we’re accessing both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property. */
  
  


//factory functions
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};


const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
};


// const robotFactory = (model, mobile) => {

//   return {
//     model: model,
//     mobile: mobile,
//     beep() {
//       console.log('Beep Boop');
//     }
//   };
// };

// const tinCan = robotFactory('P-500' , true)
// tinCan.beep()
const robot = {
  model: 'B-4',
  mobile: true,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    }
  }
};

// Destructured assignment:
const { functionality } = robot;

// Now you can use it like this:
functionality.beep();       // Output: Beep Boop
functionality.fireLaser();  // Output: Pew Pew
