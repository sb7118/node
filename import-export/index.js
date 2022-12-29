//the example to make out own module and import/export it
const add = require("./app");
const multiply = require("./app");
const sub = require("./app");
const div = require("./app");
const factorial = require("./app");

// import { add,sub,div,multiply,factorial } from "./app";
console.log(add(71118,-81117));
console.log(sub(10,-100));
console.log(multiply(90,40));
console.log(div(90,45));
console.log(factorial(6));