const http = require('http');

let requestCounter = 0;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/':
            requestCounter++;
            response.write(' IT-Kamasutra: ' + requestCounter);
            break;
        case '/favicon.ico':
            response.write('Students');
            break;
        default:
            response.write('Not found');
    }

    response.end();
});

server.listen(3003);
