const http = require('http')

// createServer method is looking for the callback
// This callback function has two parameters req and res.
// First parameter req represents the incoming request, for example a client is requesting from the web browser your web page
// Request object will have information about the method
// Second parameter res represents the response we send back

// We also need to mention what port our server will be listening to

const server = http.createServer((req, res)=>{
    console.log(req)
    if(req.url === '/')
    {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about')
    {
        res.end('Here is our short history')
    }

    res.end('<h1> Ooops! </h1><p>We can\'t  seem to find the page you are looking for</p><a href="/">Back Home</a>')
})

server.listen(5000)