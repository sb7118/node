//for more checkout : "https://nodejs.org/api/os.html"
//importing os module
const os = require('os');
let osMod = () => {
    //architechture 64bit
    console.log(os.arch());

    //shows free memory (initially in bytes)
    console.log(os.freemem()/1024/1024/1024);
    //shows total memory (initially in bytes)
    console.log(os.totalmem()/1024/1024/1024);
    //shows the platform or os
    console.log(os.platform());
    //os
    console.log(os.type());
    //end of line?
    // console.log(os.EOL);
    // returns the name of the platform
    console.log(os.hostname());
    //returns the version of the os
    console.log(os.version());
    // Returns an array of objects containing information about each logical CPU core.
    console.log(os.cpus());
    // Returns the string path of the current user's home directory.
    console.log(os.homedir());
    // The platform-specific file path of the null device.
    console.log(os.devNull);
    /* Returns an array containing the 1, 5, and 15 minute load averages.
    The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
    The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].   
    */
    console.log(os.loadavg());    
    //Returns an object containing network interfaces that have been assigned a network address
    console.log(os.networkInterfaces());
    //Returns the operating system as a string.
    console.log(os.release());
    // returns the info about currently effective user 
    console.log(os.userInfo("utf8"));
};

osMod();