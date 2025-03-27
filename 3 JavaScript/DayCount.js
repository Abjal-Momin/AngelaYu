// let fromTime = new Date("10-13-2022");
// let toTime = new Date();
// let timeSec = (toTime-fromTime)/1000;
// let day = timeSec/86400;
// console.log(`Total days are ${Math.floor(day)}`);
// // To compare time difference in seconds

// let year = day/365;
// console.log(`${Math.floor(year)} Years`);
// // year 

// let months = (day%365);
// console.log(`${Math.floor(months/30.437)} Months`);
// // After getting years, remainging days to months

// let days = months%30.437;
// console.log(`${Math.floor(days)} Days`);
// // ---



let startDate = new Date("10-13-2022");
let endDate = new Date();
let difference = (endDate-startDate)/1000;
// To compare the time difference in seconds

let day = difference/86400; // Seconds in a Day
// Seconds to days
console.log(`Total number of days is ${Math.floor(day)} Days.`);

let year = day/365; //to get year

let months = (day%365);
// After getting years, Remainging days to months

let weeks = (months%30.437); // 30.437 is avarage days in month
//After getting months, Remaining days to weeks

let days = weeks%7; 
//After getting weeks, Remaining days to days

console.log(`${Math.floor(year)} Years, ${Math.floor(months/30.437)} Months(${Math.floor(weeks)} days), ${Math.floor(weeks/7)} Weeks, ${Math.floor(days)} Days.`);

// Done 