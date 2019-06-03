'use strict';

function jediName(firstName, lastName){
  let jediFirst = firstName.slice(0, 2);
  let jediLast = lastName.slice(0, 3);
  let jediWhole = jediLast+jediFirst;
  console.log(jediWhole);
  return jediWhole;
}

jediName('Beyonce', 'Knowles');

function beyond(num){
  if (isFinite(num) !== true) {
    console.log('and beyond');
  }
  if (isFinite(num) === true && num >= 0){
    console.log('to infinity');
  }
  if (isFinite(num) === true && num <= 0){
    console.log('to negative infinity');
  }
  if (num === 0){
    console.log('staying home');
  }

}

beyond(Infinity);



//this function creates a random value from the computer
function computerPlay(){
  let words = ['rock', 'paper', 'scissors'];
  let number = Math.floor(Math.random() * words.length);
  let computerSelection = words[number];
  return computerSelection;
}
// this function gets the player input
function playerPlay(){
  let playerInput = prompt("Rock, paper, scissors, shoot!");
  let playerSelection = playerInput.toLowerCase();
  if (playerSelection == null){
    return 'Try Again'
  } else {
    return playerSelection;
  }
}

// this plays one round of the game 
function playRound(playerTurn, computerTurn) {
  if (computerTurn === playerTurn){
    console.log('tie');   
    return "It's a tie";
  }
  else if (computerTurn === 'rock') {
    if (playerTurn === 'scissors'){
      console.log('loseerrrr');
      return "You lose, rock beats scissors";
    } else {
      console.log ('winnnerrr');
      return "You win, paper beats rock";
    }
  }
  else if (computerTurn === 'paper'){
    if (playerTurn === 'rock'){
      console.log ('looosserr');
      return "You lose, paper beats rock";
    } else {
      console.log ('winnnneerrr');
      return "You win, scissors beats paper";
    }
  }
  else {
    if (playerTurn === 'rock'){
      console.log ('winnnnerrr');
      return "You win, rock beats scissors";
    } else {
      console.log ('loooserrr');
      return "You lose, scissors beats paper";
    }
  }
}