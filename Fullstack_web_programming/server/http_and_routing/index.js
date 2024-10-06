const http = require('http');
const cursos = require('./cursos');
const port = 3000; 

const server = http.createServer((req, res) => {
    

    switch(req.method){
        case 'GET':
            if(req.url === '/cursos'){
                res.statusCode = 200;
                res.end(JSON.stringify(cursos));
            } else {
                res.statusCode = 404;
                res.end('Not found');
            }
            break;
        case 'POST':
            if(req.url === '/cursos'){
                res.statusCode = 201;
                res.end('Curso creado');
            } else {
                res.statusCode = 404;
                res.end('Not found');
            }
            break;
        case 'PUT':
            if(req.url === '/cursos'){
                res.statusCode = 200;
                res.end('Curso actualizado');
            } else {
                res.statusCode = 404;
                res.end('Not found');
            }
            break;
        case 'DELETE':
            if(req.url === '/cursos'){
                res.statusCode = 200;
                res.end('Curso eliminado');
            } else {
                res.statusCode = 404;
                res.end('Not found');
            }
            break;
        default:
            res.statusCode = 404;
            res.end('Not found');
            break;
    }
    // Server logic
    console.log('Request url: ', req.url)
    console.log('Request method: ', req.method)
    console.log('Request headers: ', req.headers)
    console.log('Request code: ', req.statusCode)
    console.log('State code modified: ', res.statusCode)

    res.setHeader('Content-Type', 'application/json');
    console.log('Response headers: ', res.getHeaders())

    res.end('Hello World');
});

server.listen(port, () => {
    console.log('Server running in localhost with port: ', port)
})

