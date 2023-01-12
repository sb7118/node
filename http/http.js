// Defining the keywords
const log = console.log;

//importing the http module
const http = require("node:http");
const fs = require("node:fs");
// const url = require("node:url");

let data = (req,res) =>{

    //API DATA
    const  data = fs.readFileSync(`${__dirname}/userAPI/userapi.json`,"utf-8");
    const objData = JSON.parse(data);
    if(req.url == "/"){ 
        // res.write("<h1> welcome to this page :) </h1>");
        res.end("hello world");
        log("in page");
    }else if(req.url == "/home"){
        res.end("welcome to the home page");
        log("in home page");
    }else if(req.url == "/userapi"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(`${objData[2].aim}  ${objData[2].roll_no} `);
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("<H1> 404 error page </H1>");
    }
    // log(req.url);
    // res.end(" "); //it causes nodemon crash so better not use it outside of if statement

}

//creating the server
let server = http.createServer(data).listen(4000);