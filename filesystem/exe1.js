//EXERCISE 1
// WAP to make an obj and convert it into JSON and store it in a new JSON file "json1.json"
/* a JSON is a javaScript Object Notation which carries data in light form.
often used to share information in client side and server side of a website */

const log = console.log;
const fs = require("node:fs");

const bioData = {
    name : "naruto",
    age : 17,
    jutsu : "rasengan",
    clan : "uzumaki",
    spouse : "sasuke"
};
//converting the obj into json
const jsonData = JSON.stringify(bioData);

// converting the json into obj 
const objData = JSON.parse(jsonData);

fs.writeFile("json1.json",jsonData,(err)=>{
    log("done");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    log(data);
    log(jsonData);
    log(objData);
})
