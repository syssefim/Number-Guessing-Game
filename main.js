const prompt = require('prompt-sync')();

console.log("Welcome to the Number Guessing Game!")
console.log("I'm thinking of a number between 1 and 100.")
console.log("You have 5 chances to guess the correct number.\n")
console.log("Please select the difficulty level:")
console.log("1. Easy (10 chances)")
console.log("2. Medium (5 chances)")
console.log("3. Hard (3 chances)\n")
const difficultyLevel = prompt("Enter your choice: ");

if (difficultyLevel == 1) {
    console.log("Great! You have selected the Easy difficulty level.");
}
else if (difficultyLevel == 2) {
    console.log("Great! You have selected the Medium difficulty level.");
}
else if (difficultyLevel == 3) {
    console.log("Great! You have selected the Hard difficulty level.");
}
else {
    console.log("Error selecting difficulty...")
}
console.log("Let's start the game!");


//get random number
randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);