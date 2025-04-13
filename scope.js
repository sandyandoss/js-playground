//A block is the code found inside a set of curly braces {}
//const variable declaring
const city = 'New York City'
//function
function logCitySkyline(){
    //let variable
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city
  console.log(logCitySkyline())
};

/*Scope is the context in which our variables are declared. We think about scope
 in relation to blocks because variables can exist either outside of or within these blocks..*/

 //we declare 3 global  variables
 var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

}
console.log(callMyNightSky())





//global scope
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight'
    // this works because it's within the same block
    console.log(lightWaves)
  }
  logVisibleLightWaves()
  
  //error because lightwaves is in the block to its a block scope
  console.log(lightWaves)