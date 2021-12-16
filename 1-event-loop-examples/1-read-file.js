// Event Loop 

// The event loop is what allows node.js to perform non-blocking I/O operations despite the fact that Javascript is singlethreaded by offloading operations into the system kernel whenever possible

// Javascript is synchronous and singlethreaded - javascript reads everything line by line
// The solution is to offload something to the browser, i.e., when we are building browser javascript apps we have the option of offloading to the browser
// For example, using the setTimeout function a call back function gets executed after a set amount of time
// Run all immediate tasks first and then execute the callbacks

const {readFile} = require('fs')

console.log('started first task')
readFile("./content/first.txt", 'utf8', (err, result)=>{
    if(err)
    {
        console.log(err)
        return 
    }
    const first = result
    console.log(first)
    console.log("completed first task")

})

console.log("starting next task")