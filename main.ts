#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a random number.
// 2) User's input for guessing number.
// 3) Compare both numbers and show result.

const randomNumber = Math.floor(Math.random()*4+ 1);
// console.log(randomNumber);

console.log(" Hello, Welcome to the number guessing game!")


const answer = await inquirer.prompt ([{
    message:"Please guess a number between 1-5" , type:"number" , name:"UserGuessedNumber"
}]) ;
if(answer.UserGuessedNumber === randomNumber){
    console.log("Great! you guessed right number.")
}
else{
    console.log("You guessed wrong number.")
}
