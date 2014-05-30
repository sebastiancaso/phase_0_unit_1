// This is a solo challenge

// Your mission description:
// The hero and his ally will need to jump over a pit to make it out of the dungeon.

// Pseudocode
// create an object and assign it name and jumping properties
// create an object and assing it name and jumping properties
// create a function to randomly choose the number 1 or 2
// create a function to calculate if both objects make it over the pit 



// Initial Code
var hero = {name: "Lance", jump 2,}
var ally = {name: "Julian", jump: 2,}
var pit = function() {return (Math.floor(Math.random() * 2)) + 1}

var leapAttempt = function() {
	if (hero.jump == pit() && ally.jump == pit()){console.log("you made it!")} 
	else {console.log("you died!")}
}

// Refactored Code
var hero = {
	name: "Lance",
	jump 2,
}
var ally = {
	name: "Julian",
	jump: 2,
}
var pit = function() {
	return (Math.floor(Math.random() * 2)) + 1
}

var leapAttempt = function() {
	if (hero.jump == pit() && ally.jump == pit()){
		console.log("you made it!")
	} 
	else {
		console.log("you died!")
	}
}





// Reflection
// I had problems imagining how to create a mission using JavaScript, mainly because my knowledge of JS is limited.  So, I decided to think of
// a simple game that I could make in Ruby.  This helped me to visualize what I would do as well as how I would do it.  The tedious part of 
// this is learning the conventions or differences to Ruby.  Using parentheses on the if statement took me awhile to figure out. I also assigned
// the object properties of hero and ally using an equal sign.  It took me about fifteen minutes to realize that I needed to use colons instead.
// I thought this was a fun exercise it certainly helped me to start to understand some of the conventions JS uses.
// 
// 
// 