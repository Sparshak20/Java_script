/**
 * Date Methods(get and set)
 */


/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds);
// //it takes 7 arguments
// new Date(milliseconds);
// //we cant avoid month section
// new Date(date string);


// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currdate= new Date();
// console.log(currdate)
// console.log(currdate.toLocaleString())  // area local time and date
// console.log(currdate.toString())


// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d=new Date(2018,11,24,10,33,30,0);
// console.log(d.toLocaleString());


// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string


// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());


// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:


// var d = new Date(0);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());

//👉 Dates Method

// const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // how to set the indivisual date 

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
let setmonth = curDate.setMonth(10); // 0-11 jan to dec
console.log(setmonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());

