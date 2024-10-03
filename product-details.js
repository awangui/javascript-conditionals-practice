const prompt = require('prompt-sync')();
let productName= prompt("Enter product name: ");
let price= Number(prompt("Enter product price: "));
let isAvailable= prompt("Enter product availability: (true/false) ").toLowerCase();
function availabilityCheck(productName, price, isAvailable){
    let message='';
  while (price<=0 || isNaN(price)){
      price= Number(prompt("Enter a valid price: "));   
  }
  //boolean check
    while(isAvailable !== "true" && isAvailable !== "false"){
        isAvailable= prompt("Enter a valid availability: (true/false) ").toLowerCase();
    }

    if(productName && price && isAvailable=="true"){
        message='available';
    }
    else if(productName && price && isAvailable=="false"){
        message='not available';
    }
    else{
        message='not available';
    }
    return `The ${productName} costs  $${price}. It is ${message}`;
}
console.log(availabilityCheck(productName, price, isAvailable));
