const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(0,3);
newStr = str.slice(3) + newStr;



//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The pseudo Pig Latin for ${str} is ${str.slice(0,3)}`);



//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

str = input.question("What word would you like to change?\n");
let lettersMoved = input.question("How many letters should we move?\n");



//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (lettersMoved < str.length){
    console.log(str.slice(lettersMoved) +str.slice(0,lettersMoved));
}else{
    console.log(str.slice(3) + str.slice(0,3));
}