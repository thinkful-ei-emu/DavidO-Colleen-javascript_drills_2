
function createGreeting(name, age){
    let yearOfBirth = (2019 - age);
    return `Hi, my name is ${name} and I am ${age} years old. I was 
    born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);