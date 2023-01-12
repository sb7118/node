//Streamming in node js
const log = console.log;
//importing the necessary modules
const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer().listen(4000);


server.on("request",(req,res)=>{
    //traditions method . XD
    // fs.readFile("text.txt",(err,data)=>{
    //     log(err)
    //     res.end(data);
    // })
    const rstream = fs.ReadStream("text.txt");
    //data - this event is fired when there is data to read
  /*  rstream.on("data",(chunkData)=>{
        res.write(chunkData);
    });
    //end - this event is fired when there is no more data to read
    rstream.on("end",()=>{
        res.end();
    });
    //error- this event is fired when error receiving or writing data
    rstream.on("error",(err)=>{
        log(err);
        res.end("this file doesnot exist!");
    }); */

    //another method to read and write
    rstream.pipe(res); //stream pipes
});
