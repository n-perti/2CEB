const http = require('http');

const port = 3000

const server = http.createServer((req, res) => {
    // Server logic

    res.end('...');
});

server.listen(port, () => {
    console.log('Server running in localhost with port: ', port)
})

