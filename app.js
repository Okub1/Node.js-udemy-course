const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><title>First website!</title></head>');
    res.write('<body><h1>Welcome to my first website in node.js!</h1></body>');
    res.write('</html>');
});

// visit localhost:3000 in browser, to see my first website! :)
server.listen(3000);