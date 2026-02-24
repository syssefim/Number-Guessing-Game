const prompt = require('prompt-sync')();






function getDifficulty() {
    console.log("\nPlease select the difficulty level:")
    console.log("1. Easy (10 chances)")
    console.log("2. Medium (5 chances)")
    console.log("3. Hard (3 chances)\n")
    const difficultyLevel = prompt("Enter your choice: ");

    

    if (difficultyLevel == 1) {
        console.log("Great! You have selected the Easy difficulty level.");
        console.log("Let's start the game!");
        return 10;
    }
    else if (difficultyLevel == 2) {
        console.log("Great! You have selected the Medium difficulty level.");
        console.log("Let's start the game!");
        return 5;
    }
    else if (difficultyLevel == 3) {
        console.log("Great! You have selected the Hard difficulty level.");
        console.log("Let's start the game!");
        return 3;
    }
    else {
        console.log("Error selecting difficulty...")
        return getDifficulty(); //recursion
    }
}










console.log("Welcome to the Number Guessing Game!")
console.log("I'm thinking of a number between 1 and 100.")
console.log("You have 5 chances to guess the correct number.")





do {
    //get difficulty level from user
    let numTries = getDifficulty();

    //get random number
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber)


    //start timer
    const startingTime = Date.now()


    numAttempts = 0;

    for (let i = 0; i < numTries; i++) {
        let guess = prompt("Enter your guess: ");

        numAttempts++;

        if (guess == randomNumber) {
            //end timer
            const elapsedTime = Math.floor((Date.now() - startingTime) / 1000);


            console.log(`Congratulations! You guessed the correct number in ${numAttempts} attempts and ${elapsedTime} seconds.`);
            break;
        }
        else if (guess != randomNumber && numTries - numAttempts != 0) {
            if (guess > randomNumber) {
                console.log(`Incorrect! The number is less than ${guess}.`)
            }
            else if (guess < randomNumber) {
                console.log(`Incorrect! The number is greater than ${guess}.`)
            }
        }
        else if (guess != randomNumber && numTries - numAttempts == 0) {
            console.log(`Game over! You've used all your chances. The correct number was ${randomNumber}.`)
        }
    }

    choice = prompt("Play again? (y/n): ");
} while (choice == "y")