const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next(); // allows to continue to next middleware
});

app.use((req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>Hello from express!</h1>');
});

// visit localhost:3000 in browser
app.listen(3000);