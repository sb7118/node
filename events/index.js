// EVENTS module
// Defining the constants 
const log = console.log;

//importing the events module
//class
const EventEmmiter = require("events");
//object
const event = new EventEmmiter();
// making the event . always define an event before emitting or the code will not work!
event.on("greet",()=>{
    log("good morning");
})
event.on("greet",()=>{
    log("now , you can ");
})
event.on("greet",()=>{
    log("call multiple events on single emit!!");
})
//adding the event
event.emit("greet");

//an event to check the status of the page
event.on("checkStatus",(statusCode, message)=>{
    log(`the status code  is ${statusCode} and the page ${message} `)
})

//multiple arguments on emmiter
event.emit("checkStatus",200,"ok");
