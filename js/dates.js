//STEP 1

// let userChoice = prompt("Please enter a month (as a number between 1 and 12) ");

// let month = parseInt(userChoice);

// let daysInMonth = [
//     31,
//     28,
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31
// ];

// let numberOfDays = daysInMonth[month - 1];

// console.log("Number of days in the month you chose: ", numberOfDays);



//STEP 2

// let userChoice = prompt("Please enter a date (YYYY-MM-DD)");

// let date = new Date(userChoice);

// let monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

// let monthIndex = date.getMonth();

// let monthName = monthNames[monthIndex];

// console.log("Your month name is " + monthName);



//STEP 3

// let userChoice = prompt("Please enter a date (YYYY-MM-DD)");

// let date = new Date(userChoice);

// let isItWeekend = date.getDay() === 0 || date.getDay() ===6;

// console.log("Is it the weekend? " + isItWeekend);



//STEP 4

// let currentDate = new Date();

// let yesterdaysDate = new Date();
// yesterdaysDate.setDate(currentDate.getDate() - 1);

// let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let yesterdaysDayOfWeek = daysOfTheWeek[yesterdaysDate.getDay()];

// console.log("Yesterday's day of the week was " + yesterdaysDayOfWeek);



//STEP 5

// let currentDate = new Date();

// let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];

// let firstletter = currentDayOfTheWeek.charAt(0);

// console.log("The first letter of today's day is " + firstletter);
