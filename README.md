# Number Guessing Game

A simple command-line game where the computer randomly selects a number and the user has a limited number of chances to guess it. 

This project is based on the [Number Guessing Game from roadmap.sh](https://roadmap.sh/projects/number-guessing-game).

## 🚀 Features

* Randomly generates a target number for the user to guess.
* Offers three difficulty levels to dictate the number of chances: Easy (10), Medium (5), and Hard (3).
* Provides interactive feedback, telling the user if the target number is greater or less than their guess.
* Tracks the number of attempts and calculates the total time elapsed in seconds upon a winning guess.
* Includes a prompt to easily replay the game after a round finishes.

## 📋 Prerequisites

To run this project, you need to have [Node.js](https://nodejs.org/) installed on your machine. The project also relies on a couple of external packages for the CLI styling and input.

## ⚙️ Installation

### 1. Clone the Repository
    git clone https://github.com/syssefim/Number-Guessing-Game
    cd Number-Guessing-Game
### 2. Install Dependencies
    npm install prompt-sync chalk
### 3. Run the Application
In your terminal, run:

    node main.js
