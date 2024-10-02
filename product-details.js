const prompt = require('prompt-sync')();
let productName= prompt("Enter product name: ");
let price= prompt("Enter product price: ");
let availability= prompt("Enter product availability: (true/false) ");
function availabilityCheck(productName, price, availability){
    let message='';
    if(productName && price && availability){
        message='available';
    }
    else{
        message='not available';
    }
    return `The ${productName} costs  $${price}. It is ${message}`;
}
console.log(availabilityCheck(productName, price, availability));
