//Function Declarations
function getReminder(){
    console.log('Water the plants')
  }
  function greetInSpanish(){
    console.log('Buenas tardes')
  }



  //to call a function
  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  sayThanks()




  //functions with tasks
  //parameter in function plus adding it in console.log
  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.'
  );
  }
  sayThanks('Cole');
  
  //default parameters
  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  

  //helper functions
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  const totalCost=costOfMonitors(5,4)
  console.log(totalCost)
  
//arrow functions
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };
  
 /* //Concise Body Arrow Functions
  const squareNum = (num) => { return num * num; };
//becomes:
const squareNum = num => num * num; */
