function jobEligilibity(age, yearsExperience, knowsJavaScript){
    let eligibleAge =age>25 && age<50;
    let eligibleYearsExperience= yearsExperience >5 || (age<30 && yearsExperience>=3);

    if (eligibleAge && eligibleYearsExperience && knowsJavaScript){
        return "Eligible for the job" 
    }
        else{
            return "Not eligible"
        }
    }

console.log(jobEligilibity(25, 7, false)); //doesn't know JavaScript
console.log(jobEligilibity(30, 2, true)); //doesn't have enough experience
console.log(jobEligilibity(30, 7, true)); //eligible 
console.log(jobEligilibity(50, 7, true)); //too old
console.log(jobEligilibity(20, 7, false)); //too young
console.log(jobEligilibity(16, 4, true)); //too young
