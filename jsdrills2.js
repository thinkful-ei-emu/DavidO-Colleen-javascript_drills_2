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




function playRound(playerTurn) {
  try {
    if (playerTurn === '') throw new Error('empty');
    if (isNaN(playerTurn)) throw new Error('not a number');
    if (playerTurn < 1) throw new Error('too low');
    if (playerTurn >3) throw new Error ('too high');
  }
  catch(e){
    console.log(e.message);
    return e.message;
  }
 
  let computerTurn = Math.floor(Math.random() * 3) + 1;
  console.log(computerTurn);
  
  if (computerTurn === playerTurn){
    console.log('tie');   
    return 'It\'s a tie';
  }
  else if (computerTurn === 1) {
    if (playerTurn === 3){
      console.log('loser');
      return "You lose, rock beats scissors";
    } else {
      console.log ('winner');
      return "You win, paper beats rock";
    }
  }
  else if (computerTurn === 2){
    if (playerTurn === 1){
      console.log ('loser');
      return "You lose, paper beats rock";
    } else {
      console.log ('winner');
      return "You win, scissors beats paper";
    }
  }
  else {
    if (playerTurn === 1){
      console.log ('winner');
      return "You win, rock beats scissors";
    } else {
      console.log ('loser');
      return "You lose, scissors beats paper";
    }
  }
}

playRound(2);