const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorsController = require('./controllers/errors');

const app = express();

// setting express global configuration value
// simillar to .env in laravel
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(errorsController.get404);

// visit localhost:3000 in browser
app.listen(3000);