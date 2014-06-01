// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Alan Cohen
//  2.Sebastian Caso 


// 0. "YOU SIGNED... WHO?!"
var adamSandler = {
name: "Adam Sandler",
age: 45,
quote: "Who calls their shit poo!?",
};

var idrisElba = {
name: "Idris Elba",
age: 40,
quote: "I'm Idris Elba",
};





// 1. "Here they Come!"
var clientList = [idrisElba, adamSandler];

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}
var happyGilmore = new Client("Happy Gilmore", 42, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

clientList.push(happyGilmore, kristenBell, jimCarrey);
// console.log(clientList);

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

clientList.push(shooterMcGavin);



// 3. "SHOW 'EM OFF!"

for (var i=0; i<clientList.length; i++) {
  console.log("Name: " + clientList[i].name + " \n" +
            "Age: " + clientList[i].age + " \n" +
            "Quote: " + clientList[i].quote + "\n");
}


clientList.forEach(function(entry) {
    console.log("Name: " + entry.name + " \n" +
                "Age: " + entry.age + " \n" +
                "Quote: " + entry.quote + "\n");
});





// 4. "But wait, there's more!"

adamSandler.showQuote = function(){
  console.log(this.quote);
}

adamSandler.showQuote();


// 5.  ** BONUS **


//  6.  Your Reflection:
This pairing session went very well.  I learned about the forEach method in JS which will be helpful in the future.  The assignment seemed daunting at first but as Alan and I talked it out it became more clear what needed to be done.    
I feel good about my ability to create objects in JS, I need to practice more manipulating the object in various ways.











