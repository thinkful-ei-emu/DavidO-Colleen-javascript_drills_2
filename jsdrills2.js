'use strict';

function jediName(firstName, lastName){
  let jediFirst = firstName.slice(0, 2);
  let jediLast = lastName.slice(0, 3);
  let jediWhole = jediLast+jediFirst;
  console.log(jediWhole);
  return jediWhole;
}

jediName('Beyonce', 'Knowles')