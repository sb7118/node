//importing the file system module
const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');

/*WAP to follow the steps:
1: create a file.
2: append the file.
3: read the data from the file.
4: make a directory named "chatGPT"
5: make a js file which will print "hi , im chatGPT" in the terminal
6: delete the folder chatGPT and its files
7: extract information of a file
8: open file
9: read the directory
10: rename the existing file
*/
//1: to create a file 
fs.writeFile("random.txt","hi , im a random text file.",(err)=>{
    console.log(err);
})

//2: to append File
fs.appendFile("random.txt"," and i m inside filesystem folder.", (err)=>{
    console.log(err);
})

// 3: to read the data (both buffer and text)
//buffer
fs.readFile("random.txt",(err,data)=>{
    console.log(err);
    console.log(data);
})

//text
fs.readFile("random.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
})

// 4: to create a Directory 
// fs.mkdir("chatGPT",(err)=>{
//     console.log(err);
// })


// 5: to create a js file 
// fs.writeFile("/home/pixure/nodejs/node.js/basics/filesystem/chatGPT/greet.js","console.log('hi, im chatGPT'); ",(err)=>{
//     console.log(err);
// })

// 6: to delete greet.js 
// fs.rm("/home/pixure/nodejs/node.js/basics/filesystem/chatGPT/greet.js",(err)=>{
//     console.log(err);
// })

// and to delete the folder 
// fs.rmdir("chatGPT",(err)=>{
//     console.log(err);
// })

// 7. information or stat of a file
fs.stat("random.txt",(err, data)=>{
    console.log(err);
    console.log(data);
});

// 8. opens file maybe , but returns an integer
fs.open("random.txt","r",(err,fd)=>{
    console.log(err,fd);
});

// 9> to read the directory , returns an array of string containing the contens of the specified folder
fs.readdir("/home/pixure/nodejs/node.js/basics", "utf-8" , (err,data)=>{
    console.log(err);
    console.log(data);
})

// 10. renames the file 
// fs.rename("random_text.txt","random.txt",(err)=>{
//     console.log(err);
// })