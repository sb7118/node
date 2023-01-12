// importing the os module
const { networkInterfaces } = require("node:os");
const os = require("node:os");

/* 
WAP to findout user's,
1: device name 
2: platform
3: userinfo
4: total memory and free memory
5: string path of home directory
6: network interfaces
7: information about user's logical CPU core in the system
8: architecture of the system
*/

// 1: device/hostname 
console.log(os.hostname());
// 2 : user platform
console.log(os.platform());
// 3: user info
console.log(os.userInfo()); 
// 4: total memory and free memory 
console.log(`total memory = ${os.totalmem()/1024/1024/1024} and free memory = ${os.freemem()/1024/1024/1024}`);
// 5: string path of home directory 
console.log(os.homedir());
// 6: networkInterfaces
console.log(os.networkInterfaces());
// 7: info about user's logical CPU core in the system
console.log(os.cpus());
// 8: architecture of teh system 
console.log(` system architecture = ${os.arch()} `);