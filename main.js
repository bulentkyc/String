"use strict"

console.log('Hello World!');

let name = 'Bulent';

//name = 'Bulent Kayici';

//name = name + ' Kayici';

name += ' Kayici'; 
/* 
    /// INFO ///
    += makes variable = variable + something.
    Exactly same as line 7
*/
console.log(name);

/* let letterCount = name.length;

console.log(
    'Hey ' + 
    name + 
    '! Your name has ' + 
    letterCount + 
    ' letters'
);
 */

/*
On top we created one more variable
just to contain letter count.
But it's not required.
Directly we can use name.length in console.log
*/
console.log(
    'Hey ' + 
    name + 
    '! Your name has ' + 
    name.length + 
    ' letters'
);


/*
    Next 2 built-in methods are for input and output
    via browser window
*/

let userName = prompt('What is your name?');

console.log('Hello ' + userName);

alert('Hello ' + userName);

/*
    ///Heads-Up///
    toUpperCase, toLowerCase : 
    mostly we use these 2 functions
    to prevent case sensitivity
*/

let upperCaseUserName = userName.toUpperCase();

console.log(upperCaseUserName);
console.log('!!!' + userName);

/*

*/

userName = userName.toLowerCase();

console.log(userName);

console.log('Trimmed user name is: ' + userName.trim());

/*
string.replace(searched keyword, replacement value)
string.replaceALL(searched keyword, replacement value)

replace changes just once and then stops.
replaceAll changes all matched
*/

console.log('no space: ' + userName.replaceAll(' ', ''));

let textForReplace = 'gamers are playing a game';

console.log(textForReplace.replaceAll('game', 'fun'));

//textForReplace = textForReplace.replaceAll('game', 'fun');

/*
If don't do like previous line, textForReplace variable would
show the previous value
*/

console.log(textForReplace);

/*
substring takes a part of the text and works with 2 parameters.
1. start: first letter's index number.
2. end: end + 1 letter's index number. This one will be excluded.

PS: indexes start from
*/

console.log(userName.substring(2,5));

/*
\' => '
\" => ""
\n => Enter( Go to next line)
*/
console.log('I\'m \na developer');


/*
///Heads-Up///
*/

console.log(
`I'm 
a developer!`
);

console.log(
`Hey ${userName}!
Welcome on board!`
);

console.log('----------------------');