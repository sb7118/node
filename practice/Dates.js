const log = console.log;
// JavaScript stores dates as number of milliseconds since January 01, 1970.
/*
let x = new Date();
console.log(x);
let y = new Date("2023-12-14");
log(y.toDateString());
let d = new Date("December 14, 2023 2:20:01");
log(d.toString());
let a = new Date(2023,11,14,2,22,23); //JS counts similar with Array indexing, 0,1,2,.....11 months
log(a.toString());
let b= new Date(99,10,20); log(b.toString()); //one or two digits number in year will result in 19xx .
let c = new Date(1700000000000); log(c); //1700000000000 milliseconds since Jan 01 , 1970.
*/
//Dates Get Methods.
let d = new Date();
log(d.getFullYear()); //Returns the Full year 
log(d.getMonth()); //Returns the Month from 0-11 (12 months)
log(d.getDate()); //Returns the date
log(d.getDay()); //Returns the Week days
log(d.getHours()); //Returns the Hours
log(d.getMinutes()); //Returns the Minutes
log(d.getSeconds()); //Returns the Seconds
log(d.getMilliseconds());//Returns the milliseconds
log(d.getTime());//Returns the milliseconds that has passed since 1st JAN 1970;
//Coordinated Universal Time
log(d.getUTCFullYear()); //Returns the Full year 
log(d.getUTCMonth()); //Returns the Month from 0-11 (12 months)
log(d.getUTCDate()); //Returns the date
log(d.getUTCDay()); //Returns the Week days
log(d.getUTCHours()); //Returns the Hours
log(d.getUTCMinutes()); //Returns the Minutes
log(d.getUTCSeconds()); //Returns the Seconds
log(d.getUTCMilliseconds());//Returns the milliseconds

//Dates Set Methods
let f = new Date();
f.setFullYear(2005); log(f.toDateString()); //Returns the specified FullYear
f.setMonth(09); log(f.toDateString());//Returns the specified Month
f.setDate(04); log(f.toDateString()); //Returns the specified Date
f.setHours(3); log(f.toDateString());//Returns the sepcified Hours 
f.setMinutes(30); log(f.toDateString());//Returns the sepcified Minutes
f.setSeconds(59); log(f.toDateString())//Returns the specified Seconds
f.setMilliseconds(999); log(f.toDateString())//Returns the specified MilliSeconds
//UTC
f.setUTCFullYear(2005); log(f.toDateString()); //Returns the specified FullYear
f.setUTCMonth(09); log(f.toDateString());//Returns the specified Month
f.setUTCDate(04); log(f.toDateString()); //Returns the specified Date
f.setUTCHours(3); log(f.toDateString());//Returns the sepcified Hours 
f.setUTCMinutes(30); log(f.toDateString());//Returns the sepcified Minutes
f.setUTCSeconds(59); log(f.toDateString())//Returns the specified Seconds
f.setUTCMilliseconds(999); log(f.toDateString())//Returns the specified MilliSeconds

let a = new Date();
log(a.constructor); //Returns the function that created Date's object prototype
log(a.getTimezoneOffset());//Returns the time difference between UTC time and local time, in minutes
log(Date.parse("oct 04, 2005"));//parses a date string and returns the milliseconds since jan 01,1970.
//prototype let make and use functions as methods 
Date.prototype.myDate = function(){ 
    return this.toLocaleDateString() + " " +this.toLocaleTimeString();

}
log(a.myDate());
log(a.toDateString()); //Returns the converted date portion of a date object into readable date
log(a.toJSON());//Returns the date as a string, formatted as a JSON date
log(a.toLocaleDateString()); //Returns the date portion of a Date object as a string, using locale conventions
log(a.toLocaleTimeString());//Returns the time portion of a Date object as a string, using locale conventions
log(a.toLocaleString()); //Returns the Date object as a string, using locale conventions
log(a.toString()); //Returns the Date Object as a srting.
log(a.toTimeString()) //Returns the time portion of Date object as a string.
log(a.toUTCString());//Converts a Date object to a string, according to universal time.
log(Date.UTC(2023-11-15));//Returns the milliseconds passed since 1st JAN , 1970 according to UTC.
log(typeof a);//Returns the primitive value of a Date object