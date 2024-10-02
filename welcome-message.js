//function that takes two parameters (first name and last name) and returns a welcome message
const prompt = require('prompt-sync')();
let fname= prompt("please enter your first name: ");
let lname= prompt("please enter your last name: ");
//function to welcome user
function welcomeMessage(fname, lname){
    let fullName= fname + " " + lname;
    return `Hello, ${fullName}! Welcome to our website`;
}
console.log(welcomeMessage(fname, lname));