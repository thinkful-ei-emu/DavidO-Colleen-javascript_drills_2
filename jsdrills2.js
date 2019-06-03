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