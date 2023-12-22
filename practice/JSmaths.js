const log = console.log;
//JavaScript provides 8 mathematical constants that can be accessed as Math properties:
// log(Math.PI);
// log(Math.E);
// log(Math.SQRT2);
// log(Math.SQRT1_2);
// log(Math.LN2);
// log(Math.LN10);
// log(Math.LOG2E);
// log(Math.LOG10E);

//Math method : Number to Integer
let x = 2.5;
log(Math.round(x)); //rounds to its closer integer
//if it is exactly halfway between two integers, it rounds to the even number
log(Math.ceil(x)); //rounds up to its closer integer
log(Math.floor(x)); //rounds down to its closer integer
log(Math.trunc(x));//Returns the integer part of x (new in ES6)
log(Math.sign(x)); //returns 1 if +ve , -1 if -ve and 0 if neutral
log(Math.pow(2,5)); //x to the power of y
log(Math.sqrt(169)); //returns the squareroot
log(Math.abs(-x)); //returns the absolute value of x
log(Math.sin(0 *Math.PI/180)); //returns the sine (a value between -1 and 1) in radians . Angle in radians = (angle in degrees) * PI / 180.
log(Math.cos(0 *Math.PI/180)); //returns the cosine (a value between -1 and 1 ) in radians.
log(Math.min(1,2,3,4,5,6,7,8,4,3,23,2,4,-1)); //finds the lowest value in the argument
log(Math.max(1,2,3,4,5,6,7,8,4,3,23,2,4,-1)); //finds the highest value in the argument
log(Math.random()); //returns the random number between 0 and 1;
log(Math.log(2)); //returns the natural lograthim of specified number
log(Math.log2(2)); //returns the base 2 logarithm of specified number
log(Math.log10(2)); //returns the base 10 logarithm of specified number


