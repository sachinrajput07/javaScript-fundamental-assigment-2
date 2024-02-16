// Q1. Imagine you are working for a social media company. You have a list of all the users. Your job is to create a 
// function that checks if a specific username is in that list. The function should take the username as input and 
// tell you whether it's present in the list of users or not.

 let userName= ["Sachin", "Deepak", "Siddhant", "Chirag", "Mithun"]


function IsUserpresent(Username) {
    if (userName.includes(Username) ){
        console.log(`Yes, ${Username} is a valid user`);
        return true
    }else{
        console.log(`No, ${Username} is not a valid user. `);
        return true
    }
}

IsUserpresent("Sachin");