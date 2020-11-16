let fName, lName, age, question;

console.log('Hello World!');

fName = prompt('Hey Alien! Who are you?');

lName = prompt(`${fName}! What's your last name?`);

alert(
`${fName} ${lName}!
I registered you :)`
);

age = prompt(
`Hey I wanna learn more about you!
Let's say, how old are you?`
).trim();

//age = age.trim();

alert (`Wow we are same age :) I'm ${age} too`);

alert (`I wanna you to guess my name. The first letter is ${fName.substring(0,1).toUpperCase()}`);

alert (`Second letter is ${fName.substring(1,2).toUpperCase()}`);

alert (`and third one ${fName.substring(2,3).toUpperCase()}`);

confirm (`
My name is too ${fName} :)
Do you believe!`);

question = prompt('Would you like to ask something about me?');

alert(
`Sorry I have no answer for 
${question}`
);