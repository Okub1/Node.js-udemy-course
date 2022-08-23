const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

// visit localhost:3000 in browser, to see my first website! :)
server.listen(3000);