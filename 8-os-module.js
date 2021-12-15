// os module is a built-in module and provides several useful properties and methods for interacting with the OS and server
const os = require('os')

// Info about current user
const user = os.userInfo()

console.log(user)

// Method returns the system uptime in secs
console.log("The system uptime is %f seconds", os.uptime())

const currentOS = {
    name: os.type(), 
    release: os.release(),
    totalMem: os.totalmem(),
}

console.log(currentOS)