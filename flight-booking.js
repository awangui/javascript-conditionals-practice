function eligibility(age,hasPassport,isFlightAvailable){
    if(age>=18 &&  age <=70 && hasPassport && isFlightAvailable){
        return "Booking successful";
    }
    else{
        return "Booking failed";
    }
}
console.log(eligibility(20,true,true));//Booking successful
console.log(eligibility(20,false,true));//Booking failed
console.log(eligibility(20,true,false));//Booking failed
console.log(eligibility(20,false,false));//Booking failed