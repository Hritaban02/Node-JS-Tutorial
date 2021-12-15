const {readFile, writeFile} = require('fs')

// For asynchronous (non-blocking) methods we need to provide a callback
// It essentially means that we run the callback when we are done
// For example for an event listener like a button, a callback function is run everytime a button is clicked
// Alternative to callback is using promises and using async await

// Callback function has two arguments one is error and the other is result.
console.log('start')
readFile("./content/first.txt", 'utf8', (err, result)=>{
    if(err)
    {
        console.log(err)
        return 
    }
    const first = result
    console.log(first)

    // We need to set up the functionality inside of the callback as the result is being obtained here and is not accessible else where
    readFile("./content/second.txt", 'utf8', (err, result)=>{
        if(err)
        {
            console.log(err)
            return 
        }
        const second = result
        console.log(second)

        writeFile("./content/result-async.txt", "Here is the result : " + first + " , " + second, {flag: 'a'}, (err, result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with the task')
        })

    })

})

console.log('starting the next one')