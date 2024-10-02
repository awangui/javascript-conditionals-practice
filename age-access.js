//function that restricts access to a website based on age
function access(age){
    if (age >= 18 && age <= 65){
        return "Access granted";
    }else if (age < 18 && age > 0){
        return "Access denied. You are too young.";
    }else if (age > 65){
        return "Access denied. You are too old.";
    }else {
        return "Invalid age";
    }
}