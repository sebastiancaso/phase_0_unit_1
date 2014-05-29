
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.
//pseudocode
// create an object named adam 
// add a proprty of name and assign name to "Adam"
// create a new property called spouse to terah and assign adam to it
// edit weight property of terah
// delete the property of eyeColor from terah
// create a new property for adam called spouse and assign its value to terah
// create a new property fo terah called children assign an empty object to it
// create new objects assigned a name variable and names to terahs children property
// assign terahs children as adams as well

var adam = {
  name: "Adam"
}

terah.spouse = adam
terah.weight = 125
adam.spouse = terah
terah.children = {}
 delete terah.eyeColor
 terah.children.carson = {name: "Carson"}
 terah.children.carter = {name: "Carter"}
 terah.children.colton = {name: "Colton"}
 adam.children = terah.children


// __________________________________________
// Reflection: Use the reflection guidelines
// I was glad to see that JavaSCript shares many of the same concepts as Ruby.  It made using the language much less difficult to begin with.
// Obviously there was some difficulty with the difference in syntax, however the overall concept seems to be very similar.  I learned how to create 
// an object in JavaScript as well as to edit the objects characteristics.  I had problems with figuring out how to run the tests at first.
// That was my main difficulty for this unit.  For some reason I did not understand what was meant by the console on your browser, I also had no idea what 
// node.js was.  The challenge was fun, it's amazing how much satisfaction you can get from seeing something change from false to true.  I had problems with the 
// last bit of the challange, creating the kids.  I understood what was being asked it was just a question of figuring out how to set it all up.
// 
 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)