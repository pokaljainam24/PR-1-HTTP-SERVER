const http = require('http');
const handleRequest = require('./controller/requestController');

const port = 8084;

const server = http.createServer(handleRequest);

server.listen(port, (err) => {
    if (err) {
        console.log("Server Is Not Working...");
    } else {
        console.log("Server Is Working...");
        console.log("http://localhost:" + port);
    }
})