const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to my home page :)')
    }

    if (req.url === '/about') {
        res.end('Check out a bit of my story !')
    }

    res.end(`
        <h1>Oops</h1>
        <p>Does not exist page like that</p>
        <a href="/">Back home</a>
    `)
})

server.listen(5000)