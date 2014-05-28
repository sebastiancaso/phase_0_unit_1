// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 // Rescue Mission
 // move down x 2
 // move right x 1
 // move up x 2
 // move right  2 
 // move down x 1 
 // attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy(); 

// Grab the Mushroom
// move up x 1
// move right x 1
// move left
// move up 
// attack
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

 
 // Drink move
 // move right
 // attack
 // move right
 // move down
 // move down
 // move up
 // move right
 // attack
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// Taunt the Guards
// move right
// yell at guard 
// move left x 2
// get Phoebe to attack
// move right
// get Phoebe to follow me
// move right x 2
// move up 
// move right
// yell at guards 
// move down 
// move right 
// move up 
// move right 
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap
// move down x 2 
// yell at ogre
// move up x 2 
// tell teammates to attack
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();
this.say("attack!");

// Taunt
//yell at ogre x 3
this.say("Your mother was a hampster!");
this.say("and your father smelt of elderberries!");
this.say("yeah, I'm talking to you!")

// Cowardly Taunt
// move to central spot
// insult their knitting ability
// run to arrow towers
this.moveXY(51, 26);
this.say("you knit very poorly!"
this.moveXY(70, 10);

// Break the Prison
// verify friend or foe x 7
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!

if (name === "Lucas")
return true;
if (name === "Brack")
return false;

if (name === "Robert")
return true; 

if (name === "Grul'Thock")
return false;

if (name === "Gordon")
return true;

// Commanding Followers
// move to your soldiers location
// get them to follow you
// position yourself close to ogres
// order troops to charge
this.moveXY(75, 63);
this.say("follow me!");
this.moveXY(66, 43);
this.say("attack!");

// Mobile Artillery 
// move cannon in range 
// shoot cannon
// move cannon in range
// shoot cannon x 4
this.moveXY(30, 26);  
this.attackXY(46, 5);  
this.moveXY(45, 39);
this.attackXY(50, 66);
this.attackXY(47, 57);
this.attackXY(68, 56);
this.attackXY(61, 47);
// Reflection:
// 1) This is referring to the object that has been created.  In the case of Code Combat the object is Tharin or one of his allies.
// 2) I believe (parentheses) holds a parameter for a method in JavaScript.
// 3) It appears this is a more contentious issue than one would think.  JavaScript can still be used without semicolons however debugging code apparently is more difficult without semicolons.  It also is easier for someone to read your coed and understand what you were trying to accomplish.
// This was a very interesting and fun exercise.  Whoever came up with the idea to create a game to learn to code is a genius.  It did a great job of introducing me to JavaScript.  Most of the issues that arose in the game were answered within the game.  I was kept forgetting to put semicolons which brought up a yield sign.  Also, the capilization of the first letter of any word after the first following a period was odd and caused some issues for me.  I thought this challenge was fun and informative, I certainly imagine that the game can become much more in depth as it continues.  This will most liekly be a great resource for me going forward.