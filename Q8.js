//Q8. 8 Let’s say you are working for an event management company. As a web developer, you need to build a 
//countdown timer for an upcoming event. You need to build a function that calculates the number of days 
//between the current date and the event's start date.

function calculateRemaningDays(eventDate) {
    const currentDate = new Date();
    const eventDatetime = new Date(eventDate);

    const timeDiffrence =   eventDatetime - currentDate;
    const daysRemaning = Math.ceil(timeDiffrence / (1000 * 60 * 60 * 24));

    return daysRemaning;

}

const eventDate= "2024-08-17"
console.log(calculateRemaningDays(eventDate));